import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, ArrowRight, ExternalLink } from 'lucide-react';

const Gallery = () => {
  const images = [
    { src: '/images/pelatihan.webp', title: 'Pelatihan Dasar', category: 'Education' },
    { src: '/images/fotbar_pelatihan.webp', title: 'Kebersamaan Pengurus', category: 'Internal' },
    { src: '/images/fotbar_pelatihan2.webp', title: 'Workshop Teknologi', category: 'Training' },
    { src: '/images/pedas1.webp', title: 'Kegiatan Sosial', category: 'Community' },
    { src: '/images/diesnatalis1.webp', title: 'Dies Natalis', category: 'Event' },
  ];

  return (
    <section id="gallery" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">Momen & <span className="text-gradient">Dokumentasi</span></h2>
            <p className="text-xl text-foreground/60">Kilasan perjalanan kami dalam mengembangkan potensi teknologi dan keorganisasian.</p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="https://www.instagram.com/chipcomstmik_id/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white font-bold shadow-xl shadow-pink-500/20 hover:shadow-pink-500/40 transition-all duration-300"
            >
              <Instagram className="h-6 w-6" />
              Lihat di Instagram
              <ExternalLink className="h-4 w-4 opacity-70" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              className="group relative overflow-hidden rounded-[2rem] aspect-video bg-slate-100 shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1" 
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-bold mb-3 uppercase tracking-widest">
                  {img.category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">{img.title}</h3>
                {/* <div className="flex items-center gap-2 text-white/60 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span>Lihat Detail</span>
                  <ArrowRight className="h-4 w-4" />
                </div> */}
              </div>
            </motion.div>
          ))}
          
          <motion.div
            className="flex items-center justify-center border-4 border-dashed border-slate-200 rounded-[2rem] h-full w-full min-h-[250px] p-8 text-center group cursor-pointer hover:bg-slate-50 transition-colors"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <a href="https://www.instagram.com/chipcomstmik_id/" target="_blank" rel="noopener noreferrer" className="space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Instagram className="h-8 w-8 text-slate-400 group-hover:text-pink-500" />
              </div>
              <h3 className="font-bold text-xl group-hover:text-pink-500 transition-colors">Tonton Lainnya</h3>
              <p className="text-sm text-foreground/40">Dapatkan update terbaru dari kegiatan UKM kami di media sosial.</p>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
