# SEO Simulation Game — 學習紀錄版

## 已建立的 Google Sheet
試算表 ID：1imHT9R97Vzrb53PWxdkpOSy3LvPwyslkO8QligHfBe4

## 學生紀錄欄位
每執行一期會記錄：送出時間、姓名、班級/組別、Session ID、練習次數、期數、分數、Organic Clicks、Conversion Rate、Sales、學生診斷、系統判定、重點關鍵字、採用策略、資源成本、決策理由、開始時間、作答秒數、事件類型。

## 啟用 Google 接收端
1. 到 Google Apps Script 建立新專案。
2. 貼上本資料夾的 seo_record_receiver.gs。
3. 部署為「網頁應用程式」。
4. 執行身分選「我」，存取權限選「任何人」。
5. 複製 /exec 結尾的 Web App URL。
6. 將 index.html 中的 PASTE_APPS_SCRIPT_WEB_APP_URL_HERE 換成 Web App URL。
7. 更新 GitHub 上的 index.html。

## 說明
同一學生按「重新開始」或「隨機產生新情境」時，練習次數會 +1。每一期皆送一筆紀錄，方便教師分析學習歷程，而不是只保留最後成績。