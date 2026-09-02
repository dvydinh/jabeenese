export type VocabWord = {
  japanese: string
  reading: string
  meaning: string
}

export type VocabBook = {
  id: string
  title: string
  subtitle: string
  color: string
  shadow: string
  wordCount: number
  words: VocabWord[]
}

export const vocabBooks: VocabBook[] = [
  {
    id: "genki-1",
    title: "Genki I",
    subtitle: "Elementary Japanese",
    color: "#ff6b6b",
    shadow: "#c0392b",
    wordCount: 15,
    words: [
      { japanese: "大学", reading: "だいがく", meaning: "university" },
      { japanese: "学生", reading: "がくせい", meaning: "student" },
      { japanese: "先生", reading: "せんせい", meaning: "teacher" },
      { japanese: "友達", reading: "ともだち", meaning: "friend" },
      { japanese: "電話", reading: "でんわ", meaning: "telephone" },
      { japanese: "時間", reading: "じかん", meaning: "time" },
      { japanese: "毎日", reading: "まいにち", meaning: "every day" },
      { japanese: "今日", reading: "きょう", meaning: "today" },
      { japanese: "明日", reading: "あした", meaning: "tomorrow" },
      { japanese: "食べる", reading: "たべる", meaning: "to eat" },
      { japanese: "飲む", reading: "のむ", meaning: "to drink" },
      { japanese: "行く", reading: "いく", meaning: "to go" },
      { japanese: "来る", reading: "くる", meaning: "to come" },
      { japanese: "見る", reading: "みる", meaning: "to see / to watch" },
      { japanese: "聞く", reading: "きく", meaning: "to listen / to ask" },
    ],
  },
  {
    id: "genki-2",
    title: "Genki II",
    subtitle: "Intermediate Japanese",
    color: "#a29bfe",
    shadow: "#6c5ce7",
    wordCount: 15,
    words: [
      { japanese: "経験", reading: "けいけん", meaning: "experience" },
      { japanese: "社会", reading: "しゃかい", meaning: "society" },
      { japanese: "政治", reading: "せいじ", meaning: "politics" },
      { japanese: "経済", reading: "けいざい", meaning: "economy" },
      { japanese: "文化", reading: "ぶんか", meaning: "culture" },
      { japanese: "歴史", reading: "れきし", meaning: "history" },
      { japanese: "将来", reading: "しょうらい", meaning: "future" },
      { japanese: "環境", reading: "かんきょう", meaning: "environment" },
      { japanese: "卒業", reading: "そつぎょう", meaning: "graduation" },
      { japanese: "就職", reading: "しゅうしょく", meaning: "finding employment" },
      { japanese: "翻訳", reading: "ほんやく", meaning: "translation" },
      { japanese: "研究", reading: "けんきゅう", meaning: "research" },
      { japanese: "相談", reading: "そうだん", meaning: "consultation" },
      { japanese: "準備", reading: "じゅんび", meaning: "preparation" },
      { japanese: "説明", reading: "せつめい", meaning: "explanation" },
    ],
  },
  {
    id: "minna-1",
    title: "Minna no Nihongo I",
    subtitle: "みんなの日本語 初級",
    color: "#00b894",
    shadow: "#00876a",
    wordCount: 15,
    words: [
      { japanese: "会社", reading: "かいしゃ", meaning: "company" },
      { japanese: "病院", reading: "びょういん", meaning: "hospital" },
      { japanese: "銀行", reading: "ぎんこう", meaning: "bank" },
      { japanese: "郵便局", reading: "ゆうびんきょく", meaning: "post office" },
      { japanese: "図書館", reading: "としょかん", meaning: "library" },
      { japanese: "映画", reading: "えいが", meaning: "movie" },
      { japanese: "音楽", reading: "おんがく", meaning: "music" },
      { japanese: "旅行", reading: "りょこう", meaning: "travel" },
      { japanese: "写真", reading: "しゃしん", meaning: "photograph" },
      { japanese: "天気", reading: "てんき", meaning: "weather" },
      { japanese: "買い物", reading: "かいもの", meaning: "shopping" },
      { japanese: "散歩", reading: "さんぽ", meaning: "a walk / stroll" },
      { japanese: "練習", reading: "れんしゅう", meaning: "practice" },
      { japanese: "宿題", reading: "しゅくだい", meaning: "homework" },
      { japanese: "約束", reading: "やくそく", meaning: "promise / appointment" },
    ],
  },
  {
    id: "minna-2",
    title: "Minna no Nihongo II",
    subtitle: "みんなの日本語 中級",
    color: "#fdcb6e",
    shadow: "#e17055",
    wordCount: 15,
    words: [
      { japanese: "交通", reading: "こうつう", meaning: "traffic / transportation" },
      { japanese: "事故", reading: "じこ", meaning: "accident" },
      { japanese: "原因", reading: "げんいん", meaning: "cause / reason" },
      { japanese: "結果", reading: "けっか", meaning: "result" },
      { japanese: "意見", reading: "いけん", meaning: "opinion" },
      { japanese: "計画", reading: "けいかく", meaning: "plan" },
      { japanese: "連絡", reading: "れんらく", meaning: "contact" },
      { japanese: "関係", reading: "かんけい", meaning: "relationship" },
      { japanese: "習慣", reading: "しゅうかん", meaning: "habit / custom" },
      { japanese: "規則", reading: "きそく", meaning: "rule / regulation" },
      { japanese: "比較", reading: "ひかく", meaning: "comparison" },
      { japanese: "発表", reading: "はっぴょう", meaning: "presentation" },
      { japanese: "議論", reading: "ぎろん", meaning: "discussion / debate" },
      { japanese: "影響", reading: "えいきょう", meaning: "influence" },
      { japanese: "努力", reading: "どりょく", meaning: "effort" },
    ],
  },
]
