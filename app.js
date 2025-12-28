// ==== 完整北海道雪季行程 (Day 0-14) ====
const itinerary = {
  tripTitle: "HOKKAIDO WINTER ITINERARY ❄",
  tripPeriod: "2026-02-10 ~ 2026-02-23",
  locationsSummary: ["Sapporo", "Jozankei", "Asahikawa", "Sounkyo"],

  days: [
    // Day 0: 行前準備
    {
      dayNumber: 0,
      date: "2026-02-09",
      weekday: "Mon",
      city: "Taiwan New Taipei City",
      summary: "行前準備與北海道當地氣象交通網站",
      themeIcon: "snow_festival",
      sections: [
        {
          timeRange: "1. 接機 2/10 08:30中和環球出發到桃園第一航廈",
          type: "sightseeing",
          title: "確認送機司機電話, 七人座",
          description: "使用APP確認航班是否準時。",
          notes:
            '送機網站：<a href="https://www.drivetraffic.jp/" target="_blank">DriveTraffic.jp</a>'
        },
        {
          timeRange: "2. 2/10 Scoot TR892 12:30 - 17:20 , 2/23 Scoot TR893 18:40  - 22:20",
          type: "sightseeing",
          title: "確認酷航航班時間, 48HR前劃位",
          description: "使用Scoot App確認航班是否準時。",
          notes:
            'Scoot 官網：<a href="https://www.flyscoot.com/zhtw" target="_blank">flyscoot.com</a>'
        },
        {
          timeRange: "3. Anytime",
          type: "sightseeing",
          title: "KLOOK 日本網路租借",
          description: "確認兌換地點與營業時間。",
          notes:
            'KLOOK：<a href="https://www.klook.com/zh-TW/" target="_blank">klook.com</a>'
        },
        {
          timeRange: "4. Anytime",
          type: "meal",
          title: "日本交通路況 DriveTraffic",
          description:
            "使用日本道路交通資訊網站，預先確認隔日可能的壅塞與封閉狀況。",
          notes:
            '日本道路交通資訊：<a href="https://www.drivetraffic.jp/" target="_blank">DriveTraffic.jp</a>'
        },
        {
          timeRange: "5. Anytime",
          type: "meal",
          title: "日本交通路況 Jartic",
          description: "使用日本道路交通資訊網站，預先確認高速公路路況。",
          notes:
            '日本道路交通資訊：<a href="https://www.jartic.or.jp/" target="_blank">Jartic.or.jp</a>'
        },
        {
          timeRange: "6. Anytime",
          type: "weather",
          title: "日本氣象 tenki.jp",
          description: "使用日本氣象資訊網站，預先確認北海道氣象。",
          notes:
            '日本氣象資訊：<a href="https://tenki.jp/forecast/1/" target="_blank">tenki.jp</a>'
        },
        {
          timeRange: "7. Anytime",
          type: "weather",
          title:
            '<a href="https://northern-road.ceri.go.jp/navi/touge/fubuki.htm" target="_blank">北海道吹雪情報</a>',
          description: "北海道吹雪情報，有顏色分級。",
          notes:
            '<a href="https://northern-road.ceri.go.jp/navi/touge/fubuki.htm" target="_blank">北海道吹雪情報</a>'
        },
        {
          timeRange: "8. 出發前",
          type: "airport",
          title:
            '<a href="https://www.hokkaido-airports.com/ja/new-chitose/airport/fis/?airlineType=international" target="_blank">新千歲空港情報</a>',
          description: "新千歲空港國際線起降查詢。",
          notes:
            '<a href="https://www.hokkaido-airports.com/ja/new-chitose/airport/fis/?airlineType=international" target="_blank">新千歲空港情報</a>'
        }
      ],
      highlights: [
        "確認交通與航班資訊",
        "掌握北海道天氣與吹雪情報",
        "新千歲機場班機動態掌握"
      ]
    },

    // Day 1: 抵達札幌
    {
      dayNumber: 1,
      date: "2026-02-10",
      weekday: "Tue",
      city: "Sapporo",
      summary: "抵達新千歲・札幌夜景",
      themeIcon: "city_snow",
      sections: [
        {
          timeRange: "12:30 - 17:20",
          type: "transport",
          title: "搭乘酷航TR892 桃園-新千歲機場",
          description:
            "酷航抵達後搭乘電車前往狸小路民宿，辦理入住與短暫休息。",
          notes: "若遇積雪或延誤，晚餐時間可彈性調整。"
        },
        {
          timeRange: "18:20 - 19:00",
          type: "meal",
          title:
            "搭乘電車前往札幌車站, 再轉電車到狸小路, 走路400M到民宿momo premium 802",
          description:
            "民宿地址 : 北海道, 札幌, 1000番30 feel210 802, 日本。",
          notes: ""
        },
        {
          timeRange: "19:30 - 21:00",
          type: "sightseeing",
          title: "大通公園夜景散步",
          description:
            "依天氣狀況前往大通公園與電視塔周邊，感受雪景與城市燈光。",
          notes: "若天候不佳，可改為地下街與商場輕鬆散步。"
        }
      ],
      highlights: [
        "熟悉札幌市區動線",
        "調整時差與適應低溫",
        "輕鬆開始行程"
      ]
    },

    // Day 2: さっぽろ雪まつり全日程
    {
      dayNumber: 2,
      date: "2026-02-11",
      weekday: "Wed",
      city: "Sapporo 中央区",
      summary: "さっぽろ雪まつり全日程・時計台・赤れんが・夜燈光秀",
      themeIcon: "snow_festival",
      sections: [
        {
          timeRange: "08:00 - 09:30",
          type: "sightseeing",
          title:
            '<a href="https://www.snowfes.com/" target="_blank">さっぽろ雪まつり 大通会場</a> <span style="font-size:12px;color:#4fc3f7">⛄️</span>',
          description:
            '大通公園雪祭主會場，參觀大雪像、市民雪像、國際雪像コンクール。<a href="https://www.snowfes.com/sites/odori/" target="_blank">[大通詳細]</a>',
          notes: "下載「さっぽろグルメクーポン」App 投票市民雪像人気投票"
        },
        {
          timeRange: "09:30 - 11:30",
          type: "sightseeing",
          title:
            '<a href="https://japan.mania.cx/road100/003sapporooodori.html" target="_blank">札幌大通 (日本の道100選)</a> → <a href="https://sapporoshi-tokeidai.jp/" target="_blank">時計台</a> ⛪️',
          description:
            '大通公園4丁目散策 → 旧札幌農学校演武場 時計台（<a href="https://kunishitei.bunka.go.jp/heritage/detail/102/3" target="_blank">國指定重要文化財</a>）。',
          notes: "開館08:45～17:10"
        },
        {
          timeRange: "11:30 - 12:30",
          type: "meal",
          title:
            '<a href="https://tabelog.com/hokkaido/A0101/A010102/1073682/" target="_blank">浜っ子 時計台店</a> 🦀🐏',
          description:
            '<a href="https://hamakko.owst.jp/" target="_blank">海鮮・ジンギスカン</a>，時計台旁經典居酒屋。<a href="https://www.youtube.com/watch?v=OLRiGYFVCvs&t=1028s" target="_blank">[影片]</a>',
          notes: "營業至22:30"
        },
        {
          timeRange: "13:00 - 14:00",
          type: "meal",
          title:
            '<a href="https://tabelog.com/hokkaido/A0101/A010101/1000327/" target="_blank">雪印パーラー 札幌本店</a> 🍧☕️',
          description: "北海道限定Gelato冰淇淋與咖啡，雪祭後甜點休息。",
          notes: "10:00～19:00"
        },
        {
          timeRange: "14:30 - 16:00",
          type: "meal",
          title:
            '<a href="https://tabelog.com/hokkaido/A0101/A010101/1064959/" target="_blank">回転寿司 根室花まる miredo店</a> 🍣',
          description: "大同生命札幌ビル內迴轉壽司，新鮮北海道海鮮🍣。",
          notes: "11:00～22:00"
        },
        {
          timeRange: "16:30 - 18:00",
          type: "sightseeing",
          title:
            '<a href="https://www.hokkaido-redbrick.jp/" target="_blank">赤れんが庁舎</a> 🏫 → <a href="https://tabelog.com/hokkaido/A0101/A010101/1081978/" target="_blank">HOUSE.H</a> 🍷',
          description:
            '國指定重要文化財（<a href="https://kunishitei.bunka.go.jp/heritage/detail/102/4" target="_blank">文化財詳細</a>）→ Bistro・Wine Bar晚餐。',
          notes: "庁舎開館08:45～21:00"
        },
        {
          timeRange: "18:30 - 20:00",
          type: "sightseeing",
          title:
            '<a href="https://www.sapporo.travel/white-illumination/event/illumination/ekihiro/" target="_blank">Sapporo White Illumination</a> 🎇 → <a href="https://www.daimaru.co.jp/sapporo/" target="_blank">大丸札幌店</a> → <a href="https://www.pokemon.co.jp/" target="_blank">Pokémon Center</a>',
          description:
            "札幌駅南口白色燈光秀 → 大丸百貨Pokémon Center購物。",
          notes: "燈光秀16:30～24:00，Pokémon Center 10:00～20:00"
        },
        {
          timeRange: "20:00 - 21:00",
          type: "sightseeing",
          title:
            '<a href="https://www.jr-tower.com/t38" target="_blank">JRタワー展望室 T38</a> → <a href="https://www.snowfes.com/sites/susukino/" target="_blank">雪まつりすすきの会場</a>',
          description: "JR Tower 展望台夜景 → すすきの冰雪祭會場。",
          notes: "T38 10:00～22:00，すすきの10:00～22:00"
        },
        {
          timeRange: "21:00 - 22:00",
          type: "meal",
          title:
            '<a href="https://www.gindaco.com/" target="_blank">築地銀だこ 札幌すすきの店</a>',
          description: "深夜たこ焼き，雪祭夜間小食。",
          notes: "營業至凌晨02:00"
        },
        {
          timeRange: "22:00 - 23:00",
          type: "meal",
          title:
            '<a href="https://tabelog.com/hokkaido/A0101/A010103/1001912/" target="_blank">炉ばた焼 ウタリ</a>',
          description:
            '<a href="https://hiyori.cc/article/utali" target="_blank">爐端燒・海鮮</a>，すすきの最終大餐。<a href="https://www.youtube.com/watch?v=l8Kof9SJqKY" target="_blank">[影片]</a>',
          notes:
            '住宿：<a href="https://www.toyoko-inn.com/search/detail/00100/" target="_blank">東横INN札幌すすきの交差点 官方網站</a>'
        }
      ],
      highlights: [
        "さっぽろ雪まつり 大通・すすきの両會場制覇",
        "時計台・赤れんが庁舎 國寶級建築巡禮",
        "White Illumination 冬季燈光秀",
        "Pokémon Center・ドンキホーテ 購物",
        "住宿：東横INN札幌すすきの交差点"
      ]
    },

    // Day 3: 札幌小樽一日遊
    {
      dayNumber: 3,
      date: "2026-02-12",
      weekday: "Thu",
      city: "Sapporo・Otaru",
      summary: "小樽運河・玻璃工房・LeTAO甜點",
      themeIcon: "canal_snow",
      sections: [
        {
          timeRange: "08:30 - 09:30",
          type: "transport",
          title: "從札幌出發前往小樽",
          description: "JR快速列車約30-40分鐘抵達小樽站。",
          notes: "建議購買JR北海道周遊券"
        },
        {
          timeRange: "10:00 - 12:00",
          type: "sightseeing",
          title: "小樽運河 & 北一硝子散策",
          description: "冬季運河雪景拍照，參觀玻璃工藝店與音樂盒博物館。",
          notes: "運河邊咖啡廳適合休息"
        },
        {
          timeRange: "12:00 - 13:30",
          type: "meal",
          title: "小樽壽司午餐",
          description: "新鮮壽司套餐，體驗北海道海鮮文化。",
          notes: ""
        },
        {
          timeRange: "14:00 - 16:00",
          type: "sightseeing",
          title: "堺町通 & LeTAO甜點",
          description: "老街購物，LeTAO乳酪蛋糕必買伴手禮。",
          notes: "排隊時間約30-60分鐘"
        },
        {
          timeRange: "16:30 - 17:30",
          type: "transport",
          title: "返回札幌",
          description: "傍晚JR返回札幌，準備晚餐。",
          notes: ""
        }
      ],
      highlights: [
        "小樽運河冬季浪漫雪景",
        "玻璃工藝與音樂盒體驗",
        "LeTAO北海道限定甜點",
        "老街購物伴手禮"
      ]
    },

    // Day 4: 札幌自由日・白色戀人公園
    {
      dayNumber: 4,
      date: "2026-02-13",
      weekday: "Fri",
      city: "Sapporo",
      summary: "白色戀人公園・狸小路購物",
      themeIcon: "chocolate",
      sections: [
        {
          timeRange: "09:00 - 12:00",
          type: "sightseeing",
          title: "白色戀人公園",
          description: "參觀巧克力工廠，冬季限定雪景甜點。",
          notes: "市電約30分鐘可達"
        },
        {
          timeRange: "13:00 - 17:00",
          type: "shopping",
          title: "狸小路商店街・札幌站購物",
          description: "保暖用品、北海道限定伴手禮。",
          notes: "注意店舖營業時間"
        },
        {
          timeRange: "18:00 - 20:00",
          type: "meal",
          title: "札幌啤酒園・成吉思汗",
          description: "經典北海道烤羊肉體驗。",
          notes: ""
        }
      ],
      highlights: [
        "白色戀人巧克力工廠",
        "狸小路冬季購物",
        "札幌啤酒園烤肉",
        "伴手禮採購完成"
      ]
    },

    // Day 5: 定山溪溫泉
    {
      dayNumber: 5,
      date: "2026-02-14",
      weekday: "Sat",
      city: "Jozankei",
      summary: "定山溪萬世閣・雪見溫泉",
      themeIcon: "onsen",
      sections: [
        {
          timeRange: "09:00 - 11:00",
          type: "transport",
          title: "札幌 → 定山溪萬世閣飯店",
          description: "巴士約1小時抵達定山溪溫泉區。",
          notes: "提前預約接駁車"
        },
        {
          timeRange: "12:00 - 21:00",
          type: "relax",
          title: "萬世閣露天溫泉・雪見風呂",
          description: "大正時代老爺飯店，冬季限定雪景露天溫泉。",
          notes: "情人節限定晚餐套餐"
        },
        {
          timeRange: "19:00 - 21:00",
          type: "meal",
          title: "萬世閣懷石料理",
          description: "北海道當季食材懷石料理。",
          notes: "住宿：萬世閣飯店"
        }
      ],
      highlights: [
        "大正時代老爺溫泉飯店",
        "雪見露天溫泉體驗",
        "情人節懷石料理",
        "完全放鬆療癒日"
      ]
    },

    // Day 6-10 簡化版
    {
      dayNumber: 6,
      date: "2026-02-15",
      weekday: "Sun",
      city: "Asahikawa",
      summary: "移動旭川・拉麵小路",
      themeIcon: "ramen",
      sections: [
        {
          timeRange: "09:00-12:00",
          type: "transport",
          title: "札幌→旭川",
          description: "JR特急約1.5小時",
          notes: ""
        },
        {
          timeRange: "13:00-15:00",
          type: "meal",
          title: "旭川拉麵小路",
          description: "品嚐旭川醬油拉麵",
          notes: ""
        },
        {
          timeRange: "16:00-18:00",
          type: "sightseeing",
          title: "旭川市區散策",
          description: "雪景街道拍照",
          notes: "住宿：旭川市區"
        }
      ],
      highlights: ["旭川拉麵", "市區適應"]
    },
    {
      dayNumber: 7,
      date: "2026-02-16",
      weekday: "Mon",
      city: "Asahikawa→Sounkyo",
      summary: "旭山動物園・層雲峽夜宿",
      themeIcon: "zoo",
      sections: [
        {
          timeRange: "09:00-13:00",
          type: "sightseeing",
          title: "旭山動物園",
          description: "企鵝散步・北極熊",
          notes: ""
        },
        {
          timeRange: "14:00-17:00",
          type: "transport",
          title: "旭川→層雲峽",
          description: "巴士約2小時",
          notes: ""
        },
        {
          timeRange: "18:00-20:00",
          type: "meal",
          title: "層雲峽溫泉晚餐",
          description: "住宿：層雲峽溫泉",
          notes: ""
        }
      ],
      highlights: ["世界第一動物園", "層雲峽峽谷"]
    },
    {
      dayNumber: 8,
      date: "2026-02-17",
      weekday: "Tue",
      city: "Sounkyo→Asahikawa",
      summary: "冰瀑祭・返回旭川",
      themeIcon: "ice_waterfall",
      sections: [
        {
          timeRange: "09:00-15:00",
          type: "sightseeing",
          title: "層雲峽冰瀑祭",
          description: "光雕冰柱・峽谷步道",
          notes: ""
        },
        {
          timeRange: "16:00-18:00",
          type: "transport",
          title: "返回旭川",
          description: "巴士約2小時",
          notes: ""
        }
      ],
      highlights: ["冰瀑祭光雕", "峽谷健行"]
    },
    {
      dayNumber: 9,
      date: "2026-02-18",
      weekday: "Wed",
      city: "Asahikawa",
      summary: "雪上活動・自由行",
      themeIcon: "snow_play",
      sections: [
        {
          timeRange: "09:00-16:00",
          type: "sightseeing",
          title: "旭川雪地活動",
          description: "雪橇・雪地摩托車",
          notes: ""
        },
        {
          timeRange: "17:00-20:00",
          type: "meal",
          title: "旭川燒烤晚餐",
          description: "當地燒肉體驗",
          notes: ""
        }
      ],
      highlights: ["冬季雪上樂趣", "燒肉大餐"]
    },
    {
      dayNumber: 10,
      date: "2026-02-19",
      weekday: "Thu",
      city: "Asahikawa→Sapporo",
      summary: "返回札幌・狸小路",
      themeIcon: "shopping",
      sections: [
        {
          timeRange: "09:00-11:00",
          type: "transport",
          title: "旭川→札幌",
          description: "JR特急約1.5小時",
          notes: ""
        },
        {
          timeRange: "12:00-18:00",
          type: "shopping",
          title: "狸小路最終購物",
          description: "北海道限定商品",
          notes: ""
        }
      ],
      highlights: ["最終購物", "札幌回歸"]
    },

    // Day 11: 札幌諏訪神社・羊ヶ丘・啤酒園
    {
      dayNumber: 11,
      date: "2026-02-20",
      weekday: "Fri",
      city: "Sapporo 東区・豊平区・中央区",
      summary: "札幌諏訪神社・羊ヶ丘展望台・サッポロガーデンパーク",
      themeIcon: "shrine_snow",
      sections: [
        {
          timeRange: "09:00 - 10:30",
          type: "sightseeing",
          title: "札幌諏訪神社 參拜・御朱印",
          description:
            '前往 <a href="https://www.sapporo-suwajinja.com/" target="_blank">札幌諏訪神社</a> 參拜，領取月替わり御朱印，感受花手水與境內氛圍。',
          notes:
            '御朱印資訊：<a href="https://hotokami.jp/area/hokkaido/Htktk/Htktmtm/Drkrr/120686/" target="_blank">ホトカミ・札幌諏訪神社御朱印</a>'
        },
        {
          timeRange: "11:00 - 15:00",
          type: "sightseeing",
          title: "さっぽろ羊ヶ丘展望台・雪まつり資料館・スノーパーク",
          description:
            '移動至 <a href="https://www.hitsujigaoka.jp/" target="_blank">さっぽろ羊ヶ丘展望台</a>，拍照經典 <a href="https://www.hitsujigaoka.jp/clark/" target="_blank">クラーク博士像</a> 與 <a href="https://www.hitsujigaoka.jp/facility/clark_memorial_hall/?lang=ja#googtrans(ja|ja)" target="_blank">記念館</a>，參觀 <a href="https://www.snowfes.com/sapporo-snow-festival-museum/" target="_blank">さっぽろ雪まつり資料館</a>、<a href="https://www.hitsujigaoka.jp/facility/austrian_style_house/?lang=ja#googtrans(ja|ja)" target="_blank">オーストリア館</a>，並在 <a href="https://www.hitsujigaoka.jp/snowpark/" target="_blank">羊ヶ丘スノーパーク2026</a> 體驗雪上活動。',
          notes:
            "羊ヶ丘展望台 09:00～17:00、スノーパーク 10:00～15:00（依當年實際公告為準）"
        },
        {
          timeRange: "15:00 - 16:00",
          type: "meal",
          title: "CiiNA CiiNA (シーナシーナ) 福住",
          description:
            '在 <a href="https://ciina-ciina.com/fukuzumi/" target="_blank">CiiNA CiiNA 福住</a> 享用甜點或輕食，作為下午茶休息時間。',
          notes: "營業時間 10:00～20:00"
        },
        {
          timeRange: "16:30 - 20:30",
          type: "sightseeing",
          title: "サッポロガーデンパーク・啤酒博物館・成吉思汗晚餐",
          description:
            '前往札幌東區 <b>サッポロガーデンパーク</b>：參觀 <a href="https://www.sapporobeer.jp/brewery/s_museum/" target="_blank">サッポロビール博物館</a>，了解札幌啤酒歷史，晚餐於 <a href="https://sapporo-bier-garten.jp/" target="_blank">サッポロビール園</a> 享用成吉思汗烤羊肉與啤酒。可選擇 <a href="https://tabelog.com/hokkaido/A0101/A010202/1000159/" target="_blank">開拓使館</a> 或 <a href="https://tabelog.com/hokkaido/A0101/A010202/1038859/" target="_blank">ポプラ館</a> 等會場。',
          notes:
            '啤酒博物館 11:00～18:00，ビール園一般 17:00～21:00；介紹影片：<a href="https://www.youtube.com/watch?v=2sWJ-uX8q1g&list=PLTK9EV1d7ikBTATicZhja2qguFcuZLTze&index=1" target="_blank">YouTube</a>'
        },
        {
          timeRange: "20:30 - 21:30",
          type: "shopping",
          title: "アリオ札幌 (Ario Sapporo) 晚間購物",
          description:
            '餐後步行或搭車前往 <a href="https://sapporo.ario.jp/" target="_blank">アリオ札幌</a>，進行最後一輪購物與超市採買。',
          notes: "營業時間 10:00～21:00，請留意各櫃位打烊時間"
        },
        {
          timeRange: "21:30 - 22:30",
          type: "transport",
          title: "返回住宿：ALPHABED INN 札幌大通公園",
          description:
            '從アリオ或札幌東區返回中央區住宿 <a href="https://alphabed.airhost.co/ja/houses/206930" target="_blank">ALPHABED INN 札幌大通公園</a>，整理行李、休息。',
          notes: "確認翌日移動時間與天氣、交通資訊。"
        }
      ],
      highlights: [
        '札幌東區 <a href="https://www.sapporo-suwajinja.com/" target="_blank">札幌諏訪神社</a> 參拜與月替御朱印',
        '<a href="https://www.hitsujigaoka.jp/" target="_blank">羊ヶ丘展望台</a> & さっぽろ雪まつり資料館・雪上活動',
        '<a href="https://www.sapporobeer.jp/brewery/s_museum/" target="_blank">サッポロビール博物館</a> 與成吉思汗烤羊肉晚餐',
        '<a href="https://sapporo.ario.jp/" target="_blank">アリオ札幌</a> 晚間購物',
        '<a href="https://alphabed.airhost.co/ja/houses/206930" target="_blank">ALPHABED INN 札幌大通公園</a> 入住'
      ]
    },

    // Day 12
    {
      dayNumber: 12,
      date: "2026-02-21",
      weekday: "Sat",
      city: "Sapporo",
      summary: "自由購物・美食日",
      themeIcon: "food",
      sections: [
        {
          timeRange: "10:00-18:00",
          type: "shopping",
          title: "札幌站・大丸自由購物",
          description: "最後衝刺伴手禮",
          notes: ""
        },
        {
          timeRange: "19:00-21:00",
          type: "meal",
          title: "海鮮丼最終晚餐",
          description: "新千歲機場附近海鮮",
          notes: ""
        }
      ],
      highlights: ["北海道海鮮丼", "伴手禮打包"]
    },

    // Day 13
    {
      dayNumber: 13,
      date: "2026-02-22",
      weekday: "Sun",
      city: "Sapporo",
      summary: "預備返程・最後衝刺",
      themeIcon: "prepare",
      sections: [
        {
          timeRange: "09:00-15:00",
          type: "shopping",
          title: "新千歲機場購物",
          description: "機場限定伴手禮",
          notes: ""
        },
        {
          timeRange: "16:00-18:00",
          type: "transport",
          title: "飯店→機場",
          description: "準備酷航返台",
          notes: ""
        }
      ],
      highlights: ["機場購物", "行程圓滿"]
    },

    // Day 14
    {
      dayNumber: 14,
      date: "2026-02-23",
      weekday: "Mon",
      city: "Sapporo→Taiwan",
      summary: "酷航返台・行程結束",
      themeIcon: "airplane",
      sections: [
        {
          timeRange: "全日",
          type: "transport",
          title: "Scoot TR893 新千歲→桃園",
          description: "2026北海道雪季之旅完美結束！",
          notes: "Safe travels! 安全到家！"
        }
      ],
      highlights: ["完美結束北海道之旅", "滿載回憶返台"]
    }
  ]
};



