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



  ]
};


// ==== 🚀 新增：時間格式轉換函數 ====
function formatTimeDisplay(rawTime) {
  // 4位數字 2100 → 21:00，舊格式 "08:00" 保持不變
  if (rawTime && /^\d{4}$/.test(rawTime)) {  // 正確 4 位數字
    const hour = rawTime.slice(0,2).padStart(2,'0');
    const min = rawTime.slice(2,4).padStart(2,'0');
    if (Number(hour) <= 23 && Number(min) <= 59) {
      return `${hour}:${min}`;
    }
  }
  return rawTime || '';  // 舊資料或無效格式直接顯示
}

function parseTimeInput(displayTime) {
  // 顯示 "21:00" → 存 "2100"，4位數字保持不變
  if (displayTime && /^\d{4}$/.test(displayTime)) {
    return displayTime;
  }
  const match = displayTime.match(/^(\d{1,2}):(\d{2})$/);
  if (match) {
    const hour = match[1].padStart(2,'0');
    const min = match[2];
    if (Number(hour) <= 23 && Number(min) <= 59) {
      return hour + min;
    }
  }
  return displayTime;  // 舊資料如 "Anytime" 保持原樣
}

// 🚀 依時間排序一天行程（Anytime放最後）
function getSortKeyFromTimeRange(timeRange) {
  if (!timeRange) return null;
  const match = String(timeRange).match(/^(\d{4})/);
  return match ? match[1] : null;
}

function compareTimeString(t1, t2) {
  return Number(t1) - Number(t2);
}

function sortSectionsByTimeForDay(day) {
  if (!day?.sections) return;
  day.sections.sort((a, b) => {
    const keyA = getSortKeyFromTimeRange(a.timeRange);
    const keyB = getSortKeyFromTimeRange(b.timeRange);
    if (keyA === null && keyB === null) return 0;
    if (keyA === null) return 1;
    if (keyB === null) return -1;
    return compareTimeString(keyA, keyB);
  });
}



// ==== 🚀 全域欄位設定（繁中顯示） ====
const ITINERARY_FIELDS = {
  // value 給程式/CSV用，label 顯示繁中
  types: [
   { value: "meal",      label: "餐飲" },
  { value: "shopping",  label: "購物" },
  { value: "hotel",     label: "住宿" },
  { value: "transport", label: "交通" },
  { value: "sightseeing", label: "景點" },
  { value: "free",      label: "其他" }
  ],
  currencies: ["JPY", "TWD", "USD"],
  itineraryCsvHeaders: [
    "dayNumber","date","timeRange","type","title","amount",
    "currency","linkUrl","notes","description"
  ],
  expensesCsvHeaders: [
    "id","date","timeRange","type","amount","currency","item","linkUrl","notes"
  ]
};



// 🚀 英文 type → 繁中 label
function displayTypeLabel(type) {
  const found = ITINERARY_FIELDS.types.find(t => t.value === type);
  return found ? found.label : (type || "未分類");
}


// ==== 🚀 HTML ↔ 純文字轉換工具（A. 新增） ====

// 純文字 + 連結 → HTML title（自動包 <a> 標籤）
function buildHtmlTitle(plainTitle, linkUrl) {
  if (!plainTitle) return "";
  if (!linkUrl || linkUrl.trim() === "") return plainTitle;
  return `<a href="${linkUrl.trim()}" target="_blank">${plainTitle}</a>`;
}

// 純文字 → HTML notes（加圖示前綴）
function buildHtmlNotes(plainNotes) {
  if (!plainNotes || plainNotes.trim() === "") return "";
  return plainNotes.trim();
}

// HTML → 純文字（反推，去掉所有標籤）
function extractPlainText(htmlContent) {
  if (!htmlContent) return "";
  const tmp = document.createElement("div");
  tmp.innerHTML = htmlContent;
  return (tmp.textContent || tmp.innerText || "").trim();
}

// 從 HTML 中提取第一個連結 URL
function extractFirstUrl(htmlContent) {
  if (!htmlContent) return "";
  const match = htmlContent.match(/href="([^"]+)"/);
  return match ? match[1] : "";
}


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

