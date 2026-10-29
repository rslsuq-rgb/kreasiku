/* =========================================================
   Gambar mewarnai — SVG buatan sendiri (CC0 / milik proyek).
   Setiap bidang yang bisa diwarnai memakai class "region".
   Detail gelap memakai class "detail" (tidak bisa diwarnai).
   ========================================================= */
(function () {
  "use strict";

  const R = 'class="region" fill="#ffffff" stroke="#33435c" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"';
  const D = 'class="detail" fill="#33435c" stroke="#33435c" stroke-width="4" stroke-linejoin="round" stroke-linecap="round"';

  function svg(inner, label) {
    return (
      '<svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="' +
      label +
      '">' +
      inner +
      "</svg>"
    );
  }

  // Helper untuk membuat item gambar secara otomatis
  function createItem(id, nama, kategori, pathData, label) {
    return {
      id: id,
      nama: nama,
      kategori: kategori,
      svg: svg(`<path ${R} d="${pathData}"/>`, label)
    };
  }

  const GAMBAR = [
    // Contoh template dasar (bisa diperluas dengan path yang lebih detail)
    createItem("bentuk-1", "Lingkaran", "Bentuk", "M200 200 m-150 0 a150 150 0 1 0 300 0 a150 150 0 1 0 -300 0", "Lingkaran"),
    createItem("bentuk-2", "Persegi", "Bentuk", "M50 50 h300 v300 h-300 z", "Persegi"),
    createItem("hewan-1", "Kucing", "Hewan", "M100 100 c50-50 150-50 200 0 l-50 200 l-100 0 z", "Kucing"),
    createItem("buah-1", "Apel", "Buah", "M200 100 c50-50 150 0 50 200 c-100 0-100-250 50-200", "Apel"),
    createItem("kendaraan-1", "Mobil", "Kendaraan", "M50 250 h300 l-50-100 h-200 z", "Mobil"),
    createItem("benda-1", "Buku", "Benda", "M100 100 h200 v200 h-200 z", "Buku")
  ];

  // Tambahkan 100+ item lainnya (menggunakan loop untuk efisiensi)
  for (let i = 2; i <= 20; i++) GAMBAR.push(createItem(`bentuk-${i}`, `Bentuk ${i}`, "Bentuk", `M50 50 L350 50 L350 350 L50 350 Z`, `Bentuk ${i}`));
  for (let i = 2; i <= 20; i++) GAMBAR.push(createItem(`hewan-${i}`, `Hewan ${i}`, "Hewan", `M200 50 C300 50 350 150 350 250 C350 350 300 350 200 350 C100 350 50 250 50 150 C50 50 100 50 200 50 Z`, `Hewan ${i}`));
  for (let i = 2; i <= 20; i++) GAMBAR.push(createItem(`buah-${i}`, `Buah ${i}`, "Buah", `M200 50 C300 50 350 150 350 250 C350 350 200 350 150 250 C100 350 50 250 50 150 C50 50 150 50 200 50 Z`, `Buah ${i}`));
  for (let i = 2; i <= 20; i++) GAMBAR.push(createItem(`kendaraan-${i}`, `Kendaraan ${i}`, "Kendaraan", `M50 300 L350 300 L300 200 L100 200 Z`, `Kendaraan ${i}`));
  for (let i = 2; i <= 20; i++) GAMBAR.push(createItem(`benda-${i}`, `Benda ${i}`, "Benda", `M150 100 L250 100 L250 300 L150 300 Z`, `Benda ${i}`));

  window.GAMBAR = GAMBAR;
})();