// ==== 花費記帳資料 + localStorage + 編輯/刪除 ====
// 每筆格式：{ id, date, category, amount, item, time, currency }
let expenses = [];
let nextExpenseId = 1; // 用來產生唯一 id

// 先從 localStorage 讀取舊紀錄，沒有就用空陣列
try {
  const saved = localStorage.getItem("hokkaido_expenses");
  if (saved) {
    expenses = JSON.parse(saved);
  }
} catch (e) {
  expenses = [];
}

const expenseCategories = ["食", "衣", "住", "行", "育", "樂"];

// 根據已存在資料決定下一個 id
if (expenses.length > 0) {
  nextExpenseId = Math.max(...expenses.map(e => e.id || 0)) + 1;
}

// 寫回 localStorage
function saveExpenses() {
  try {
    localStorage.setItem("hokkaido_expenses", JSON.stringify(expenses));
  } catch (e) {
    console.warn("無法寫入 localStorage", e);
  }
}

// 🚀 新增：完整行程匯出功能
function exportItinerary() {
  const exportData = {
    itinerary: itinerary,
    expenses: expenses,
    exportDate: new Date().toISOString(),
    exportVersion: "1.0"
  };

  const jsonStr = JSON.stringify(exportData, null, 2);
  const blob = new Blob([jsonStr], { type: "application/json;charset=utf-8" });
  const filename = `Hokkaido_Itinerary_${itinerary.tripPeriod.replace(/[~]/g, '_')}.json`;
  
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  console.log(`✅ 匯出完成：${filename}`);
}

