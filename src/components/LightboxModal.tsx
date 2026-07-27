import React from 'react';
import { X, ChevronLeft, ChevronRight, ShoppingBag, Sparkles } from 'lucide-react';
import { GalleryItem, buildWhatsAppLink } from '../data/businessData';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelectIndex: (idx: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onSelectIndex
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelectIndex(prevIdx);
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % items.length;
    onSelectIndex(nextIdx);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Top Bar Controls */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
        <span className="text-xs font-semibold text-slate-300">
          {currentIndex + 1} / {items.length} — Galeri Pudding Buah Pontianak
        </span>
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev / Next Navigation */}
      <button
        onClick={handlePrev}
        aria-label="Previous Image"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Image"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Image Container & Info */}
      <div className="max-w-4xl w-full flex flex-col items-center justify-center space-y-4 my-auto">
        <div className="relative max-h-[70vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-900">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[65vh] w-auto object-contain mx-auto"
            onError={(e) => {
              e.currentTarget.src = item.fallbackImage;
            }}
          />
        </div>

        {/* Caption Card */}
        <div className="w-full max-w-xl p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-center text-white space-y-3">
          <h3 className="text-lg font-bold font-display">{item.title}</h3>
          <p className="text-xs text-slate-300">{item.description}</p>
          
          <div className="pt-2 flex justify-center">
            <a
              href={buildWhatsAppLink(`Model Galeri: ${item.title}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-xs shadow-lg shadow-orange-500/25 transition-all"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Pesan Model Seperti Ini</span>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
