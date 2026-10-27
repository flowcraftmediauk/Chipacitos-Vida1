import React from 'react';
import { MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface MobileActionBarProps {
  onOrderClick: () => void;
  customPhone: string;
}

export const MobileActionBar: React.FC<MobileActionBarProps> = ({
  onOrderClick,
  customPhone,
}) => {
  const handleDirectChat = () => {
    if (customPhone.trim()) {
      const clean = customPhone.replace(/[^0-9]/g, '');
      const msg = encodeURIComponent('¡Hola Chipacitos Vida! Quisiera consultar los productos del día para hacer un pedido.');
      window.open(`https://wa.me/${clean}?text=${msg}`, '_blank', 'noopener,noreferrer');
    } else {
      onOrderClick();
    }
  };

  return (
    <>
      {/* Sticky Mobile Bottom Bar (visible on screens < 768px) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-[#FFF9F2]/95 backdrop-blur-md border-t border-[#E9C4BC] px-3.5 py-2.5 shadow-[0_-4px_16px_rgba(73,53,47,0.12)]">
        <div className="flex items-center justify-between gap-2.5 max-w-md mx-auto">
          {/* Quick Info & Location */}
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 py-2 px-3 rounded-full bg-white text-[#49352F] border border-[#E9C4BC] text-xs font-semibold shrink-0"
          >
            <MapPin className="w-3.5 h-3.5 text-[#B9824D]" />
            <span>Maps Jujuy</span>
          </a>

          {/* Primary High-Conversion CTA */}
          <button
            onClick={handleDirectChat}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-[#49352F] hover:bg-[#34241F] text-white text-xs font-bold uppercase tracking-wider shadow-md active:scale-98 transition-all cursor-pointer"
          >
            <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></div>
            <MessageCircle className="w-4 h-4 text-[#D9B58D]" />
            <span>Hacer Pedido</span>
          </button>
        </div>
      </div>

      {/* Floating WhatsApp Bubble for Desktop & Tablet (visible bottom-right) */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col items-end group">
        {/* Subtle tooltip teaser */}
        <div className="mb-2 bg-[#49352F] text-white text-xs py-1.5 px-3 rounded-xl shadow-lg border border-[#D9B58D]/30 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity">
          <Sparkles className="w-3 h-3 text-[#D9B58D]" />
          <span>¿Antojo de chipacitos calentitos?</span>
        </div>

        <button
          onClick={handleDirectChat}
          className="w-14 h-14 rounded-full bg-[#49352F] hover:bg-[#382823] text-white shadow-xl hover:shadow-2xl flex items-center justify-center border-2 border-[#D9B58D]/60 hover:scale-108 transition-all cursor-pointer relative"
          aria-label="Contactar por WhatsApp a Chipacitos Vida"
        >
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#25D366] rounded-full border-2 border-white flex items-center justify-center">
            <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
          </span>
          <MessageCircle className="w-7 h-7 text-[#D9B58D]" />
        </button>
      </div>
    </>
  );
};