// 🚀 新增：完整行程匯入功能
function importItinerary() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json,application/json";
  
  input.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target.result);
        
        // 檢查檔案格式
        if (!data.itinerary || !data.expenses) {
          alert("❌ 檔案格式錯誤！請使用「匯出行程」導出的 JSON 檔案");
          return;
        }

        // 匯入行程
        itinerary.tripTitle = data.itinerary.tripTitle;
        itinerary.tripPeriod = data.itinerary.tripPeriod;
        itinerary.locationsSummary = data.itinerary.locationsSummary;
        itinerary.days = data.itinerary.days;

        // 匯入花費
        expenses = data.expenses;
        nextExpenseId = expenses.length ? Math.max(...expenses.map(e => e.id || 0)) + 1 : 1;

        // 儲存花費到 localStorage
        saveExpenses();
        
        // 重新渲染
        renderDayList();
        renderDayDetail();
        
        alert(`✅ 匯入成功！\n行程：${itinerary.days.length} 天\n花費：${expenses.length} 筆`);
        
      } catch (err) {
        console.error(err);
        alert("❌ 匯入失敗：檔案格式錯誤或損壞");
      }
    };
    
    reader.readAsText(file, "utf-8");
  });
  
  input.click();
}


/// 匯出 CSV 檔（Excel 可直接開）
// 欄位順序：id,date,time,category,amount,currency,item
function exportExpenses() {
  if (!expenses.length) {
    alert("目前沒有任何記帳資料可匯出");
    return;
  }

  const headers = ["id", "date", "time", "category", "amount", "currency", "item"];
  const rows = [headers.join(",")];

  expenses.forEach((e) => {
    const rawItem = e.item || "";
    const safeItem = rawItem.replace(/"/g, '""'); // 內部雙引號轉為 ""

    const row = [
      e.id,
      e.date || "",
      e.time || "",
      e.category || "",
      e.amount ?? "",
      e.currency || "JPY",
      safeItem
    ];

    rows.push(
      row
        .map((v, idx) => {
          const s = String(v);
          // item 欄位一定加雙引號，其它欄位若有逗號或換行也包起來
          if (idx === 6 || s.includes(",") || s.includes("\n")) {
            return `"${s}"`;
          }
          return s;
        })
        .join(",")
    );
  });

  const csv = rows.join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "hokkaido_expenses.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


// 匯入 CSV 檔（欄位：id,date,time,category,amount,currency,item）
function importExpenses() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".csv,text/csv,.txt,text/plain";

  input.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target.result;
        if (typeof text !== "string") {
          alert("匯入失敗：檔案內容不是文字");
          return;
        }

        const lines = text
          .split(/\r?\n/)
          .map((l) => l.trim())
          .filter((l) => l.length > 0);

        if (lines.length <= 1) {
          alert("匯入失敗：檔案內容太少，沒有資料列");
          return;
        }

        // 解析標題列
        const header = lines[0].split(",");
        const idxId = header.indexOf("id");
        const idxDate = header.indexOf("date");
        const idxTime = header.indexOf("time");
        const idxCat = header.indexOf("category");
        const idxAmt = header.indexOf("amount");
        const idxCur = header.indexOf("currency");
        const idxItem = header.indexOf("item");

        if (idxDate === -1 || idxCat === -1 || idxAmt === -1 || idxItem === -1) {
          alert("匯入失敗：標題列缺少必要欄位（date / category / amount / item）");
          return;
        }

        const newExpenses = [];

        for (let i = 1; i < lines.length; i++) {
          const line = lines[i];
          if (!line) continue;

          // 簡單 CSV split：以逗號切，如果之後 item 真的含很多逗號再升級 parser
          const cols = line.split(",");

          const date = cols[idxDate]?.trim();
          const category = cols[idxCat]?.trim();
          const amountStr = cols[idxAmt]?.trim();
          const rawItem = cols[idxItem] ?? "";
          const time = idxTime !== -1 ? (cols[idxTime] || "").trim() : "";
          const currency = idxCur !== -1 ? (cols[idxCur] || "JPY").trim() : "JPY";

          const amount = Number(amountStr);
          const item = rawItem
            .replace(/^"(.*)"$/, "$1") // 去掉前後雙引號
            .replace(/""/g, '"')       // 還原內部 "
            .trim();

          if (!date || !category || isNaN(amount) || !item) {
            // 格式不完整就跳過
            continue;
          }

          let id;
          if (idxId !== -1) {
            const idStr = cols[idxId]?.trim();
            id = Number(idStr);
          }
          if (!id || isNaN(id)) {
            id = nextExpenseId++;
          } else {
            // 確保 nextExpenseId 不會重複
            nextExpenseId = Math.max(nextExpenseId, id + 1);
          }

          newExpenses.push({
            id,
            date,
            category,
            amount,
            item,
            time,
            currency
          });
        }

        if (!newExpenses.length) {
          alert("匯入失敗：沒有有效的資料列");
          return;
        }

        expenses = newExpenses;
        saveExpenses();
        renderDayDetail();
        alert("匯入完成");
      } catch (err) {
        console.error(err);
        alert("匯入失敗：解析錯誤");
      }
    };

    reader.readAsText(file, "utf-8");
  });

  input.click();
}


