# Handoff — Proyek OmniRoute + Web Edukasi Anak

> Dibuat: 29 Oktober 2026. Baca file ini dulu di sesi baru.

## 1. OmniRoute (sudah jalan)

- Lokasi paket: `C:\Users\hemas\AppData\Roaming\npm\node_modules\omniroute`
- Dashboard: `http://127.0.0.1:20128` (login pakai password di file `.env` — **jangan ditulis di sini**)
- Login API: `POST /api/auth/login` body `{"password":"<lihat .env>"}` → cookie `auth_token`
- Endpoint penting:
  - `GET/PUT /api/combos/{id}` — combo (PUT = partial merge, array `models` menimpa)
  - `GET/POST/PATCH /api/providers` — koneksi provider
  - `POST /api/providers/free-onboarding` — body `{providerIds:[...], confirmed:true}`
  - `GET /api/free-models` — katalog 467 model gratis
  - `GET /api/free-tier/summary` — total ±1.62B token/bulan
  - `POST /v1/chat/completions` — pakai model `free-stack-2026`
  - `PATCH /api/settings` — setelan (mis. `freeAccessPolicy`)
- **STRICT mode aktif**: `freeAccessPolicy = "strict"` (auto-routing hanya model $0)

## 2. Provider tersambung (10)

kiro (oauth), nvidia, groq, pollinations, gemini, qoder, duckduckgo-web,
cloudflare-playground, uncloseai (NONAKTIF — beta tutup), aihorde (NONAKTIF — 406)

## 3. Combo `free-stack-2026` (18 anggota, semua 200 OK, urut terbaik→terakhir)

1. qoder/deepseek-v4-pro
2. if/deepseek-v4-pro
3. qoder/kimi-k3
4. if/kimi-k3
5. gemini/gemini-3.8-flash
6. if/kimi-k2.7-code
7. groq/openai/gpt-oss-120b
8. gemini/gemini-3.1-flash-lite
9. qoder/qwen3.8-max-preview
10. cloudflare-playground/zai-org/glm-5.2
11. qoder/glm-5.2
12. nvidia/nvidia/nemotron-3-ultra-550b-a55b
13. qoder/deepseek-v4-flash
14. groq/openai/gpt-oss-20b
15. nvidia/nvidia/nemotron-3.5-lightning-30b-a3b
16. groq/qwen/qwen3.8-27b
17. qoder/minimax-m3
18. gemini/gemini-3-flash-preview

Dikeluarkan: kr/* (kuota kiro 429), pol (key invalid), qwc, cf, scw, cerebras (butuh signup), aihorde, uncloseai, duckduckgo-web (ToS avoid — masih aktif manual).

## 4. Belum selesai / butuh aksi user

- Signup Fase 2: Mistral (~1B/bln), Nara (210M), LLM7 (token di token.llm7.io), Pollinations key baru (enter.pollinations.ai/keys), OpenRouter topup $10, Cloudflare AI resmi, Cerebras, Scaleway, Qwen-Cloud, Stepfun
- Fase 3: Vertex ~300M, AgentRouter ~200M, dll.

## 5. Rencana Web Edukasi Anak

- Isi: gambar mewarnai, belajar berhitung, belajar menulis (sumber gambar dari internet — **wajib cek lisensi**)
- Hosting rencana: Vercel/Cloudflare Pages (gratis, tanpa kartu)
- Storage gambar: repo GitHub (kecil) / Hugging Face (besar)
- Server: belum diputuskan. Opsi: Azure for Students ($100, tanpa kartu) / Oracle (kartu verifikasi saja) / kombinasi Vercel+HF
- Monetisasi (gratis untuk pengunjung): donasi (Saweria/Trakteer) → affiliate (Shopee/Tokopedia) → AdSense setelah ramai → sponsor → produk digital → lisensi sekolah
- Aturan: tanpa login/data pribadi anak, iklan ramah anak, gambar berlisensi

## 6. Langkah berikutnya (sesi baru)

1. ~~Bikin MVP web anak (HTML/CSS/JS sederhana) di laptop — tanpa server~~ ✅ selesai, lihat bagian 8
2. Deploy ke Vercel/Cloudflare Pages (belum — butuh akun/CLI)
3. Tambah slot donasi + affiliate (slot donasi placeholder sudah ada, tautan asli belum)
4. (Nanti) fitur AI lewat OmniRoute (butuh proxy/server, jangan taruh kunci di halaman statis)

## 7. Catatan teknis

- Windows PowerShell 5.1 (tanpa operator `??`)
- Node.js v22.23.4
- Playwright chromium v1234 sudah terpasang untuk cloudflare-playground
- Jangan tampilkan nilai kredensial penuh di output

## 8. Status Web Anak — 29 Oktober 2026

Lokasi: `C:\Users\hemas\Documents\Default Project\web-anak` (statis, tanpa build).

Halaman: `index.html`, `mewarnai.html`, `berhitung.html`, `menulis.html`, `untuk-orang-tua.html`.

Fitur yang sudah jalan (diuji di browser lokal port 5173):
- **Mewarnai**: 9 SVG buatan sendiri (CC0), isi warna per bidang, kuas bebas, hapus per bidang, undo, reset, simpan PNG (1000×1000, termasuk coretan kuas), bintang +1 saat pertama kali simpan per gambar.
- **Berhitung**: 4 mode (hitung benda/tambah/kurang/bandingkan), 2 level, 10 soal per sesi, skor + bintang 0–3, konfeti, feedback dan hint saat salah.
- **Menulis**: A–Z, a–z, 0–9, 10 kata; 4 garis bantu; progres cakupan (~70% = bintang +1); contoh bisa disembunyikan; simpan PNG.
- **Umum**: tanpa login/iklan/pelacak, bintang di `localStorage`, suara WebAudio (bisa dimatikan), PWA manifest + service worker (network-first), responsif, skip-link, kontras sudah diperbaiki (Lighthouse: aksesibilitas 100, best practices 100, SEO 100 di beranda).
- Gambar/emoji sistem dipakai untuk ilustrasi; tidak ada request ke domain luar.

Yang belum:
- Tautan donasi asli (Saweria/Trakteer) — ganti `href="#"` + hapus `data-soon` di `index.html` dan `untuk-orang-tua.html`.
- Affiliate (Shopee/Tokopedia) — rencananya hanya di halaman dewasa, bukan halaman anak.
- Ikon PNG 192/512 untuk PWA.
- Deploy + domain.
- Uji di HP/tablet fisik (sentuhan).
- Analitik ramah privasi (opsional, tanpa cookie).
