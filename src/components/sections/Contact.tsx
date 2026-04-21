import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Instagram, Send, Loader2, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for backend integration readiness
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Hubungi <span className="text-gradient">Kami</span></h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Punya pertanyaan atau ingin berkolaborasi? Kami siap mendengar dari Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="border-none shadow-2xl bg-blue-600 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -z-10" />
            <CardContent className="pt-10 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <div className="space-y-8 flex-1">
                <div className="flex gap-4 items-start font-medium leading-relaxed italic text-blue-50 border-l-4 border-blue-300 pl-6 py-2">
                  <MapPin className="h-6 w-6 shrink-0 text-white" />
                  <p>Jl. Pangeran Hidayatullah, Sungai Jingah, Banjarmasin Utara, Kota Banjarmasin, Kalsel 70122</p>
                </div>
                <div className="flex gap-4 items-center text-blue-50">
                  <Phone className="h-6 w-6 shrink-0 text-white" />
                  <p>+62 822-5185-5328</p>
                </div>
                <div className="flex gap-4 items-center text-blue-50">
                  <Instagram className="h-6 w-6 shrink-0 text-white" />
                  <p>@chipcomstmik_id</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2 border-none shadow-xl glass bg-white">
            <CardContent className="pt-10">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Nama Lengkap</label>
                  <Input required placeholder="John Doe" className="bg-slate-50 border-slate-200 focus:ring-blue-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Email</label>
                  <Input required type="email" placeholder="john@example.com" className="bg-slate-50 border-slate-200 focus:ring-blue-500" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Subjek</label>
                  <Input required placeholder="Ingin bergabung / Kerjasama" className="bg-slate-50 border-slate-200 focus:ring-blue-500" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-slate-500">Pesan</label>
                  <Textarea required placeholder="Halo Chip.Com, saya ingin..." className="min-h-[150px] bg-slate-50 border-slate-200 focus:ring-blue-500 resize-none" />
                </div>
                <div className="md:col-span-2 mt-2">
                  <Button 
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`w-full md:w-auto px-12 py-6 rounded-full text-lg font-bold shadow-xl transition-all duration-300 gap-2 ${
                      isSuccess ? 'bg-green-600 hover:bg-green-700 shadow-green-500/20' : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/20'
                    }`}
                  >
                    {isSubmitting ? (
                      <><Loader2 className="h-5 w-5 animate-spin" /> Mengirim...</>
                    ) : isSuccess ? (
                      <><CheckCircle2 className="h-5 w-5" /> Terkirim!</>
                    ) : (
                      <><Send className="h-5 w-5" /> Kirim Pesan</>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