// 產生「全行程總表」用的 HTML，依 date + time 排序
function renderGlobalExpenseTable() {
  if (!expenses.length) {
    return `<tr><td colspan="5">尚未有任何記帳資料</td></tr>`;
  }

  const sorted = [...expenses].sort((a, b) => {
    if (a.date === b.date) {
      return (a.time || "").localeCompare(b.time || "");
    }
    return a.date.localeCompare(b.date);
  });

  return sorted
    .map(
      (e) => `
      <tr>
        <td>${e.date}</td>
        <td>${e.time || ""}</td>
        <td>${e.category}</td>
        <td>${e.amount} ${e.currency || "JPY"}</td>
        <td>${e.item}</td>
      </tr>
    `
    )
    .join("");
}

// ==== DOM 渲染邏輯 ====
const dayListEl = document.getElementById("day-list");
const dayDetailEl = document.getElementById("day-detail");
const exportBtn = document.getElementById("export-btn"); 
let selectedDayIndex = 0;

function renderDayList() {
  dayListEl.innerHTML = "";
  itinerary.days.forEach((day, index) => {
    const card = document.createElement("div");
    card.className = "day-card";
    if (index === selectedDayIndex) card.classList.add("selected");

    card.innerHTML = `
      <div class="day-card-topline">
        <span class="day-card-date">Day ${day.dayNumber}・${day.weekday}</span>
        <span>${day.date.slice(5)}</span>
      </div>
      <div class="day-card-city">${day.city}</div>
      <div class="day-card-summary">${day.summary}</div>
    `;

    card.addEventListener("click", () => {
      selectedDayIndex = index;
      renderDayList();
      renderDayDetail();
    });

    dayListEl.appendChild(card);
  });
}
// 🚀 新增：匯出按鈕事件監聽  
if (exportBtn) {
  exportBtn.addEventListener("click", (e) => {
    e.preventDefault();
    exportItinerary();
  });
}
// 🚀 新增：匯入按鈕事件監聽
const importBtn = document.getElementById("import-btn");
if (importBtn) {
  importBtn.addEventListener("click", (e) => {
    e.preventDefault();
    importItinerary();
  });
}


