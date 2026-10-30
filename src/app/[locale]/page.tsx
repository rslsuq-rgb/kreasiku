import { useTranslations } from 'next-intl';
import ColorFrame from '../../components/ColorFrame';

export default function IndexPage() {
  const t = useTranslations('index');
  
  const categories = [
    { name: 'Hewan Nusantara', color: 'bg-green-400' },
    { name: 'Bunga Cantik', color: 'bg-pink-400' },
    { name: 'Kendaraan Seru', color: 'bg-blue-400' },
    { name: 'Angka & Huruf', color: 'bg-yellow-400' },
  ];

  return (
    <div className="min-h-screen bg-yellow-50 text-blue-900 font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-yellow-300 via-orange-300 to-pink-300 py-20 px-6 text-center rounded-b-[3rem] shadow-xl">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-white drop-shadow-md">
          {t('title')}
        </h1>
      </header>

      {/* Preview Bingkai Baru */}
      <main className="max-w-4xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Preview Bingkai Baru:</h2>
        <ColorFrame title="Ayo Berhitung!" colorClass="bg-gradient-to-br from-yellow-400 to-orange-500">
          <span className="text-[8rem] font-black text-white">5</span>
        </ColorFrame>
      </main>

      {/* Grid Kategori */}
      <section className="max-w-6xl mx-auto py-16 px-6">
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
      </section>

      <footer className="text-center py-10 text-blue-400">
        <p>© 2026 Kreasiku. Semua gambar dibuat dengan bantuan AI.</p>
      </footer>
    </div>
  );
}
