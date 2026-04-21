import React from 'react';
import { motion } from 'framer-motion';
import { Target, Flag, CheckCircle } from 'lucide-react';

const VisionMission = () => {
  const missions = [
    'Meningkatkan SDM Mahasiswa agar lebih berkualitas di bidang IT.',
    'Meningkatkan jiwa kepemimpinan serta loyalitas dalam organisasi.',
    'Menghasilkan kader yang inovatif, disiplin, dan bertanggung jawab.',
    'Menjadi pusat pembelajaran teknologi yang inklusif di kampus.'
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-blue-600 rounded-2xl text-white shadow-xl shadow-blue-500/30">
              <Target className="h-8 w-8" />
            </div>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">Visi</h2>
          </div>
          
          <div className="relative">
            <p className="text-3xl md:text-5xl font-black leading-tight text-slate-900 mb-6 font-serif italic border-l-8 border-blue-600 pl-8 py-4">
              "Terbentuknya mahasiswa yang unggul di bidang IT dan berjiwa organisatoris."
            </p>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-[3rem] shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -z-10" />
          
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-xl shadow-indigo-500/30">
              <Flag className="h-8 w-8" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Misi</h2>
          </div>
          
          <div className="space-y-6">
            {missions.map((mission, idx) => (
              <motion.div 
                key={idx} 
                className="flex gap-5 items-start group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mt-1 flex items-center justify-center p-1 rounded-full bg-blue-100 text-blue-600 group-hover:scale-110 transition-transform">
                  <CheckCircle className="h-6 w-6 shrink-0" />
                </div>
                <p className="text-xl text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors">{mission}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;
