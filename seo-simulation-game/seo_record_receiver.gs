const SPREADSHEET_ID='1imHT9R97Vzrb53PWxdkpOSy3LvPwyslkO8QligHfBe4';
const SHEET_NAME='學習紀錄';

function doGet(){
  return ContentService.createTextOutput(JSON.stringify({ok:true,service:'SEO learning record receiver'}))
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e){
  try{
    const data=JSON.parse((e&&e.postData&&e.postData.contents)||'{}');
    const sh=SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    if(!sh) throw new Error('找不到工作表：'+SHEET_NAME);
    sh.appendRow([
      data.submittedAt?new Date(data.submittedAt):new Date(),
      data.studentName||'',
      data.studentGroup||'',
      data.sessionId||'',
      Number(data.practiceNo||0),
      Number(data.period||0),
      Number(data.score||0),
      Number(data.organicClicks||0),
      Number(data.conversionRate||0),
      Number(data.sales||0),
      data.diagnosis||'',
      data.idealDiagnosis||'',
      data.focusKeyword||'',
      data.actions||'',
      Number(data.resourceCost||0),
      data.reason||'',
      data.sessionStartedAt?new Date(data.sessionStartedAt):'',
      Number(data.elapsedSeconds||0),
      data.eventType||'期別紀錄'
    ]);
    return ContentService.createTextOutput(JSON.stringify({ok:true}))
      .setMimeType(ContentService.MimeType.JSON);
  }catch(err){
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}