import React from 'react';
import { BUSINESS_INFO, buildWhatsAppLink } from '../data/businessData';
import { MapPin, Clock, Phone, Navigation, Truck, ExternalLink } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section id="lokasi" className="py-10 sm:py-16 lg:py-20 bg-orange-50/40 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-4 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/40 border border-amber-300/50 text-amber-800 dark:text-amber-300 text-[11px] sm:text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Lokasi & Jangkauan Pengiriman</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-display text-slate-900 dark:text-white tracking-tight">
            Kunjungi & <span className="text-amber-500">Hubungi Kami</span>
          </h2>
          <p className="text-xs sm:text-base text-slate-600 dark:text-slate-300">
            Melayani pengiriman pesan antar langsung ke seluruh wilayah Kota Pontianak, Kubu Raya, dan sekitarnya.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl space-y-2.5 border border-orange-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-amber-500/10 dark:bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-display">Alamat Outlet</h3>
                  <span className="text-[10px] sm:text-[11px] text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">Pontianak & Kubu Raya</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-1">
                {BUSINESS_INFO.address}
              </p>
            </div>

            {/* Operating Hours Card */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl space-y-2.5 border border-orange-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-display">Jam Operasional</h3>
                  <span className="text-[10px] sm:text-[11px] text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">Buka Setiap Hari</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-1 font-semibold">
                {BUSINESS_INFO.openingHours}
              </p>
            </div>

            {/* Delivery Info Card */}
            <div className="glass-card p-4 sm:p-6 rounded-2xl sm:rounded-3xl space-y-2.5 border border-orange-100 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white font-display">Layanan Kurir Delivery</h3>
                  <span className="text-[10px] sm:text-[11px] text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">Kirim Langsung Ke Alamat Anda</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pl-1">
                Melayani pesan antar Pontianak Kota, Pontianak Barat, Pontianak Selatan, Pontianak Timur, Pontianak Utara & Sungai Kakap / Kubu Raya.
              </p>
            </div>

            {/* Actions Buttons - Full Width on Mobile */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <a
                href={BUSINESS_INFO.googleMapsDirect}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 min-h-[48px] py-3 px-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-semibold text-xs border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Navigation className="w-4 h-4 text-amber-500" />
                <span>Petunjuk Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-50" />
              </a>

              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 min-h-[48px] py-3 px-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-xs shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>Chat Admin WA</span>
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Full Width Embed Frame */}
          <div className="lg:col-span-7 -mx-3.5 sm:mx-0">
            <div className="relative w-full h-[320px] sm:h-[400px] lg:h-full lg:min-h-[460px] rounded-none sm:rounded-3xl overflow-hidden border-y sm:border-4 border-slate-200 dark:border-slate-800 shadow-xl bg-slate-100 dark:bg-slate-800">
              <iframe
                title="Pudding Buah Pontianak Google Maps Location"
                src={BUSINESS_INFO.googleMapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
