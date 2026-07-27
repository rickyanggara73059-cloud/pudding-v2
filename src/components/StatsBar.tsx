import React from 'react';
import { Award, CheckCircle, Star, Sparkles } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />,
      number: "1,500+",
      label: "Pesanan Terkirim",
      subtext: "Pontianak & Kubu Raya"
    },
    {
      icon: <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />,
      number: "100%",
      label: "Buah Segar Alami",
      subtext: "Dipilih Setiap Pagi"
    },
    {
      icon: <Star className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-amber-400" />,
      number: "4.9 / 5.0",
      label: "Rating Pelanggan",
      subtext: "Kepuasan Terjamin"
    },
    {
      icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" />,
      number: "100% Halal",
      label: "Tanpa Pengawet",
      subtext: "Resep Homemade Vla"
    }
  ];

  return (
    <section className="relative z-20 -mt-4 sm:-mt-10 max-w-6xl mx-auto px-3.5 sm:px-6">
      <div className="rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-orange-100 dark:border-slate-700/80 shadow-xl p-4 sm:p-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-2 rounded-xl bg-slate-50/60 dark:bg-slate-900/40 border border-slate-100 dark:border-slate-800 lg:bg-transparent lg:border-none lg:p-0"
            >
              <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-amber-100/70 dark:bg-slate-700/60 flex items-center justify-center mb-1.5 sm:mb-3 shadow-2xs">
                {stat.icon}
              </div>
              <span className="text-base sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white font-display tracking-tight">
                {stat.number}
              </span>
              <span className="text-[11px] sm:text-xs font-bold text-slate-800 dark:text-slate-200 mt-0.5">
                {stat.label}
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
