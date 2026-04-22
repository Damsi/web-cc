import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronRight, Users, User, ArrowUpRight, Sparkles, MonitorSmartphone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-28 pb-20 lg:pt-32 overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3" />
        <div className="absolute inset-0 max-w-[100vw] overflow-hidden" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.05) 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Left Column: Typography & Primary CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-bold mb-8 shadow-sm"
          >
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span>Open Recruitment 2026 Segera Hadir!</span>
          </motion.div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black leading-[1.05] mb-6 tracking-tighter text-slate-900">
            Kembangkan <br />
            Potensi <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Digitalmu!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-xl leading-relaxed font-medium">
            UKM Chip.Com adalah ekosistem kolaboratif untuk mengasah skill <span className="text-slate-900 font-bold">Teknologi Informasi</span> dan karakter kepemimpinan.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Button size="lg" className="rounded-full shadow-xl shadow-blue-600/20 bg-blue-600 hover:bg-blue-700 h-14 px-8 text-lg" asChild>
              <a href="https://chat.whatsapp.com/FLdEDPVpLDs4c82XFgCCad" target="_blank" rel="noopener noreferrer">
                Gabung Sekarang <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full h-14 px-8 text-lg border-2" asChild>
              <a href="/sejarah">
                Jelajahi Sejarah Kita
              </a>
            </Button>
          </div>
          
          {/* Quick Stats / Trust Indicators */}
          <div className="mt-12 flex items-center gap-8 pt-8 border-t border-slate-200">
            <div>
              <p className="text-3xl font-black text-slate-900">10+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Anggota Aktif</p>
            </div>
            <div className="w-px h-12 bg-slate-200"></div>
            <div>
              <p className="text-3xl font-black text-slate-900">10+</p>
              <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">Program Kerja</p>
            </div>
            {/* <div className="w-px h-12 bg-slate-200 hidden sm:block"></div> */}
            {/* <div className="hidden sm:block">
              <div className="flex -space-x-4 mb-1">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <User className="h-5 w-5 text-slate-400" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-bold text-slate-500">Solid & Beragam</p>
            </div> */}
          </div>
        </motion.div>
        
        {/* Right Column: Bento Grid Style Interactive Visuals */}
        <motion.div
          className="lg:col-span-5 grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Large Main Feature Card */}
          <div className="col-span-2 group relative overflow-hidden rounded-3xl aspect-[4/3] shadow-2xl">
            <img src="/images/pelatihan.webp" alt="Kegiatan Chip.Com" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3 uppercase tracking-widest">Unggulan</span>
              <h3 className="text-2xl font-bold text-white mb-2 leading-tight">Pelatihan Dasar IT & Leadership</h3>
              <a href="/gallery" className="inline-flex items-center text-blue-300 font-semibold hover:text-white transition-colors group/cta">
                Lihat Galeri <ArrowUpRight className="ml-1 h-4 w-4 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Small Bento 1 */}
          {/* <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between aspect-square group hover:bg-white hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
              <MonitorSmartphone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-1">Web Dev</h4>
              <p className="text-xs text-slate-500">Eksplorasi pembuatan aplikasi modern.</p>
            </div>
          </div> */}

          {/* Small Bento 2 */}
          <div className="bg-indigo-600 rounded-3xl p-6 flex flex-col justify-between aspect-square text-white relative overflow-hidden group shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white backdrop-blur-sm group-hover:scale-110 transition-transform">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h4 className="font-bold text-white mb-1">Keorganisasian</h4>
              <p className="text-xs text-indigo-100">Jadilah pemimpin masa depan.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