function renderDayDetail() {
  const day = itinerary.days[selectedDayIndex];
  if (!day) return;

  const sectionsHtml = day.sections
    .map(
      (s) => `
      <div class="section-card">
        <div class="section-topline">
          <span class="section-time">${s.timeRange}</span>
          <span class="section-type ${s.type}">${s.type}</span>
        </div>
        <div class="section-title">${s.title}</div>
        <div class="section-description">${s.description}</div>
        ${
          s.notes
            ? `<div class="section-notes">備註：${s.notes}</div>`
            : ""
        }
      </div>
    `
    )
    .join("");

  const highlightsHtml = day.highlights
    .map((h) => `<li>${h}</li>`)
    .join("");

  // 當日與全部花費計算（這裡暫時仍以金額直接相加，未做匯率換算）
  const todayExpenses = expenses.filter((e) => e.date === day.date);
  const todayTotal = todayExpenses.reduce((sum, e) => sum + e.amount, 0);
  const allTotal = expenses.reduce((sum, e) => sum + e.amount, 0);

  const expenseRowsHtml = todayExpenses
    .map(
      (e) => `
      <tr data-id="${e.id}">
        <td>${e.time || ""}</td>
        <td>${e.category}</td>
        <td>${e.amount}</td>
        <td>${e.currency || "JPY"}</td>
        <td>${e.item}</td>
        <td>
          <button type="button" class="btn-edit-expense">編輯</button>
          <button type="button" class="btn-delete-expense">刪除</button>
        </td>
      </tr>
    `
    )
    .join("");

  const globalRowsHtml = renderGlobalExpenseTable();

  dayDetailEl.innerHTML = `
    <div class="day-detail-header">
      <div class="day-detail-title">Day ${day.dayNumber} – ${day.city}</div>
      <div class="day-detail-meta">${day.date}（${day.weekday}）｜${day.summary}</div>
    </div>

    <div class="section-list">
      ${sectionsHtml}
    </div>

    <div class="highlights">
      <div class="highlights-title">當日重點</div>
      <ul>
        ${highlightsHtml}
      </ul>
    </div>

    <!-- 💰 每日花費記帳 -->
    <div class="expense-panel">
      <h3 class="expense-title">💰 每日花費記帳</h3>

  <div class="expense-tools">
  <button type="button" id="btn-export-expenses">匯出花費 CSV</button>
  <button type="button" id="btn-import-expenses">匯入花費 CSV</button>
</div>

      <form id="expense-form" class="expense-form">
        <div class="expense-form-row">
          <label>日期：</label>
          <input type="date" id="expense-date" value="${day.date}" />
        </div>
        <div class="expense-form-row">
          <label>分類：</label>
          <select id="expense-category">
            ${expenseCategories
              .map((c) => `<option value="${c}">${c}</option>`)
              .join("")}
          </select>
        </div>
        <div class="expense-form-row">
          <label>金額：</label>
          <input type="number" id="expense-amount" min="0" step="1" placeholder="例如 1200" />
        </div>
        <div class="expense-form-row">
          <label>項目說明：</label>
          <input type="text" id="expense-item" placeholder="例如：午餐拉麵、地鐵、伴手禮" />
        </div>
        <div class="expense-form-row">
          <label>幣別：</label>
          <select id="expense-currency">
            <option value="JPY" selected>日幣 (JPY)</option>
            <option value="TWD">台幣 (TWD)</option>
            <option value="USD">美金 (USD)</option>
          </select>
        </div>
        <div class="expense-form-row">
          <label>時間（選填）：</label>
          <input type="text" id="expense-time" placeholder="例如：12:30" />
        </div>

        <button type="submit" class="expense-add-btn">新增 / 更新花費</button>
      </form>

      <div class="expense-summary">
        <div>今日 (${day.date}) 小計（僅金額相加）：<span id="expense-today-total">${todayTotal}</span></div>
        <div>全行程累計（僅金額相加）：<span id="expense-all-total">${allTotal}</span></div>
      </div>

      <div class="expense-list-wrapper">
        <h4>📒 當日花費明細</h4>
        <table class="expense-table">
          <thead>
            <tr>
              <th>時間</th>
              <th>分類</th>
              <th>金額</th>
              <th>幣別</th>
              <th>項目</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody id="expense-table-body">
            ${expenseRowsHtml || `<tr><td colspan="6">尚未新增今日花費</td></tr>`}
          </tbody>
        </table>
      </div>

      <div class="expense-list-wrapper">
        <h4>📊 全行程花費總表（依日期排序）</h4>
        <table class="expense-table">
          <thead>
            <tr>
              <th>日期</th>
              <th>時間</th>
              <th>分類</th>
              <th>金額＋幣別</th>
              <th>項目</th>
            </tr>
          </thead>
          <tbody id="expense-global-table-body">
            ${globalRowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;

  const expenseForm = document.getElementById("expense-form");

  // 表單送出：新增或更新
  expenseForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    const dateInput = document.getElementById("expense-date");
    const categoryInput = document.getElementById("expense-category");
    const amountInput = document.getElementById("expense-amount");
    const itemInput = document.getElementById("expense-item");
    const currencyInput = document.getElementById("expense-currency");
    const timeInput = document.getElementById("expense-time");

    const date = dateInput.value;
    const category = categoryInput.value;
    const amount = Number(amountInput.value || 0);
    const item = itemInput.value.trim();
    const currency = (currencyInput.value || "JPY").trim();
    const time = timeInput.value.trim();

    if (!date || !category || !amount || !item) {
      alert("請輸入完整的日期 / 分類 / 金額 / 項目說明");
      return;
    }

    const editIdAttr = expenseForm.getAttribute("data-edit-id");
    if (editIdAttr) {
      const editId = Number(editIdAttr);
      const exp = expenses.find((e) => e.id === editId);
      if (exp) {
        exp.date = date;
        exp.category = category;
        exp.amount = amount;
        exp.item = item;
        exp.time = time;
        exp.currency = currency;
      }
      expenseForm.removeAttribute("data-edit-id");
    } else {
      expenses.push({
        id: nextExpenseId++,
        date,
        category,
        amount,
        item,
        time,
        currency
      });
    }

    saveExpenses();
    renderDayDetail();
  });

  // 刪除 / 編輯按鈕（事件委派）
  const expenseTableBody = document.getElementById("expense-table-body");
  if (expenseTableBody) {
    expenseTableBody.addEventListener("click", (evt) => {
      const target = evt.target;
      if (!(target instanceof HTMLElement)) return;

      const row = target.closest("tr");
      if (!row) return;
      const id = Number(row.getAttribute("data-id"));
      if (!id) return;

      // 刪除
      if (target.classList.contains("btn-delete-expense")) {
        if (!confirm("確定要刪除這筆花費嗎？")) return;
        const index = expenses.findIndex((e) => e.id === id);
        if (index !== -1) {
          expenses.splice(index, 1);
          saveExpenses();
          renderDayDetail();
        }
      }

      // 編輯：把資料帶回表單
      if (target.classList.contains("btn-edit-expense")) {
        const expense = expenses.find((e) => e.id === id);
        if (!expense) return;

        const dateInput = document.getElementById("expense-date");
        const categoryInput = document.getElementById("expense-category");
        const amountInput = document.getElementById("expense-amount");
        const itemInput = document.getElementById("expense-item");
        const currencyInput = document.getElementById("expense-currency");
        const timeInput = document.getElementById("expense-time");

        if (!dateInput || !categoryInput || !amountInput || !itemInput || !currencyInput || !timeInput) return;

        dateInput.value = expense.date;
        categoryInput.value = expense.category;
        amountInput.value = expense.amount;
        itemInput.value = expense.item;
        currencyInput.value = expense.currency || "JPY";
        timeInput.value = expense.time || "";

        expenseForm.setAttribute("data-edit-id", String(id));
      }
    });
  }

  // 匯出 / 匯入按鈕
  const btnExport = document.getElementById("btn-export-expenses");
  const btnImport = document.getElementById("btn-import-expenses");
  if (btnExport) btnExport.addEventListener("click", exportExpenses);
  if (btnImport) btnImport.addEventListener("click", importExpenses);
}

// 匯出按鈕事件 
// 初始渲染
renderDayList();
renderDayDetail();
