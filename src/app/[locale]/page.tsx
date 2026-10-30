import { useTranslations } from 'next-intl';

export default function IndexPage() {
  const t = useTranslations('index');
  
  // Contoh kategori untuk mempercantik tampilan (nanti akan diambil dari database)
  const categories = [
    { name: 'Hewan Nusantara', color: 'bg-green-400' },
    { name: 'Bunga Cantik', color: 'bg-pink-400' },
    { name: 'Kendaraan Seru', color: 'bg-blue-400' },
    { name: 'Angka & Huruf', color: 'bg-yellow-400' },
  ];

  return (
    <div className="min-h-screen bg-yellow-50 text-blue-900 font-sans">
      {/* Hero Section yang Ceria */}
      <header className="bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 py-20 px-6 text-center rounded-b-[3rem] shadow-xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-md">
          {t('title')}
        </h1>
        <p className="text-xl md:text-2xl font-medium text-white drop-shadow-sm max-w-2xl mx-auto">
          {t('description')}
        </p>
        <button className="mt-10 px-10 py-4 bg-white text-orange-600 rounded-full font-bold text-lg hover:scale-105 hover:shadow-lg transition-all duration-300">
          Mulai Mewarnai Sekarang!
        </button>
      </header>

      {/* Grid Kategori */}
      <main className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-800">
          Pilih Kategori Favoritmu
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className={`${cat.color} p-8 rounded-[2rem] shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer flex flex-col justify-between aspect-square`}
            >
              <div className="text-white text-4xl font-bold opacity-80">?</div>
              <h3 className="text-2xl font-bold text-white drop-shadow-md">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Simpel */}
      <footer className="text-center py-10 text-blue-400">
        <p>© 2026 Kreasiku. Semua gambar dibuat dengan bantuan AI.</p>
      </footer>
    </div>
  );
}
