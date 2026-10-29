# QUALITY.md

Dokumen ini mendefinisikan standar kualitas wajib untuk seluruh konten dan aset di Kreasiku.

## 1. Spesifikasi Aset Master (Halaman Mewarnai)
- **Format:** PNG Lossless (grayscale 8-bit, anti-aliased).
- **Resolusi:**
  - Standard: 300 DPI (A4: 2480x3508 px, Letter: 2550x3300 px)
  - HD: 600 DPI (A4: 4960x7016 px)
- **Garis:** Hitam murni (K=100) di atas latar putih murni (C=0, M=0, Y=0, K=0).
- **Ukuran File:** PNG <= 5 MB, PDF <= 3 MB.

## 2. Gerbang Kualitas (Quality Gates)
- **Gerbang A (Deterministik):** Pemeriksaan otomatis (tinta, dimensi, noise, ketajaman, artefak, kebocoran).
- **Gerbang B (AI Visual QC):** Validasi anatomi dan konten oleh 2 model vision (skor >= 90).
- **Gerbang C (Konsistensi):** Validasi teks dan deskripsi antar bahasa.
- **Gerbang D (PDF):** Validasi teknis format dokumen.
- **Gerbang E (Manusia):** Review manual 100 aset pertama + audit acak 10%.
- **Gerbang F (Audit Aset):** Pemeriksaan terjadwal (pnpm audit:assets).

*(Detail ambang batas dan metrik teknis akan diperbarui setelah validasi awal).*
