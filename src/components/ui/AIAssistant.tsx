import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Sparkles, User, ChevronRight } from 'lucide-react';

type Message = {
  id: string;
  type: 'bot' | 'user';
  text: string;
  actions?: { label: string; href?: string; onClick?: () => void }[];
};

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: 'Halo! Saya JadeAI, asisten virtual UKM Chip.Com. Ada yang bisa saya bantu hari ini?',
      actions: [
        { label: 'Apa itu Chip.Com?', onClick: () => handleAction('Apa itu Chip.Com?') },
        { label: 'Cara Bergabung', onClick: () => handleAction('Cara Bergabung') },
        { label: 'Struktur Organisasi', href: '/struktur' }
      ]
    }
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleAction = (text: string) => {
    handleSend(text);
  };

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    const newMsg: Message = { id: Date.now().toString(), type: 'user', text };
    setMessages(prev => [...prev, newMsg]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      let response: Message = { id: (Date.now() + 1).toString(), type: 'bot', text: '' };

      const lowerText = text.toLowerCase();
      if (lowerText.includes('apa itu') || lowerText.includes('sejarah') || lowerText.includes('visi')) {
        response.text = 'UKM Chip.Com adalah wadah bagi mahasiswa IT & Kepemimpinan di STMIK Indonesia Banjarmasin. Visi kami adalah membentuk mahasiswa yang unggul di bidang IT dan berjiwa organisatoris.';
        response.actions = [{ label: 'Baca Sejarah Lengkap', href: '/sejarah' }];
      } else if (lowerText.includes('gabung') || lowerText.includes('daftar') || lowerText.includes('cara')) {
        response.text = 'Sangat mudah! Kamu bisa langsung bergabung melalui grup WhatsApp resmi kami. Klik tombol di bawah ini ya.';
        response.actions = [{ label: 'Gabung Grup WA', href: 'https://chat.whatsapp.com/FLdEDPVpLDs4c82XFgCCad' }];
      } else if (lowerText.includes('struktur') || lowerText.includes('ketua') || lowerText.includes('pengurus')) {
        response.text = 'Ketua umum kami saat ini adalah Ridhan Maulidi. Ingin melihat susunan divisi selengkapnya?';
        response.actions = [{ label: 'Lihat Struktur', href: '/struktur' }];
      } else if (lowerText.includes('kontak') || lowerText.includes('hubungi') || lowerText.includes('lokasi')) {
        response.text = 'Kami berlokasi di Jl. Pangeran Hidayatullah, Banjarmasin Utara. Kamu juga bisa menghubungi kami via IG @chipcomstmik_id.';
        response.actions = [{ label: 'Halaman Kontak', href: '/contact' }];
      } else {
        response.text = 'Maaf, saya masih terus belajar. Namun saya sarankan untuk mengeksplorasi website kami atau langsung bergabung bersama kami!';
        response.actions = [
          { label: 'Eksplorasi', href: '/' },
          { label: 'Gabung', href: 'https://chat.whatsapp.com/FLdEDPVpLDs4c82XFgCCad' }
        ];
      }

      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-blue-600 text-white shadow-xl shadow-blue-500/30 hover:bg-blue-700 transition-colors group"
          >
            <div className="absolute -inset-2 bg-blue-600/20 rounded-full animate-ping -z-10" />
            <Sparkles className="h-6 w-6" />
            <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-slate-800 text-sm font-bold rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
              Tanya JadeAI ✨
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-600 p-4 text-white flex justify-between items-center shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">JadeAI Assistant</h3>
                  <p className="text-xs text-blue-100 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-400 inline-block" /> Online
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex flex-col ${msg.type === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`flex gap-2 max-w-[85%] ${msg.type === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.type === 'user' ? 'bg-indigo-100 text-indigo-600' : 'bg-blue-100 text-blue-600'}`}>
                      {msg.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm ${msg.type === 'user' ? 'bg-indigo-600 text-white rounded-tr-sm' : 'bg-white border border-slate-200 text-slate-800 rounded-tl-sm shadow-sm'}`}>
                      {msg.text}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  {msg.actions && (
                    <div className="mt-2 ml-10 flex flex-wrap gap-2">
                      {msg.actions.map((act, idx) => (
                        act.href ? (
                          <a
                            key={idx}
                            href={act.href}
                            data-astro-reload={act.href === '/' ? true : undefined}
                            className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-semibold rounded-full transition-colors border border-blue-200"
                          >
                            {act.label} <ChevronRight className="h-3 w-3" />
                          </a>
                        ) : (
                          <button
                            key={idx}
                            onClick={act.onClick}
                            className="px-3 py-1.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold rounded-full shadow-sm transition-colors"
                          >
                            {act.label}
                          </button>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-100 bg-white shrink-0">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tanyakan sesuatu..."
                  className="flex-1 bg-slate-100 border-transparent focus:bg-white focus:border-blue-500 rounded-full px-4 py-2.5 text-sm outline-none transition-all w-full"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="p-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIAssistant;
