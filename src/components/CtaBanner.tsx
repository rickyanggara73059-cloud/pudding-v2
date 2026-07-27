import React from 'react';
import { ShoppingBag, Sparkles, PhoneCall, Heart } from 'lucide-react';
import { buildWhatsAppLink } from '../data/businessData';

interface CtaBannerProps {
  onOpenOrderModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          {/* Background Decorative Pattern */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-amber-300/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-spin" />
              <span>Pesan Sekarang Untuk Acara Spesial Anda</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-tight tracking-tight">
              Bikin Momen Ulang Tahun & Acara Keluarga Jadi Lebih Segar & Berkesan!
            </h2>

            <p className="text-sm sm:text-base text-amber-50/90 leading-relaxed max-w-2xl mx-auto">
              Slot kuota pembuatan terbatas setiap harinya untuk menjamin kesegaran buah 100%. Hubungi admin WhatsApp kami sekarang untuk booking tanggal pesanan Anda.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group active:scale-95"
              >
                <PhoneCall className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
                <span>Order via WhatsApp Direct</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-slate-950/40 hover:bg-slate-950/60 border border-white/30 text-white font-bold text-sm sm:text-base shadow-md backdrop-blur-md transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Isi Format Pesanan</span>
              </button>
            </div>

            <div className="pt-2 text-xs text-amber-100 flex items-center justify-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-rose-300 text-rose-300" />
              <span>Dibuat Penuh Cinta & Pengalaman Terbaik di Pontianak</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
