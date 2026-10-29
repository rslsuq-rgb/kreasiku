# Belajar Yuk! — web edukasi anak

Situs statis untuk anak usia ±3–8 tahun: **mewarnai**, **berhitung**, dan **menulis**.
Tanpa build step, tanpa server, tanpa login, tanpa iklan, dan tanpa aset dari internet.

## Menjalankan di laptop

Buka langsung `index.html` sudah bisa. Untuk fitur offline (service worker), pakai server lokal:

```powershell
# dari folder web-anak
python -m http.server 5173
# atau
npx serve .
```

Lalu buka `http://localhost:5173`.

## Isi

| Halaman | Fungsi |
| --- | --- |
| `index.html` | Beranda, daftar kegiatan, janji keamanan, slot donasi |
| `mewarnai.html` | Galeri 100+ gambar + studio (isi warna, kuas, hapus, undo, simpan PNG) |
| `berhitung.html` | 10 soal per sesi: hitung benda, tambah, kurang, bandingkan; 2 level |
| `menulis.html` | Huruf besar, huruf kecil, angka, kata; garis bantu; progres cakupan |
| `untuk-orang-tua.html` | Penjelasan privasi, lisensi, cara pakai, dukungan |

Kode:

```
assets/css/style.css      seluruh tampilan (satu file)
assets/js/app.js          suara, konfeti, bintang, toast, navigasi, service worker
assets/js/gambar.js       data 100+ gambar mewarnai (SVG)
assets/js/mewarnai.js     logika studio mewarnai
assets/js/berhitung.js    logika kuis berhitung
assets/js/menulis.js      logika latihan menulis
sw.js                     cache offline (jaringan dulu, cache cadangan)
manifest.webmanifest      agar bisa "Tambahkan ke layar utama"
```

## Deploy (gratis)

Situs ini murni berkas statis, jadi tidak perlu build command.

**Vercel**

```powershell
cd web-anak
npx vercel --prod
```

Saat ditanya, pilih *framework* "Other", root directory `.`, dan biarkan build command kosong.

**Cloudflare Pages**

```powershell
cd web-anak
npx wrangler pages deploy . --project-name belajar-yuk
```

Atau lewat dashboard: buat project Pages → hubungkan repo → build command kosong → output directory `/`.

**GitHub Pages** juga bisa: unggah isi folder ini ke repo, aktifkan Pages dari branch `main` (root).
Berkas `.nojekyll` sudah disertakan.

## Privasi & data

- Tidak ada formulir, akun, cookie pihak ketiga, atau kode analitik.
- `localStorage` hanya menyimpan `{ stars, done, best }` di perangkat pengunjung. Tidak ada identitas.
- Tidak ada unggahan gambar ke server. Simpan PNG memakai `canvas.toBlob()` di browser.

## Lisensi

- **Gambar mewarnai** (`assets/js/gambar.js`) dibuat khusus untuk proyek ini dan dirilis **CC0** (domain publik).
- **Kode** bebas dipakai dan diubah untuk proyek serupa.
- Tidak ada gambar dari mesin pencari, jadi aman untuk dipublikasikan.

Kalau menambah gambar baru, buat sendiri atau ambil dari sumber berlisensi CC0/public domain dan catat sumbernya.

## Cara mengubah

- **Tambah gambar mewarnai:** tambahkan objek `{ id, nama, kategori, svg }` ke array `GAMBAR` di `assets/js/gambar.js`.
  Setiap bidang yang bisa diwarnai harus memakai `class="region"`; detail yang tidak boleh diwarnai memakai `class="detail"`.
- **Tambah kata latihan menulis:** ubah `SETS.kata.chars` di `assets/js/menulis.js`.
- **Ubah warna tema:** variabel `:root` di `assets/css/style.css`.
- **Pasang tautan donasi:** ganti `href="#"` pada elemen `[data-soon]` di `index.html` / `untuk-orang-tua.html`, lalu hapus atribut `data-soon`.

## Catatan & batasan

- Progres menulis dihitung dari **perkiraan cakupan** huruf contoh, bukan penilaian kerapian.
- Mewarnai dan menulis memerlukan penunjuk (mouse, jari, atau stylus).
- Bintang tersimpan per browser/perangkat; tidak tersinkron antar perangkat.
- Setelah situs diperbarui, service worker memakai strategi *network-first*, jadi versi baru langsung terlihat saat online.
- Ikon manifest masih SVG. Untuk instalasi PWA yang lebih luas (mis. iOS), tambahkan PNG 192/512.

## Rencana berikutnya

1. Deploy ke Vercel / Cloudflare Pages.
2. Pasang tautan donasi (Saweria/Trakteer) dan halaman syarat privasi sederhana.
3. Tambah gambar mewarnai & kata baru.
4. Uji di tablet/HP sungguhan (layar sentuh).
5. (Nanti) fitur AI lewat OmniRoute — butuh server/proxy, jangan taruh kunci API di halaman statis.