const expenseCategories = ["餐飲", "購物", "住宿", "交通", "景點", "其他"];


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
    exportVersion: "2.0"
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

// 🚀 完整行程匯入功能（永久儲存版）
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

        // ✅ 修正：只要有 itinerary 或 expenses 就接受
        if (!data) {
          alert("❌ 檔案格式錯誤！請使用「匯出行程」導出的 JSON 檔案");
          return;
        }

        let hasChanges = false;

        // 🚀 1. 覆蓋行程資料
        if (data.itinerary) {
          itinerary.tripTitle = data.itinerary.tripTitle || itinerary.tripTitle;
          itinerary.tripPeriod = data.itinerary.tripPeriod || itinerary.tripPeriod;
          itinerary.locationsSummary = data.itinerary.locationsSummary || itinerary.locationsSummary;
          itinerary.days = data.itinerary.days || itinerary.days;
          hasChanges = true;
        }

        // 🚀 2. 覆蓋花費資料
        if (Array.isArray(data.expenses)) {
          expenses = data.expenses;
          nextExpenseId = expenses.length ? Math.max(...expenses.map(e => e.id || 0)) + 1 : 1;
          hasChanges = true;
        }

        // 🚀 3. 永久儲存到 localStorage
        if (hasChanges) {
          try {
            localStorage.setItem("hokkaido_itinerary_v1", JSON.stringify(itinerary));
            localStorage.setItem("hokkaido_expenses", JSON.stringify(expenses));
          } catch (err) {
            console.warn("寫入 localStorage 失敗，但匯入已完成", err);
          }

          // 重新渲染
          renderDayList();
          renderDayDetail();

          alert(`✅ 匯入成功！已永久儲存\n` +
                `行程：${itinerary.days.length} 天\n` +
                `花費：${expenses.length} 筆`);
        } else {
          alert("❌ 檔案無有效資料（缺少 itinerary 或 expenses）");
        }

      } catch (err) {
        console.error("JSON 解析錯誤：", err);
        alert("❌ 匯入失敗：JSON 格式損壞\n\n請確認檔案是完整的「匯出行程」JSON");
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

// 🚀 新增：匯出按鈕事件監聯  
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

// 🚀 新增：重置為預設行程（帶確認對話框）
function resetToDefault() {
  if (confirm("⚠️ 確定要重置為原始預設行程嗎？\n\n這會清除所有匯入的客製化行程與花費記錄！\n\n原始 Day 0-14 行程會重新載入。")) {

    // 1. 清空 localStorage
    localStorage.removeItem("hokkaido_itinerary_v1");
    localStorage.removeItem("hokkaido_expenses");

    // 2. 重新載入頁面（回到原始 app.js 裡的預設行程）
    location.reload();

    console.log("✅ 已重置為預設行程");
  }
}

// 🚀 重置按鈕事件監聽
const resetBtn = document.getElementById("reset-btn");
if (resetBtn) {
  resetBtn.addEventListener("click", (e) => {
    e.preventDefault();
    resetToDefault();
  });
}


function renderDayDetail() {
  const day = itinerary.days[selectedDayIndex];
  if (!day) return;

  // 🚀 自動依時間排序（Anytime最後）
  sortSectionsByTimeForDay(day);

  // 🚀 修改：sectionsHtml 加入編輯/刪除按鈕 + data-section-index
  const sectionsHtml = day.sections
    .map((s, idx) => {
      // 向下相容：從舊資料的 title/notes 反推純文字和連結
      const plainTitle = s.plainTitle || extractPlainText(s.title);
      const linkUrl = s.linkUrl || extractFirstUrl(s.title) || extractFirstUrl(s.notes);
      const plainNotes = s.plainNotes || extractPlainText(s.notes);

      // 顯示用的 HTML（保持原本格式）
      const displayTitle = s.title || buildHtmlTitle(plainTitle, linkUrl);
      const displayNotes = s.notes || buildHtmlNotes(plainNotes);

      return `
        <div class="section-card" data-section-index="${idx}">
          <div class="section-topline">
            <span class="section-time">${formatTimeDisplay(s.timeRange) || "未設定"}</span>
            <span class="section-type ${s.type || "sightseeing"}">
  ${displayTypeLabel(s.type)}
</span>

          </div>
          <div class="section-title">${displayTitle}</div>
          <div class="section-description">${s.description || ""}</div>
          ${displayNotes ? `<div class="section-notes">備註：${displayNotes}</div>` : ""}
          <div class="section-actions">
            <button type="button" class="btn-edit-section" title="編輯此行程">✏️ 編輯</button>
            <button type="button" class="btn-delete-section" title="刪除此行程">🗑️ 刪除</button>
          </div>
        </div>
      `;
    })
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

 // 🚀 產生繁中下拉選單
const typeOptionsHtml = ITINERARY_FIELDS.types
  .map(t => `<option value="${t.value}">${t.label}</option>`)
  .join("");


  dayDetailEl.innerHTML = `
    <div class="day-detail-header">
      <div class="day-detail-title">Day ${day.dayNumber} – ${day.city}</div>
      <div class="day-detail-meta">${day.date}（${day.weekday}）｜${day.summary}</div>
    </div>

    <!-- 🚀 新增：行程編輯表單 -->
    <div class="section-editor-panel">
      <h3 class="panel-title">✏️ 當日行程編輯 <span class="current-day-info">Day ${day.dayNumber} | ${day.date}</span></h3>
      <form id="section-form" class="section-form">
        <div class="section-form-row">
          <label for="section-date">日期：</label>
          <input type="date" id="section-date" value="${day.date}" required />
        </div>
       <div class="section-form-row">
  <label for="section-timeRange">時間：</label>
  <input type="text" id="section-timeRange" 
         placeholder="2100" 
         maxlength="4" 
         inputmode="numeric"
          required />
  <small class="time-hint">輸入 2100 → 顯示 21:00</small>
</div>

        <div class="section-form-row">
          <label for="section-type">行程類型：</label>
          <select id="section-type">
            ${typeOptionsHtml}
          </select>
        </div>
        <div class="section-form-row full-width">
          <label for="section-title">行程內容：</label>
          <input type="text" id="section-title" placeholder="例如：大通公園雪祭主會場" maxlength="100" required />
        </div>
        <div class="section-form-row">
          <label for="section-link">網頁連結：</label>
          <input type="url" id="section-link" placeholder="https://www.snowfes.com/" />
        </div>
        <div class="section-form-row full-width">
          <label for="section-notes">備註：</label>
          <input type="text" id="section-notes" placeholder="例如：下雨改地下街，注意營業時間" maxlength="200" />
        </div>
        <div class="section-form-actions">
          <button type="submit" class="section-save-btn">✅ 新增 / 更新行程</button>
          <button type="button" id="section-cancel-edit" class="section-cancel-btn">❌ 取消編輯</button>
        </div>
      </form>
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

  // ==== 🚀 行程編輯表單事件處理（A. 新增） ====
  const sectionForm = document.getElementById("section-form");
  const sectionDateInput = document.getElementById("section-date");
  const sectionTimeInput = document.getElementById("section-timeRange");
  const sectionTypeInput = document.getElementById("section-type");
  const sectionTitleInput = document.getElementById("section-title");
  const sectionLinkInput = document.getElementById("section-link");
  const sectionNotesInput = document.getElementById("section-notes");
  const sectionCancelBtn = document.getElementById("section-cancel-edit");

  // 表單送出：新增或更新 section
  sectionForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const rawTimeInput = sectionTimeInput.value.trim();
    const timeRange = parseTimeInput(rawTimeInput);
    const type = sectionTypeInput.value;
    const plainTitle = sectionTitleInput.value.trim();
   
 // 🚀 修正：宣告 rawLink 變數
  const rawLink = sectionLinkInput.value.trim();
  const linkUrl = rawLink ? 
    (rawLink.match(/^https?:\/\//) ? rawLink : 'https://' + rawLink) : '';
    
const plainNotes = sectionNotesInput.value.trim();

  if (!rawTimeInput || !plainTitle || !/^\d{4}$/.test(rawTimeInput)) {
    alert("❌ 時間格式錯誤！請輸入 4 位數字，如：2100");
  return;
}


    // 用工具函數產生 HTML 版本
    const titleHtml = buildHtmlTitle(plainTitle, linkUrl);
    const notesHtml = buildHtmlNotes(plainNotes);

    const newSection = {
      timeRange,
      type,
      plainTitle,           // 純文字（用於匯出）
      title: titleHtml,     // HTML 版（用於顯示）
      amount: 0,
      currency: "JPY",
      linkUrl: linkUrl || "",
      plainNotes,           // 純文字（用於匯出）
      notes: notesHtml,     // HTML 版（用於顯示）
      description: plainTitle
    };

    const editIndexAttr = sectionForm.getAttribute("data-edit-index");
    if (editIndexAttr !== null && editIndexAttr !== "") {
      // 更新既有行程
      const idx = Number(editIndexAttr);
      if (day.sections[idx]) {
        Object.assign(day.sections[idx], newSection);
      }
      sectionForm.removeAttribute("data-edit-index");
    } else {
      // 新增行程（插到當天最後）
      day.sections.push(newSection);
    }

    // 清空表單
    sectionTimeInput.value = "";
    sectionTypeInput.value = "sightseeing";
    sectionTitleInput.value = "";
    sectionLinkInput.value = "";
    sectionNotesInput.value = "";

    renderDayDetail();
  });

  // 取消編輯按鈕
  sectionCancelBtn.addEventListener("click", () => {
    sectionForm.removeAttribute("data-edit-index");
    sectionTimeInput.value = "";
    sectionTypeInput.value = "sightseeing";
    sectionTitleInput.value = "";
    sectionLinkInput.value = "";
    sectionNotesInput.value = "";
  });

  // ==== 行程卡片上的編輯/刪除按鈕（事件委派） ====
  const sectionListEl = dayDetailEl.querySelector(".section-list");
  if (sectionListEl) {
    sectionListEl.addEventListener("click", (evt) => {
      const target = evt.target;
      if (!(target instanceof HTMLElement)) return;

      const cardEl = target.closest(".section-card");
      if (!cardEl) return;
      const idx = Number(cardEl.getAttribute("data-section-index"));
      if (Number.isNaN(idx)) return;

      // 刪除行程
      if (target.classList.contains("btn-delete-section")) {
        if (!confirm("確定要刪除這個行程嗎？")) return;
        day.sections.splice(idx, 1);
        renderDayDetail();
      }

      // 編輯行程：把資料帶回表單
      if (target.classList.contains("btn-edit-section")) {
        const s = day.sections[idx];
        if (!s) return;

        // 反推純文字（向下相容舊資料）
        const plainTitle = s.plainTitle || extractPlainText(s.title);
        const linkUrl = s.linkUrl || extractFirstUrl(s.title) || "";
        const plainNotes = s.plainNotes || extractPlainText(s.notes);

        sectionDateInput.value = day.date;
        sectionTimeInput.value = s.timeRange || "";
        sectionTypeInput.value = s.type || "sightseeing";
        sectionTitleInput.value = plainTitle;
        sectionLinkInput.value = linkUrl;
        sectionNotesInput.value = plainNotes;

        sectionForm.setAttribute("data-edit-index", String(idx));

        // 滾動到表單位置
        sectionForm.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // ==== 花費記帳表單（原有邏輯保持不變） ====
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
}


// 初始渲染
renderDayList();
renderDayDetail();

// 🚀 toolbox 花費按鈕事件（全域）
document.addEventListener('DOMContentLoaded', () => {
  const expensesExportBtn = document.getElementById('expenses-export-btn');
  const expensesImportBtn = document.getElementById('expenses-import-btn');

  if (expensesExportBtn) expensesExportBtn.addEventListener('click', exportExpenses);
  if (expensesImportBtn) expensesImportBtn.addEventListener('click', importExpenses);
});
