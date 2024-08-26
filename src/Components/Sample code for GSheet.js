function doPost(e) {
    var sheet = SpreadsheetApp.openById('YOUR_SPREADSHEET_ID').getSheetByName('Sheet1');
    var data = JSON.parse(e.postData.contents);

    // Log the incoming data for debugging
    Logger.log('Received data: ' + JSON.stringify(data));

    // Assuming 'data' is an object with keys matching your sheet columns
    sheet.appendRow([data.Name, data.Email, data.Phone, data.Message]);

    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success' })).setMimeType(ContentService.MimeType.JSON);
}

/* 
YOUR_SPREADSHEET_ID: Make sure to use the spreadsheet ID only, not the full URL. The ID is the part between /d/ and /edit in the URL.
Permissions: Ensure that the script has the necessary permissions to access and modify the Google Sheet.

If the data is logged correctly but not appearing in the sheet, double-check the sheet name and the structure of the data being sent.
*/