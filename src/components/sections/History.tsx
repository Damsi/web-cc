import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Award, Star, History as HistoryIcon, Rocket, Cpu, Users, Zap, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const History = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  const events = [
    { 
      year: '2018', 
      period: 'The Dawn',
      title: 'Pembentukan Organisasi', 
      desc: 'UKM Chip.Com lahir dari gagasan untuk menciptakan ekosistem teknologi yang inklusif di STMIK Indonesia Banjarmasin.',
      icon: HistoryIcon,
      gradient: 'linear-gradient(to right, #3b82f6, #22d3ee)',
      shadow: 'rgba(59, 130, 246, 0.4)',
      stat: 'Founder: 12 Mahasiswa'
    },
    { 
      year: '2019', 
      period: 'Acceleration',
      title: 'Pengembangan Skill IT', 
      desc: 'Transformasi menjadi pusat pelatihan pemrograman dan desain grafis dengan kurikulum yang relevan dengan industri.',
      icon: Zap,
      gradient: 'linear-gradient(to right, #4f46e5, #3b82f6)',
      shadow: 'rgba(79, 70, 229, 0.4)',
      stat: '15+ Workshop / Tahun'
    },
    { 
      year: '2021', 
      period: 'Momentum',
      title: 'Ekspansi Komunitas', 
      desc: 'Mencapai lebih dari 100 anggota aktif dan mulai berkolaborasi dengan komunitas teknologi luar kampus.',
      icon: Users,
      gradient: 'linear-gradient(to right, #9333ea, #4f46e5)',
      shadow: 'rgba(147, 51, 234, 0.4)',
      stat: '100+ Anggota Aktif'
    },
    { 
      year: '2023', 
      period: 'Legacy',
      title: 'Prestasi & Inovasi', 
      desc: 'Membangun proyek-proyek open-source dan memenangkan kompetisi IT di tingkat regional dan nasional.',
      icon: Award,
      gradient: 'linear-gradient(to right, #2563eb, #9333ea)',
      shadow: 'rgba(37, 99, 235, 0.4)',
      stat: '5+ Penghargaan'
    },
    { 
      year: 'Future', 
      period: 'Vision',
      title: 'Leading the Tech', 
      desc: 'Berkomitmen menjadi pelopor inovasi digital di Kalimantan Selatan dengan fokus pada AI dan Future Tech.',
      icon: Rocket,
      gradient: 'linear-gradient(to right, #06b6d4, #2563eb)',
      shadow: 'rgba(6, 182, 212, 0.4)',
      stat: 'Next Step: Tech Incubator'
    }
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} id="history" className="py-24 relative overflow-hidden bg-slate-50">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-400/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-[0.2em] mb-6"
          >
            <HistoryIcon className="w-4 h-4" />
            Our Evolution
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-8">
            The <span className="text-gradient">Timeline.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Dari komunitas kecil hingga menjadi pusat inovasi teknologi. Inilah perjalanan kami membangun masa depan melalui kode dan kreativitas.
          </p>
        </div>

        <div className="relative">
          {/* Central Progress Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-2 bg-slate-200 hidden lg:block rounded-full overflow-hidden">
            <motion.div 
              style={{ scaleY }}
              className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 origin-top shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            />
          </div>

          <div className="space-y-16 relative">
            {events.map((event, idx) => {
              const Icon = event.icon;
              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className="relative">
                  <div className={cn(
                    "flex flex-col lg:flex-row items-center gap-12 lg:gap-16",
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  )}>
                    {/* Content Side */}
                    <motion.div 
                      className="flex-1 w-full"
                      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, type: "spring" }}
                      viewport={{ once: true, margin: "-100px" }}
                    >
                      <div className="group relative p-1">
                        {/* Decorative Gradient Border */}
                        <div 
                          className="absolute -inset-0.5 opacity-20 blur group-hover:opacity-100 transition duration-500 rounded-[2.5rem]"
                          style={{ background: event.gradient }}
                        />
                        
                        <div className="relative p-8 md:p-12 rounded-[2rem] bg-white border border-slate-100 shadow-xl overflow-hidden">
                          {/* Background Year Decal */}
                          <div className="absolute -top-10 -right-10 text-[10rem] font-black text-slate-100/60 leading-none select-none -z-10 group-hover:scale-110 transition-transform duration-700 pointer-events-none italic">
                            {event.year}
                          </div>

                          <div 
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white text-xs font-black uppercase tracking-widest mb-6"
                            style={{ background: event.gradient, boxShadow: `0 8px 16px ${event.shadow}` }}
                          >
                            {event.period}
                          </div>
                          
                          <h3 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 tracking-tight leading-tight">
                            {event.title}
                          </h3>
                          <p className="text-lg text-slate-500 leading-relaxed mb-8">
                            {event.desc}
                          </p>

                          <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                            <div 
                              className="p-2.5 rounded-xl text-white shadow-lg"
                              style={{ background: event.gradient }}
                            >
                              <Icon size={20} className="relative z-10" />
                            </div>
                            <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                              {event.stat}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Center Point */}
                    <div className="relative z-10 hidden lg:block">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-2xl relative z-20 bg-white border-2 border-slate-100 rotate-45"
                      >
                        <div 
                          className="w-6 h-6 rounded-lg -rotate-45 shadow-sm"
                          style={{ background: event.gradient }}
                        />
                      </motion.div>
                      
                      {/* Outer Rings */}
                      <div 
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full blur-xl -z-10 opacity-20 animate-pulse" 
                        style={{ background: event.gradient }}
                      />
                    </div>

                    {/* Spacer / Empty Side */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Closing CTA */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 text-slate-200">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-slate-200" />
            <Globe className="w-8 h-8 animate-spin-slow text-slate-300" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-slate-200" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default History;
