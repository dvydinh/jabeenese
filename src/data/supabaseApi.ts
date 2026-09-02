import { supabase } from '../lib/supabase'
import type { VocabBook, VocabUnit, VocabWord, KanjiInfo } from './vocabData'

const BOOK_UI_META: Record<string, any> = {
  "Genki I": { color: "#ff6b6b", shadow: "#c0392b", subtitle: "Sơ cấp" },
  "Genki II": { color: "#a29bfe", shadow: "#6c5ce7", subtitle: "Trung cấp" },
  "Minna no Nihongo I": { color: "#00b894", shadow: "#00876a", subtitle: "みんなの日本語 Sơ cấp" },
  "Minna no Nihongo II": { color: "#fdcb6e", shadow: "#e17055", subtitle: "みんなの日本語 Trung cấp" },
}

export async function fetchBooks(): Promise<VocabBook[]> {
  const { data: sachData, error } = await supabase
    .from('sach')
    .select(`
      id, ten, band,
      sach_tuvung_link (
        unit
      )
    `)
    
  if (error) {
    console.error('Error fetching books:', error)
    return []
  }
  
  return sachData.map((s: any) => {
    // Đếm số từ vựng trong mỗi unit
    const unitsMap = new Map<number, number>()
    s.sach_tuvung_link.forEach((link: any) => {
      const u = link.unit
      unitsMap.set(u, (unitsMap.get(u) || 0) + 1)
    })
    
    const units: VocabUnit[] = Array.from(unitsMap.entries()).map(([u, count]) => ({
      id: `b${s.id}-u${u}`,
      name: `Bài ${u}`,
      words: Array(count).fill({} as VocabWord) // Mock array just for length property in VocabularyPage
    }))
    
    units.sort((a, b) => {
      const numA = parseInt(a.name.replace('Bài ', ''))
      const numB = parseInt(b.name.replace('Bài ', ''))
      return numA - numB
    })
    
    const meta = BOOK_UI_META[s.ten] || { color: "#a78bfa", shadow: "#7c3aed", subtitle: s.band || "Khóa học" }
    
    return {
      id: s.id.toString(),
      title: s.ten,
      subtitle: meta.subtitle,
      color: meta.color,
      shadow: meta.shadow,
      units
    }
  })
}

export async function fetchUnitWords(sachId: string, unitNum: number): Promise<VocabWord[]> {
  const { data, error } = await supabase
    .from('sach_tuvung_link')
    .select(`
      tuvung (
        id, tu_vung, cach_doc, nghia,
        tuvung_hantu_link (
          hantu (
            id, chukanji, amhanviet, note,
            hantu_bothu_link (
              bothu (
                bo, nghia
              )
            )
          )
        )
      )
    `)
    .eq('sach_id', sachId)
    .eq('unit', unitNum)
    
  if (error) {
    console.error('Error fetching unit words:', error)
    return []
  }
  
  return data.map((link: any) => {
    const t = link.tuvung
    const kanjiList = (t.tuvung_hantu_link || []).map((th: any) => {
      const h = th.hantu
      const radicals = (h.hantu_bothu_link || [])
        .map((link: any) => link.bothu)
        .filter(Boolean)
        .map((b: any) => `${b.bo} (${b.nghia})`)
        .join(', ')

      return {
        character: h.chukanji,
        hanViet: h.amhanviet,
        radical: radicals,
        story: h.note
      } as KanjiInfo
    })
    
    return {
      japanese: t.tu_vung,
      reading: t.cach_doc,
      meaning: t.nghia,
      kanji: kanjiList.length > 0 ? kanjiList : undefined
    } as VocabWord
  })
}
