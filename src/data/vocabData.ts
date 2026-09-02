export type RadicalInfo = {
  id: number
  bo: string
  ten_bo: string
  nghia: string
  note: string
  so_net: number
}

export type KanjiInfo = {
  character: string
  hanViet: string
  radical?: string
  nghia?: string
  radicals?: RadicalInfo[]
  story: string
}

export type VocabWord = {
  japanese: string
  reading: string
  meaning: string
  kanji?: KanjiInfo[]
}

export type VocabUnit = {
  id: string
  name: string
  words: VocabWord[]
}

export type VocabBook = {
  id: string
  title: string
  subtitle: string
  color: string
  shadow: string
  units: VocabUnit[]
}

export const vocabBooks: VocabBook[] = [
  {
    id: "genki-1",
    title: "Genki I",
    subtitle: "Sơ cấp",
    color: "#ff6b6b",
    shadow: "#c0392b",
    units: [
      {
        id: "g1-u1",
        name: "Bài 1: Chào hỏi",
        words: [
          {
            japanese: "大学",
            reading: "だいがく",
            meaning: "trường đại học",
            kanji: [
              { character: "大", hanViet: "ĐẠI", radical: "大 (lớn)", story: "Người đứng dang tay rộng ra: thật LỚN!" },
              { character: "学", hanViet: "HỌC", radical: "子 (con)", story: "Đứa trẻ (子) ngồi dưới mái nhà, chăm chỉ HỌC hành." },
            ],
          },
          {
            japanese: "学生",
            reading: "がくせい",
            meaning: "học sinh / sinh viên",
            kanji: [
              { character: "学", hanViet: "HỌC", radical: "子 (con)", story: "Đứa trẻ (子) ngồi dưới mái nhà, chăm chỉ HỌC hành." },
              { character: "生", hanViet: "SINH", radical: "生 (sống)", story: "Mầm cây mọc lên từ mặt đất: sự SỐNG nảy sinh." },
            ],
          },
          {
            japanese: "先生",
            reading: "せんせい",
            meaning: "thầy / cô giáo",
            kanji: [
              { character: "先", hanViet: "TIÊN", radical: "儿 (chân)", story: "Người đi TRƯỚC (先) dẫn đường, bước chân (儿) lên trên." },
              { character: "生", hanViet: "SINH", radical: "生 (sống)", story: "Mầm cây mọc lên từ mặt đất: sự SỐNG nảy sinh." },
            ],
          },
          {
            japanese: "友達",
            reading: "ともだち",
            meaning: "bạn bè",
            kanji: [
              { character: "友", hanViet: "HỮU", radical: "又 (tay)", story: "Hai bàn tay nắm lấy nhau: BẠN bè thân thiết." },
              { character: "達", hanViet: "ĐẠT", radical: "辶 (đi)", story: "Đi (辶) thật xa để ĐẠT tới đích, gặp được nhiều người." },
            ],
          },
          {
            japanese: "電話",
            reading: "でんわ",
            meaning: "điện thoại",
            kanji: [
              { character: "電", hanViet: "ĐIỆN", radical: "雨 (mưa)", story: "Sấm sét (雨) đánh xuống: đó là ĐIỆN từ trời." },
              { character: "話", hanViet: "THOẠI", radical: "言 (lời)", story: "Dùng lời (言) và lưỡi để NÓI chuyện: đàm THOẠI." },
            ],
          },
        ],
      },
      {
        id: "g1-u2",
        name: "Bài 2: Mua sắm",
        words: [
          {
            japanese: "時間",
            reading: "じかん",
            meaning: "thời gian",
            kanji: [
              { character: "時", hanViet: "THỜI", radical: "日 (mặt trời)", story: "Mặt trời (日) di chuyển qua chùa (寺): THỜI gian trôi." },
              { character: "間", hanViet: "GIAN", radical: "門 (cổng)", story: "Mặt trời (日) chiếu qua khe cổng (門): khoảng GIAN, khoảng cách." },
            ],
          },
          {
            japanese: "毎日",
            reading: "まいにち",
            meaning: "mỗi ngày",
            kanji: [
              { character: "毎", hanViet: "MỖI", radical: "母 (mẹ)", story: "Người mẹ (母) ngày nào cũng chăm con: MỖI ngày đều vậy." },
              { character: "日", hanViet: "NHẬT", radical: "日 (mặt trời)", story: "Hình mặt trời tròn: một NGÀY mới." },
            ],
          },
          {
            japanese: "今日",
            reading: "きょう",
            meaning: "hôm nay",
            kanji: [
              { character: "今", hanViet: "KIM", radical: "人 (người)", story: "Mái che (人) trên miệng: che đến tận BÂY GIỜ, hiện tại." },
              { character: "日", hanViet: "NHẬT", radical: "日 (mặt trời)", story: "Hình mặt trời tròn: một NGÀY mới." },
            ],
          },
          {
            japanese: "明日",
            reading: "あした",
            meaning: "ngày mai",
            kanji: [
              { character: "明", hanViet: "MINH", radical: "日 (mặt trời)", story: "Mặt trời (日) và mặt trăng (月) cùng chiếu: SÁNG rõ, MINH." },
              { character: "日", hanViet: "NHẬT", radical: "日 (mặt trời)", story: "Hình mặt trời tròn: một NGÀY mới." },
            ],
          },
          {
            japanese: "食べる",
            reading: "たべる",
            meaning: "ăn",
            kanji: [
              { character: "食", hanViet: "THỰC", radical: "食 (ăn)", story: "Nắp vung (人) trên nồi cơm tốt (良): bữa ĂN ngon." },
            ],
          },
        ],
      },
      {
        id: "g1-u3",
        name: "Bài 3: Cuộc sống",
        words: [
          {
            japanese: "飲む",
            reading: "のむ",
            meaning: "uống",
            kanji: [
              { character: "飲", hanViet: "ẨM", radical: "食 (ăn)", story: "Đồ ăn (食) + người há miệng (欠): UỐNG vào bụng." },
            ],
          },
          {
            japanese: "行く",
            reading: "いく",
            meaning: "đi",
            kanji: [
              { character: "行", hanViet: "HÀNH", radical: "行 (đi)", story: "Ngã tư đường: ĐI lại, HÀNH trình." },
            ],
          },
          {
            japanese: "来る",
            reading: "くる",
            meaning: "đến",
            kanji: [
              { character: "来", hanViet: "LAI", radical: "木 (cây)", story: "Cây lúa mì (木) trĩu bông: mùa màng ĐẾN, tương LAI." },
            ],
          },
          {
            japanese: "見る",
            reading: "みる",
            meaning: "nhìn / xem",
            kanji: [
              { character: "見", hanViet: "KIẾN", radical: "見 (nhìn)", story: "Con mắt (目) trên đôi chân (儿): đi đâu cũng NHÌN thấy." },
            ],
          },
          {
            japanese: "聞く",
            reading: "きく",
            meaning: "nghe / hỏi",
            kanji: [
              { character: "聞", hanViet: "VĂN", radical: "耳 (tai)", story: "Tai (耳) áp vào cổng (門): lắng NGHE từ bên ngoài." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "genki-2",
    title: "Genki II",
    subtitle: "Trung cấp",
    color: "#a29bfe",
    shadow: "#6c5ce7",
    units: [
      {
        id: "g2-u1",
        name: "Bài 13: Xã hội",
        words: [
          {
            japanese: "経験",
            reading: "けいけん",
            meaning: "kinh nghiệm",
            kanji: [
              { character: "経", hanViet: "KINH", radical: "糸 (sợi)", story: "Sợi chỉ (糸) dệt qua khung cửi: con đường KINH qua." },
              { character: "験", hanViet: "NGHIỆM", radical: "馬 (ngựa)", story: "Cưỡi ngựa (馬) để THỬ NGHIỆM sức mạnh." },
            ],
          },
          {
            japanese: "社会",
            reading: "しゃかい",
            meaning: "xã hội",
            kanji: [
              { character: "社", hanViet: "XÃ", radical: "示 (thần)", story: "Thần linh (示) che chở mảnh đất (土): ngôi đền, XÃ hội." },
              { character: "会", hanViet: "HỘI", radical: "人 (người)", story: "Người (人) tụ tập dưới mái: gặp GỠ, HỘI họp." },
            ],
          },
          {
            japanese: "文化",
            reading: "ぶんか",
            meaning: "văn hóa",
            kanji: [
              { character: "文", hanViet: "VĂN", radical: "文 (văn)", story: "Nét vẽ hoa văn trên ngực: VĂN chương, văn minh." },
              { character: "化", hanViet: "HÓA", radical: "人 (người)", story: "Người đứng (人) và người lộn ngược: biến HÓA, thay đổi." },
            ],
          },
          {
            japanese: "歴史",
            reading: "れきし",
            meaning: "lịch sử",
            kanji: [
              { character: "歴", hanViet: "LỊCH", radical: "止 (dừng)", story: "Những vách đá (厂) ghi dấu thời gian dừng (止) lại: LỊCH sử." },
              { character: "史", hanViet: "SỬ", radical: "口 (miệng)", story: "Bàn tay cầm bút viết lại: ghi chép SỬ sách." },
            ],
          },
          {
            japanese: "将来",
            reading: "しょうらい",
            meaning: "tương lai",
            kanji: [
              { character: "将", hanViet: "TƯƠNG", radical: "寸 (tấc)", story: "Tay (寸) cầm miếng thịt dâng lên: SẮP, TƯƠNG lai." },
              { character: "来", hanViet: "LAI", radical: "木 (cây)", story: "Cây lúa mì trĩu bông: mùa màng ĐẾN, tương LAI." },
            ],
          },
        ],
      },
      {
        id: "g2-u2",
        name: "Bài 14: Công việc",
        words: [
          {
            japanese: "卒業",
            reading: "そつぎょう",
            meaning: "tốt nghiệp",
            kanji: [
              { character: "卒", hanViet: "TỐT", radical: "十 (mười)", story: "Binh lính (卒) xếp hàng: hoàn thành, TỐT nghiệp." },
              { character: "業", hanViet: "NGHIỆP", radical: "木 (cây)", story: "Cây cổ thụ lớn với nhiều nhánh: sự NGHIỆP đồ sộ." },
            ],
          },
          {
            japanese: "就職",
            reading: "しゅうしょく",
            meaning: "xin việc làm",
            kanji: [
              { character: "就", hanViet: "TỰU", radical: "尤 (đặc biệt)", story: "Đến (京) nơi đặc biệt (尤): ĐẾN nhận việc, TỰU chức." },
              { character: "職", hanViet: "CHỨC", radical: "耳 (tai)", story: "Tai (耳) lắng nghe lệnh, tay cầm vũ khí (戈): CHỨC vụ." },
            ],
          },
          {
            japanese: "研究",
            reading: "けんきゅう",
            meaning: "nghiên cứu",
            kanji: [
              { character: "研", hanViet: "NGHIÊN", radical: "石 (đá)", story: "Mài đá (石) cho nhẵn (开): NGHIÊN cứu, mài giũa kiến thức." },
              { character: "究", hanViet: "CỨU", radical: "穴 (lỗ)", story: "Chui vào hang (穴) tìm tận cùng (九): CỨU xét, tìm hiểu." },
            ],
          },
          {
            japanese: "準備",
            reading: "じゅんび",
            meaning: "chuẩn bị",
            kanji: [
              { character: "準", hanViet: "CHUẨN", radical: "水 (nước)", story: "Nước (水) chảy đều, bằng phẳng: mực CHUẨN, tiêu chuẩn." },
              { character: "備", hanViet: "BỊ", radical: "人 (người)", story: "Người (人) sắp xếp đầy đủ đồ dùng: CHUẨN BỊ." },
            ],
          },
          {
            japanese: "説明",
            reading: "せつめい",
            meaning: "giải thích",
            kanji: [
              { character: "説", hanViet: "THUYẾT", radical: "言 (lời)", story: "Dùng lời (言) để trình bày: giải THUYẾT, thuyết trình." },
              { character: "明", hanViet: "MINH", radical: "日 (mặt trời)", story: "Mặt trời (日) và mặt trăng (月): SÁNG rõ, MINH bạch." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "minna-1",
    title: "Minna no Nihongo I",
    subtitle: "みんなの日本語 Sơ cấp",
    color: "#00b894",
    shadow: "#00876a",
    units: [
      {
        id: "m1-u1",
        name: "Bài 1: Giới thiệu",
        words: [
          {
            japanese: "会社",
            reading: "かいしゃ",
            meaning: "công ty",
            kanji: [
              { character: "会", hanViet: "HỘI", radical: "人 (người)", story: "Người (人) tụ tập dưới mái: gặp gỡ, HỘI họp." },
              { character: "社", hanViet: "XÃ", radical: "示 (thần)", story: "Thần linh (示) che chở mảnh đất (土): ngôi đền, XÃ hội." },
            ],
          },
          {
            japanese: "病院",
            reading: "びょういん",
            meaning: "bệnh viện",
            kanji: [
              { character: "病", hanViet: "BỆNH", radical: "疒 (bệnh)", story: "Người nằm trên giường (疒) vì BỆNH: ốm đau." },
              { character: "院", hanViet: "VIỆN", radical: "阝(đồi)", story: "Bên ngồi đồi (阝) có tòa nhà hoàn chỉnh: VIỆN, học viện." },
            ],
          },
          {
            japanese: "銀行",
            reading: "ぎんこう",
            meaning: "ngân hàng",
            kanji: [
              { character: "銀", hanViet: "NGÂN", radical: "金 (kim loại)", story: "Kim loại (金) quý: bạc, NGÂN." },
              { character: "行", hanViet: "HÀNH", radical: "行 (đi)", story: "Ngã tư đường: ĐI lại, HÀNH trình, ngân HÀNG." },
            ],
          },
          {
            japanese: "図書館",
            reading: "としょかん",
            meaning: "thư viện",
            kanji: [
              { character: "図", hanViet: "ĐỒ", radical: "囗 (bao quanh)", story: "Bản ĐỒ được khung (囗) bao quanh." },
              { character: "書", hanViet: "THƯ", radical: "日 (mặt trời)", story: "Tay cầm bút viết: sách THƯ, thư pháp." },
              { character: "館", hanViet: "QUÁN", radical: "食 (ăn)", story: "Nhà (舍) có đồ ăn (食): nơi trú ngụ, thư QUÁN." },
            ],
          },
          {
            japanese: "映画",
            reading: "えいが",
            meaning: "phim ảnh",
            kanji: [
              { character: "映", hanViet: "ÁNH", radical: "日 (mặt trời)", story: "Ánh sáng mặt trời (日) chiếu vào trung tâm (央): phản ÁNH." },
              { character: "画", hanViet: "HỌA", radical: "田 (ruộng)", story: "Dùng bút vẽ ranh giới ruộng (田): bức HỌA, vẽ tranh." },
            ],
          },
        ],
      },
      {
        id: "m1-u2",
        name: "Bài 2: Sinh hoạt",
        words: [
          {
            japanese: "音楽",
            reading: "おんがく",
            meaning: "âm nhạc",
            kanji: [
              { character: "音", hanViet: "ÂM", radical: "日 (mặt trời)", story: "Miệng (日) phát ra tiếng đứng (立): ÂM thanh." },
              { character: "楽", hanViet: "NHẠC / LẠC", radical: "木 (cây)", story: "Nhạc cụ bằng gỗ (木) với dây đàn: ÂM NHẠC, vui vẻ." },
            ],
          },
          {
            japanese: "旅行",
            reading: "りょこう",
            meaning: "du lịch",
            kanji: [
              { character: "旅", hanViet: "LỮ", radical: "方 (phương)", story: "Cờ (方) dẫn đoàn người đi xa: LỮ hành, du lịch." },
              { character: "行", hanViet: "HÀNH", radical: "行 (đi)", story: "Ngã tư đường: ĐI lại, HÀNH trình." },
            ],
          },
          {
            japanese: "写真",
            reading: "しゃしん",
            meaning: "ảnh chụp",
            kanji: [
              { character: "写", hanViet: "TẢ", radical: "冖 (nắp)", story: "Dưới mái che, chép lại: sao CHÉP, miêu TẢ." },
              { character: "真", hanViet: "CHÂN", radical: "目 (mắt)", story: "Mắt (目) nhìn thẳng: sự THẬT, CHÂN thực." },
            ],
          },
          {
            japanese: "天気",
            reading: "てんき",
            meaning: "thời tiết",
            kanji: [
              { character: "天", hanViet: "THIÊN", radical: "大 (lớn)", story: "Trên đầu người (大) là bầu TRỜI: THIÊN." },
              { character: "気", hanViet: "KHÍ", radical: "气 (hơi)", story: "Hơi nước (气) bốc lên từ gạo (米): KHÍ, không khí." },
            ],
          },
          {
            japanese: "練習",
            reading: "れんしゅう",
            meaning: "luyện tập",
            kanji: [
              { character: "練", hanViet: "LUYỆN", radical: "糸 (sợi)", story: "Kéo sợi (糸) nhiều lần cho đều: LUYỆN tập." },
              { character: "習", hanViet: "TẬP", radical: "羽 (cánh)", story: "Chim con vỗ cánh (羽) tập bay: HỌC TẬP." },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "minna-2",
    title: "Minna no Nihongo II",
    subtitle: "みんなの日本語 Trung cấp",
    color: "#fdcb6e",
    shadow: "#e17055",
    units: [
      {
        id: "m2-u1",
        name: "Bài 26: Giao thông",
        words: [
          {
            japanese: "交通",
            reading: "こうつう",
            meaning: "giao thông",
            kanji: [
              { character: "交", hanViet: "GIAO", radical: "亠 (nắp)", story: "Hai chân bắt chéo nhau: GIAO nhau, giao lưu." },
              { character: "通", hanViet: "THÔNG", radical: "辶 (đi)", story: "Đi (辶) xuyên qua đường: THÔNG suốt." },
            ],
          },
          {
            japanese: "事故",
            reading: "じこ",
            meaning: "tai nạn",
            kanji: [
              { character: "事", hanViet: "SỰ", radical: "亅 (móc)", story: "Tay cầm bút ghi chép công việc: SỰ việc, sự kiện." },
              { character: "故", hanViet: "CỐ", radical: "攵 (đánh)", story: "Điều cũ (古) bị tác động (攵): CỐ sự, nguyên cớ." },
            ],
          },
          {
            japanese: "原因",
            reading: "げんいん",
            meaning: "nguyên nhân",
            kanji: [
              { character: "原", hanViet: "NGUYÊN", radical: "厂 (vách)", story: "Suối (泉) chảy từ vách núi (厂): NGUYÊN thủy, nguồn gốc." },
              { character: "因", hanViet: "NHÂN", radical: "囗 (bao quanh)", story: "Cái lớn (大) bị bao quanh (囗): NGUYÊN NHÂN, bị ràng buộc." },
            ],
          },
          {
            japanese: "結果",
            reading: "けっか",
            meaning: "kết quả",
            kanji: [
              { character: "結", hanViet: "KẾT", radical: "糸 (sợi)", story: "Buộc sợi chỉ (糸) lại: KẾT nối, kết thúc." },
              { character: "果", hanViet: "QUẢ", radical: "木 (cây)", story: "Trái cây trên cành (木): QUẢ, thành quả." },
            ],
          },
          {
            japanese: "計画",
            reading: "けいかく",
            meaning: "kế hoạch",
            kanji: [
              { character: "計", hanViet: "KẾ", radical: "言 (lời)", story: "Dùng lời (言) với số mười (十): tính toán, KẾ hoạch." },
              { character: "画", hanViet: "HỌA", radical: "田 (ruộng)", story: "Vẽ ranh giới ruộng (田): bức HỌA, kế HOẠCH." },
            ],
          },
        ],
      },
      {
        id: "m2-u2",
        name: "Bài 27: Quan hệ",
        words: [
          {
            japanese: "連絡",
            reading: "れんらく",
            meaning: "liên lạc",
            kanji: [
              { character: "連", hanViet: "LIÊN", radical: "辶 (đi)", story: "Xe (車) đi (辶) nối tiếp nhau: LIÊN tục." },
              { character: "絡", hanViet: "LẠC", radical: "糸 (sợi)", story: "Sợi chỉ (糸) nối lại với nhau: liên LẠC." },
            ],
          },
          {
            japanese: "関係",
            reading: "かんけい",
            meaning: "mối quan hệ",
            kanji: [
              { character: "関", hanViet: "QUAN", radical: "門 (cổng)", story: "Cánh cổng (門) then cài: QUAN ải, liên QUAN." },
              { character: "係", hanViet: "HỆ", radical: "人 (người)", story: "Người (人) buộc sợi dây: mối quan HỆ, ràng buộc." },
            ],
          },
          {
            japanese: "影響",
            reading: "えいきょう",
            meaning: "ảnh hưởng",
            kanji: [
              { character: "影", hanViet: "ẢNH", radical: "彡 (lông)", story: "Ánh sáng (景) tạo bóng (彡): bóng ẢNH." },
              { character: "響", hanViet: "HƯỞNG", radical: "音 (âm)", story: "Âm thanh (音) vang vọng trong làng (郷): ẢNH HƯỞNG." },
            ],
          },
          {
            japanese: "努力",
            reading: "どりょく",
            meaning: "nỗ lực",
            kanji: [
              { character: "努", hanViet: "NỖ", radical: "力 (sức)", story: "Nô lệ (奴) dùng sức (力): NỖ lực hết mình." },
              { character: "力", hanViet: "LỰC", radical: "力 (sức)", story: "Cánh tay cuộn cơ bắp: SỨC mạnh, LỰC." },
            ],
          },
          {
            japanese: "発表",
            reading: "はっぴょう",
            meaning: "thuyết trình",
            kanji: [
              { character: "発", hanViet: "PHÁT", radical: "癶 (hai chân)", story: "Hai chân (癶) bật ra: PHÁT ra, xuất phát." },
              { character: "表", hanViet: "BIỂU", radical: "衣 (áo)", story: "Áo (衣) mặc bên ngoài: bề ngoài, BIỂU hiện." },
            ],
          },
        ],
      },
    ],
  },
]
