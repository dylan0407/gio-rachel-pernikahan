# Gio & Rachel — Wedding Invitation

One-page wedding invitation website dengan:
- Opening animation G&R
- Hero photo + blur
- Scroll reveal animation
- Section Groom & Bride
- Countdown WIB
- Google Calendar + .ics
- RSVP form
- Google Sheets integration via Google Apps Script
- Moment of Wishes
- Responsive mobile layout

## Struktur
```
Gio_Rachel_Wedding/
├─ index.html
├─ Code.gs
├─ README.md
└─ assets/
   ├─ hero-couple.jpg
   ├─ groom.jpg
   └─ bride-temp.jpg
```

## Sambungkan RSVP ke Google Sheets
1. Buat Google Spreadsheet.
2. Buka `Extensions > Apps Script`.
3. Masukkan isi file `Code.gs`.
4. Klik `Deploy > New deployment`.
5. Type: `Web app`.
6. Execute as: `Me`.
7. Who has access: `Anyone`.
8. Copy URL `/exec`.
9. Buka `index.html`, cari:
   `GOOGLE_APPS_SCRIPT_URL: "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE"`
10. Ganti dengan URL Web App.
11. Upload/deploy ulang web.

Form menggunakan POST biasa (URL-encoded) sehingga tidak membutuhkan backend server sendiri.

## Cara publish supaya bisa dibuka lewat link
### GitHub Pages
1. Buat repository baru, misalnya `gio-rachel-wedding`.
2. Upload semua isi folder ini.
3. Masuk `Settings > Pages`.
4. Source: `Deploy from a branch`.
5. Branch: `main` + `/root`.
6. GitHub akan memberi URL publik.

### Netlify
1. Buka Netlify.
2. Pilih `Add new site > Deploy manually`.
3. Drag folder `Gio_Rachel_Wedding` ke area upload.
4. Netlify akan memberi URL publik.

### Vercel
1. Import repository GitHub yang berisi folder ini.
2. Framework preset: `Other`.
3. Deploy.

## Ganti foto
- Hero: `assets/hero-couple.jpg`
- Groom: `assets/groom.jpg`
- Bride sementara: `assets/bride-temp.jpg`

Saat foto bride asli sudah ada, cukup replace `bride-temp.jpg` dengan foto baru.

## Ubah data acara
Semua data utama ada di `CONFIG.EVENT` di `index.html`:
- tanggal
- jam
- lokasi
- deskripsi

Saat alamat gereja final sudah tersedia, ganti juga teks di section `Sakramen Pernikahan`.

## Catatan
Versi ini sengaja memakai satu file HTML utama agar gampang dipindah-pindah ke hosting static.
