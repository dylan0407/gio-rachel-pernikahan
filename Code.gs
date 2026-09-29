/**
 * GOOGLE APPS SCRIPT — RSVP GIO & RACHEL
 *
 * CARA PAKAI:
 * 1. Buat Google Spreadsheet baru.
 * 2. Buka Extensions > Apps Script.
 * 3. Hapus isi Code.gs lalu paste script ini.
 * 4. Save.
 * 5. Deploy > New deployment > Web app.
 *    Execute as: Me
 *    Who has access: Anyone
 * 6. Copy URL /exec lalu tempel ke CONFIG.GOOGLE_APPS_SCRIPT_URL
 *    di index.html.
 */

const SHEET_NAME = "RSVP";

function doGet() {
  return ContentService
    .createTextOutput("Gio & Rachel RSVP endpoint aktif.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(["Timestamp", "Nama", "Kehadiran", "Ucapan"]);
  }

  const p = e && e.parameter ? e.parameter : {};

  sheet.appendRow([
    new Date(),
    p.name || "",
    p.attendance || "",
    p.message || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ok:true}))
    .setMimeType(ContentService.MimeType.JSON);
}
