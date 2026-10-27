import React, { useState } from 'react';
import { Sparkles, ChevronDown, ChevronUp, Phone, CheckCircle2, MapPin } from 'lucide-react';

interface PitchBannerProps {
  customPhone: string;
  onPhoneChange: (phone: string) => void;
}

export const PitchBanner: React.FC<PitchBannerProps> = ({
  customPhone,
  onPhoneChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handlePhoneSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="bg-[#49352F] text-[#FFF9F2] text-xs border-b border-[#D9B58D]/30 transition-all z-50 relative">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#B9824D]/30 text-[#FFF9F2] border border-[#B9824D]/50 text-[11px] font-medium tracking-wide uppercase">
            <Sparkles className="w-3 h-3 text-[#D9B58D]" />
            Propuesta de Sitio Web
          </span>
          <span className="hidden sm:inline text-[#FFF9F2]/90 truncate">
            Vista previa interactiva para el dueño de <strong className="font-semibold text-white">Chipacitos Vida</strong> (San Salvador de Jujuy)
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-1 text-[#D9B58D] hover:text-white transition-colors cursor-pointer text-xs font-medium py-1 px-2 rounded hover:bg-white/10"
            aria-expanded={isOpen}
          >
            <span>{isOpen ? 'Ocultar panel de cliente' : 'Configurar número de prueba'}</span>
            {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Expandable panel for presenting to the business owner */}
      {isOpen && (
        <div className="bg-[#382823] px-4 py-4 border-t border-[#D9B58D]/20 animate-fadeIn">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-serif text-sm font-semibold text-[#FFF9F2] mb-1.5 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#B9824D]"></span>
                Objetivo de esta propuesta
              </h4>
              <p className="text-[#FFF9F2]/80 leading-relaxed text-[11px]">
                Demostrar a <strong>Chipacitos Vida</strong> cómo una web moderna, rápida y con estética boutique pastel multiplica las consultas locales en Jujuy y automatiza los pedidos por WhatsApp.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-sm font-semibold text-[#FFF9F2] mb-1.5 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#D9B58D]" />
                Probar WhatsApp en tiempo real
              </h4>
              <p className="text-[#FFF9F2]/80 leading-relaxed text-[11px] mb-2">
                Ingresá el número de WhatsApp del negocio (o el tuyo para la demo) para que los botones de pedido abran un chat directo:
              </p>
              <form onSubmit={handlePhoneSubmit} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ej: 5493881234567"
                  value={customPhone}
                  onChange={(e) => onPhoneChange(e.target.value)}
                  className="bg-[#292321] text-white text-xs px-2.5 py-1.5 rounded border border-[#D9B58D]/40 focus:outline-none focus:border-[#D9B58D] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#B9824D] hover:bg-[#a6713e] text-white px-3 py-1.5 rounded text-xs font-medium cursor-pointer transition-colors"
                >
                  {savedSuccess ? '¡Listo!' : 'Activar'}
                </button>
              </form>
              {savedSuccess && (
                <span className="text-emerald-400 text-[10px] flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3 h-3" /> Número vinculado a los botones de consulta
                </span>
              )}
            </div>

            <div>
              <h4 className="font-serif text-sm font-semibold text-[#FFF9F2] mb-1.5 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#D9B58D]" />
                Información verificada
              </h4>
              <p className="text-[#FFF9F2]/80 leading-relaxed text-[11px]">
                Ubicación conectada con la ficha oficial de Google Maps: <em>Cercanías Escuela Provincial de Teatro Tito Guerra</em>, San Salvador de Jujuy.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
