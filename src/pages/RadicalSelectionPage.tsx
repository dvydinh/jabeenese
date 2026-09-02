import { useState, useEffect } from "react"
import type { RadicalInfo } from "../data/vocabData"
import { fetchRadicalsGroupedByStrokes, type RadicalGroup } from "../data/supabaseApi"

export default function RadicalSelectionPage({
  onSelectGroup,
}: {
  onSelectGroup: (strokes: number, radicals: RadicalInfo[]) => void
}) {
  const [groups, setGroups] = useState<RadicalGroup[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRadicalsGroupedByStrokes().then((data) => {
      setGroups(data)
      setLoading(false)
    })
  }, [])

  return (
    <div className="min-h-screen bg-cream font-body text-ink">

      <div className="mx-auto max-w-5xl px-5 py-10 sm:px-10">
        <h1 className="font-display text-4xl font-extrabold sm:text-5xl">
          Chọn nhóm nét
        </h1>
        <p className="mt-3 max-w-lg font-body text-lg font-medium text-ink-soft">
          Học bộ thủ phân theo số nét. Nắm chắc bộ thủ để dễ dàng phân tích cấu tạo Hán tự hơn nhé!
        </p>

        {loading ? (
          <div className="mt-10 flex justify-center py-20">
            <div className="h-12 w-12 animate-spin rounded-full border-[4px] border-ink/20 border-t-honey" />
          </div>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group, idx) => (
              <button
                key={group.strokes}
                onClick={() => onSelectGroup(group.strokes, group.radicals)}
                className="group flex flex-col items-start gap-3 rounded-[2rem] border-[4px] border-ink bg-cream p-7 text-left shadow-[6px_6px_0_0_#1c1a17] transition-all duration-300 hover:-translate-y-2 hover:shadow-[8px_12px_0_0_#a78bfa]"
                style={{ animationDelay: `${(idx % 10) * 80}ms` }}
              >
                <div
                  className="grid h-16 w-16 place-items-center rounded-2xl border-[3px] border-ink bg-purple-300 font-display text-3xl font-extrabold text-ink transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-110"
                >
                  {group.strokes}
                </div>
                <h3 className="font-display text-2xl font-extrabold sm:text-3xl">
                  {group.strokes} nét
                </h3>
                <span className="inline-flex items-center gap-1.5 rounded-full border-[3px] border-ink bg-honey px-3 py-1 font-display text-xs font-bold text-ink">
                  {group.radicals.length} bộ thủ
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
