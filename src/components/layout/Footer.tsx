import React from 'react';
import * as Icons from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 relative z-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <img src="/images/logo.svg" alt="Chip.Com" width={48} height={48} decoding="async" className="h-12 w-auto object-contain shrink-0 max-w-[4rem]" />
            <span className="text-3xl font-black tracking-tighter">Chip.Com</span>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-sm mb-8">
            Membangun ekosistem teknologi yang inklusif dan progresif bagi mahasiswa STMIK Indonesia Banjarmasin.
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/chipcomstmik_id/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-colors" aria-label="Instagram UKM Chip.Com">
              <Icons.Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-8 text-blue-500 uppercase tracking-widest">Akses Cepat</h3>
          <ul className="space-y-4">
            <li><a href="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><Icons.ChevronRight className="h-4 w-4 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Beranda</a></li>
            <li><a href="/sejarah" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><Icons.ChevronRight className="h-4 w-4 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Sejarah</a></li>
            <li><a href="/visimisi" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><Icons.ChevronRight className="h-4 w-4 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Visi & Misi</a></li>
            <li><a href="/struktur" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><Icons.ChevronRight className="h-4 w-4 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Struktur</a></li>
            <li><a href="/gallery" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><Icons.ChevronRight className="h-4 w-4 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Dokumentasi</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-8 text-blue-500 uppercase tracking-widest">Kolaborasi</h3>
          <ul className="space-y-4">

            <li><a href="https://chat.whatsapp.com/FLdEDPVpLDs4c82XFgCCad" target="_blank" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 group"><Icons.ChevronRight className="h-4 w-4 text-blue-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" /> Gabung Member</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-8 text-blue-500 uppercase tracking-widest">Lokasi</h3>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <Icons.MapPin className="h-6 w-6 text-blue-500 shrink-0 mt-1" />
              <p className="text-slate-400 leading-relaxed">
                Jl. Pangeran Hidayatullah, Sungai Jingah, Banjarmasin Utara, Kota Banjarmasin, Kalsel 70122
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Icons.Phone className="h-6 w-6 text-blue-500 shrink-0" />
              <p className="text-slate-400 leading-relaxed">+62 822-5185-5328</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-black/50 py-8 px-6 text-center border-t border-white/5">
        <p className="text-slate-400 text-sm font-medium">
          &copy; {currentYear} <span className="text-blue-500 font-bold">UKM Chip.Com</span>. All rights reserved. <span className="text-blue-500 font-bold">Damsi</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
