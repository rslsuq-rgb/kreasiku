import React from 'react';

export default function ColorFrame({ title, children, colorClass }: { title: string, children: React.ReactNode, colorClass: string }) {
  return (
    <div className={`p-8 rounded-[3rem] shadow-2xl ${colorClass} text-white transform hover:scale-[1.02] transition-all duration-300`}>
      {/* Judul di atas */}
      <h2 className="text-3xl font-bold text-center mb-6 drop-shadow-md">{title}</h2>
      
      {/* Bagian isi gambar/angka */}
      <div className="bg-white/20 p-10 rounded-[2rem] flex justify-center items-center">
        {children}
      </div>

      {/* Bagian Bawah: QRIS Saweria (Tombol Donasi) */}
      <div className="mt-8 text-center bg-white/30 p-4 rounded-2xl">
        <p className="text-sm font-semibold mb-2">Dukung kami agar tetap berkarya!</p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-bold shadow-lg transition-colors">
          Scan Saweria
        </button>
      </div>
    </div>
  );
}
