import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star, History as HistoryIcon } from 'lucide-react';

const History = () => {
  const events = [
    { 
      year: 'Awal Mula', 
      title: 'Pembentukan Organisasi', 
      desc: 'UKM Chip.Com didirikan dengan visi menjadi wadah inspiratif bagi mahasiswa IT di STMIK Indonesia Banjarmasin untuk berbagi ilmu dan inovasi.',
      icon: HistoryIcon,
      color: 'bg-blue-600'
    },
    { 
      year: 'Evolusi', 
      title: 'Pengembangan Skill IT', 
      desc: 'Mulai menyelenggarakan berbagai workshop pemrograman, desain grafis, dan jaringan secara rutin untuk meningkatkan kualitas SDM mahasiswa.',
      icon: Star,
      color: 'bg-indigo-600'
    },
    { 
      year: 'Prestasi', 
      title: 'Dikenal Luas', 
      desc: 'Menjadi salah satu UKM paling aktif di lingkungan kampus dengan program unggulan seperti "Pelatihan Dasar" yang diadakan setiap tahun.',
      icon: Award,
      color: 'bg-purple-600'
    }
  ];

  return (
    <section id="history" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 uppercase tracking-widest"
          >
            Our Journey
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter mb-8">Jejak <span className="text-gradient">Langkah Kami</span></h2>
          <p className="text-xl text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            Perjalanan panjang UKM Chip.Com dalam membangun komunitas teknologi yang solid dan berprestasi di Kalimantan Selatan.
          </p>
        </div>

        <div className="space-y-12 relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-transparent hidden lg:block" />
          
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              className={`flex flex-col lg:flex-row items-center gap-12 relative ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex-1 w-full">
                <div className={`p-8 rounded-[2.5rem] bg-slate-50 border border-slate-200 shadow-2xl relative group hover:bg-blue-600/5 transition-colors duration-500`}>
                  <div className={`absolute top-0 ${idx % 2 === 1 ? 'right-0' : 'left-0'} w-24 h-24 ${event.color}/10 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform`} />
                  
                  <span className="text-2xl font-black text-blue-600 mb-2 block">{event.year}</span>
                  <h3 className="text-3xl font-bold mb-4 text-slate-900">{event.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{event.desc}</p>
                </div>
              </div>

              <div className="relative z-10 w-20 h-20 rounded-full bg-white border-4 border-blue-600 flex items-center justify-center shadow-xl shadow-blue-500/20 group hover:scale-110 transition-transform">
                <event.icon className="h-10 w-10 text-blue-600" />
                <div className="absolute -inset-2 bg-blue-600/20 rounded-full animate-pulse -z-10" />
              </div>

              <div className="flex-1 hidden lg:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
