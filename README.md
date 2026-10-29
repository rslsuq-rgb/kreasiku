# Kreasiku.id

Perpustakaan halaman mewarnai gratis (PDF & PNG siap cetak) untuk anak PAUD/SD. SELURUH konten dibuat oleh AI dengan sistem Zero-Defect Publishing.

## Tech Stack
- **Framework:** Next.js 15 (App Router, TypeScript Strict)
- **Database:** PostgreSQL (Supabase)
- **Styling:** Tailwind CSS
- **AI Pipeline:** Python (OpenCV, Pillow, scikit-image, Tesseract)
- **Quality Assurance:** Playwright (E2E), axe-core (Accessibility)

## Cara Setup
1. **Clone & Install:** `pnpm install`
2. **Environment:** Salin `.env.example` ke `.env` dan isi dengan kredensial Supabase Anda.
3. **Database:** Jalankan migrasi di Supabase: `psql -f migrations/001_initial_schema.sql`
4. **Development:** `pnpm dev`

## Menjalankan Pipeline AI
Untuk menghasilkan konten baru secara otomatis:
```bash
# Contoh: Generate 20 halaman kategori Hewan Nusantara
pnpm pipeline:run --category=hewan-nusantara --count=20 --locale=id,en
```

## Deployment
Proyek ini dioptimalkan untuk Vercel. Pastikan environment variables berikut diset di Vercel Dashboard:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## Quality Standard
Lihat `QUALITY.md` untuk rincian Gerbang Kualitas (A-F) yang wajib dipenuhi oleh semua aset sebelum masuk ke antrian produksi.
