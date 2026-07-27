import React from 'react';
import { ShoppingBag, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink } from '../data/businessData';

interface StickyMobileCtaProps {
  onOpenOrderModal: () => void;
}

export const StickyMobileCta: React.FC<StickyMobileCtaProps> = ({ onOpenOrderModal }) => {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-orange-200/80 dark:border-slate-800 p-2.5 px-3.5 shadow-2xl animate-in slide-in-from-bottom duration-300">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        
        {/* Custom Order Modal Trigger */}
        <button
          onClick={onOpenOrderModal}
          className="flex-1 min-h-[48px] px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-100 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-slate-200 dark:border-slate-700 active:scale-95"
        >
          <ShoppingBag className="w-4 h-4 text-amber-500 shrink-0" />
          <span>Format Order</span>
        </button>

        {/* WhatsApp Direct Order Button - Fills prominence */}
        <a
          href={buildWhatsAppLink('Order Langsung HP')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] min-h-[48px] px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-extrabold text-xs shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2 transition-transform active:scale-95"
        >
          <MessageCircle className="w-4 h-4 shrink-0 fill-white" />
          <span>Pesan via WA</span>
        </a>

      </div>
    </div>
  );
};
