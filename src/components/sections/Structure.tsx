import React from 'react';
import { motion } from 'framer-motion';

const Structure = () => {
    return (
        <section id="structure" className="py-24">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter">Struktur <span className="text-gradient">Organisasi</span></h2>
                    <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
                        Sinergi antar divisi yang kuat untuk menciptakan ekosistem organisasi yang produktif dan profesional.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-2xl relative z-10"
                >
                    {/* CORE CONTAINER */}
                    <div className="relative flex flex-col items-center w-full z-20">

                        {/* CONTINUOUS MOBILE TRUNK LINE (Hidden on Desktop) */}
                        <div className="lg:hidden absolute top-10 bottom-20 left-1/2 w-[3px] bg-slate-200 -z-10 -translate-x-1/2"></div>

                        {/* --- KETUA --- */}
                        <div className="bg-white border-2 border-blue-600 rounded-xl shadow-lg w-64 text-center overflow-hidden z-10 transition-transform hover:scale-105">
                            <div className="bg-blue-600 text-white py-2 font-bold tracking-widest text-sm uppercase">Ketua</div>
                            <div className="py-4 px-2">
                                <h2 className="text-lg font-extrabold text-slate-800">Ridhan Maulidi</h2>
                            </div>
                        </div>

                        {/* Connector (Desktop) */}
                        <div className="hidden lg:block w-[3px] h-8 bg-slate-200"></div>
                        {/* Spacing (Mobile) */}
                        <div className="lg:hidden h-10"></div>

                        {/* --- WAKIL KETUA --- */}
                        <div className="bg-white border-2 border-sky-500 rounded-xl shadow-lg w-64 text-center overflow-hidden z-10 transition-transform hover:scale-105">
                            <div className="bg-sky-500 text-white py-2 font-bold tracking-widest text-sm uppercase">Wakil Ketua</div>
                            <div className="py-4 px-2">
                                <h2 className="text-base font-extrabold text-slate-800">Muhammad Khairil Anwar</h2>
                            </div>
                        </div>

                        {/* Connector (Desktop) */}
                        <div className="hidden lg:block w-[3px] h-8 bg-slate-200"></div>
                        {/* Spacing (Mobile) */}
                        <div className="lg:hidden h-10"></div>

                        {/* --- SEKRETARIS & BENDAHARA --- */}
                        <div className="w-full max-w-2xl relative flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-0 z-10">
                            {/* Horizontal Line for Desktop */}
                            <div className="hidden lg:block absolute top-1/2 left-[20%] right-[20%] h-[3px] bg-slate-200 -z-10 -translate-y-1/2"></div>
                            {/* Vertical Center Drop for Desktop */}
                            <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[3px] bg-slate-200 -z-10 -translate-x-1/2"></div>

                            <div className="bg-white border-2 border-orange-500 rounded-xl shadow-lg w-56 text-center overflow-hidden z-20 transition-transform hover:scale-105">
                                <div className="bg-orange-500 text-white py-1.5 font-bold tracking-widest text-xs uppercase">Sekretaris</div>
                                <div className="py-3 px-2">
                                    <h2 className="text-sm font-extrabold text-slate-800">Cita Anugrahni</h2>
                                </div>
                            </div>

                            <div className="bg-white border-2 border-emerald-500 rounded-xl shadow-lg w-56 text-center overflow-hidden z-20 transition-transform hover:scale-105">
                                <div className="bg-emerald-500 text-white py-1.5 font-bold tracking-widest text-xs uppercase">Bendahara</div>
                                <div className="py-3 px-2">
                                    <h2 className="text-sm font-extrabold text-slate-800">Shiva Nor Alisa</h2>
                                </div>
                            </div>
                        </div>

                        {/* Connector to Divisi (Desktop) */}
                        <div className="hidden lg:block w-[3px] h-10 bg-slate-200"></div>
                        {/* Spacing (Mobile) */}
                        <div className="lg:hidden h-10"></div>

                        {/* --- DIVISI GRID --- */}
                        <div className="w-full relative mt-0 flex justify-center z-10">
                            {/* Horizontal Line for Divisi (Desktop Only) */}
                            <div className="hidden lg:block absolute top-0 left-[12.5%] right-[12.5%] h-[3px] bg-slate-200"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 pt-0 lg:pt-8 w-full max-w-5xl relative z-20">

                                {/* HUMAS */}
                                <div className="relative flex flex-col items-center group transition-transform hover:-translate-y-2">
                                    {/* Desktop vertical stalk */}
                                    <div className="hidden lg:block absolute top-[-32px] w-[3px] h-8 bg-slate-200 z-0"></div>
                                    <div className="bg-white rounded-xl shadow-lg border border-blue-200 overflow-hidden w-full max-w-sm z-10 border-t-4 border-t-blue-600">
                                        <div className="bg-blue-50/80 text-center py-2.5 border-b border-blue-100">
                                            <h3 className="font-bold text-blue-700 text-xs tracking-widest uppercase">Divisi Humas</h3>
                                        </div>
                                        <div className="p-5 bg-white">
                                            <p className="text-[10px] text-slate-400 font-bold uppercase text-center mb-1">Ketua Divisi</p>
                                            <p className="text-base font-black text-slate-800 text-center border-b border-slate-100 pb-3 mb-4">Muhammad Ramadhan</p>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Anggota</p>
                                            <ul className="text-sm font-semibold text-slate-600 space-y-2 text-left">
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span> Raiysa Tsaniya Labiba</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></span> Ahmad Norrouhy</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* PELATIHAN */}
                                <div className="relative flex flex-col items-center group transition-transform hover:-translate-y-2">
                                    {/* Desktop vertical stalk */}
                                    <div className="hidden lg:block absolute top-[-32px] w-[3px] h-8 bg-slate-200 z-0"></div>
                                    <div className="bg-white rounded-xl shadow-lg border border-orange-200 overflow-hidden w-full max-w-sm z-10 border-t-4 border-t-orange-500">
                                        <div className="bg-orange-50/80 text-center py-2.5 border-b border-orange-100">
                                            <h3 className="font-bold text-orange-600 text-xs tracking-widest uppercase">Divisi Pelatihan</h3>
                                        </div>
                                        <div className="p-5 bg-white">
                                            <p className="text-[10px] text-slate-400 font-bold uppercase text-center mb-1">Ketua Divisi</p>
                                            <p className="text-base font-black text-slate-800 text-center border-b border-slate-100 pb-3 mb-4">Damsi</p>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Anggota</p>
                                            <ul className="text-sm font-semibold text-slate-600 space-y-2 text-left">
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span> Siti Fatimah</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span> Haidir Akram</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span> Yuhdiannor Syabani</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* PERLENGKAPAN */}
                                <div className="relative flex flex-col items-center group transition-transform hover:-translate-y-2">
                                    {/* Desktop vertical stalk */}
                                    <div className="hidden lg:block absolute top-[-32px] w-[3px] h-8 bg-slate-200 z-0"></div>
                                    <div className="bg-white rounded-xl shadow-lg border border-emerald-200 overflow-hidden w-full max-w-sm z-10 border-t-4 border-t-emerald-500">
                                        <div className="bg-emerald-50/80 text-center py-2.5 border-b border-emerald-100">
                                            <h3 className="font-bold text-emerald-600 text-xs tracking-widest uppercase">Divisi Perlengkapan</h3>
                                        </div>
                                        <div className="p-5 bg-white">
                                            <p className="text-[10px] text-slate-400 font-bold uppercase text-center mb-1">Ketua Divisi</p>
                                            <p className="text-base font-black text-slate-800 text-center border-b border-slate-100 pb-3 mb-4">Ahmad Nourdy Abdillah</p>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Anggota</p>
                                            <ul className="text-sm font-semibold text-slate-600 space-y-2 text-left">
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span> Muhammad Razaq Marsa</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span> Mathias Pandu Ari Dwi Setiawan</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* DOKUMENTASI & KREATIF */}
                                <div className="relative flex flex-col items-center group transition-transform hover:-translate-y-2">
                                    {/* Desktop vertical stalk */}
                                    <div className="hidden lg:block absolute top-[-32px] w-[3px] h-8 bg-slate-200 z-0"></div>
                                    <div className="bg-white rounded-xl shadow-lg border border-pink-200 overflow-hidden w-full max-w-sm z-10 border-t-4 border-t-pink-500">
                                        <div className="bg-pink-50/80 text-center py-2.5 border-b border-pink-100">
                                            <h3 className="font-bold text-pink-600 text-xs tracking-widest uppercase">Divisi Dok. & Kreatif</h3>
                                        </div>
                                        <div className="p-5 bg-white">
                                            <p className="text-[10px] text-slate-400 font-bold uppercase text-center mb-1">Ketua Divisi</p>
                                            <p className="text-base font-black text-slate-800 text-center border-b border-slate-100 pb-3 mb-4">Vina</p>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase mb-2">Anggota</p>
                                            <ul className="text-sm font-semibold text-slate-600 space-y-2 text-left">
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0"></span> Ferdiansyah</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0"></span> Hamdah</li>
                                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0"></span> Nanda Alrezel Rifani</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Structure;
