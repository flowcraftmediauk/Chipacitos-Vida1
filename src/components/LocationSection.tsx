import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Copy, Check, Compass, Info } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export const LocationSection: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const fullAddressText = "Cercanías Escuela Provincial de Teatro 'Tito Guerra', San Salvador de Jujuy, Jujuy, Argentina";

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddressText);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  return (
    <section id="ubicacion" className="py-20 bg-[#FFF9F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#B9824D]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B9824D]">
              Ubicación Local
            </span>
            <span className="w-5 h-px bg-[#B9824D]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#49352F] tracking-tight mb-3 [text-wrap:balance]">
            Encontranos en Jujuy
          </h2>
          <p className="text-base sm:text-lg text-[#292321]/75 leading-relaxed">
            Estamos cerca de vos. Consultá nuestra ubicación y planificá tu visita.
          </p>
        </div>

        {/* Location Card + Interactive Map Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Details Card (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-[24px] p-8 border border-[#E9C4BC]/70 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F2D9D3] text-[#B9824D] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#49352F]">
                    Chipacitos Vida
                  </h3>
                  <p className="text-xs text-[#292321]/60">
                    San Salvador de Jujuy, Argentina
                  </p>
                </div>
              </div>

              {/* Verified landmark box */}
              <div className="bg-[#FFF9F2] rounded-2xl p-4 border border-[#E9C4BC]/60 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B9824D]">
                  <Compass className="w-4 h-4" />
                  Punto de Referencia
                </div>
                <p className="text-sm font-medium text-[#49352F]">
                  Cercanías Escuela Provincial de Teatro “Tito Guerra”
                </p>
                <p className="text-xs text-[#292321]/70 leading-relaxed">
                  Ubicación registrada en Google Maps. Fácil acceso desde el centro y zonas aledañas de la ciudad.
                </p>
              </div>

              {/* Helpful visit recommendation */}
              <div className="space-y-3 text-xs text-[#292321]/75">
                <div className="flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-[#B9824D] shrink-0 mt-0.5" />
                  <span>
                    Recomendamos consultar previamente por WhatsApp o revisar la ficha de Google Maps para coordinar el horario de horneado más conveniente.
                  </span>
                </div>
              </div>
            </div>

            {/* Actions: Direct Directions & Copy */}
            <div className="pt-8 border-t border-[#E9C4BC]/40 space-y-3">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#49352F] hover:bg-[#34241F] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                <Navigation className="w-4 h-4 text-[#D9B58D]" />
                <span>Cómo llegar con Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-white/60" />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#FFF9F2] hover:bg-[#F2D9D3]/40 text-[#49352F] border border-[#E9C4BC] text-xs font-medium rounded-full transition-colors cursor-pointer"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>¡Referencia copiada!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#B9824D]" />
                    <span>Copiar referencia de ubicación</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Interactive Map Visual Presentation (7 cols) */}
          <div className="lg:col-span-7 bg-[#F2D9D3]/30 rounded-[24px] border border-[#E9C4BC]/80 p-2 shadow-sm relative overflow-hidden flex flex-col min-h-[380px]">
            {/* Styled Map Container */}
            <div className="relative w-full h-full min-h-[360px] rounded-[18px] overflow-hidden bg-[#e5e3df] flex flex-col justify-between p-6">
              {/* Stylized background map grid lines */}
              <div className="absolute inset-0 opacity-25 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#49352F" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Decorative river / avenue curves representing San Salvador de Jujuy topography */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <svg viewBox="0 0 500 350" className="w-full h-full" preserveAspectRatio="none">
                  <path d="M-10,180 Q150,140 280,220 T520,180" fill="none" stroke="#D9B58D" strokeWidth="18" />
                  <path d="M120,-10 Q140,160 210,360" fill="none" stroke="#ffffff" strokeWidth="8" />
                  <path d="M340,-10 Q320,150 400,360" fill="none" stroke="#ffffff" strokeWidth="6" />
                </svg>
              </div>

              {/* Top Map Badges */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm border border-[#E9C4BC] flex items-center gap-2 text-xs font-semibold text-[#49352F]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  San Salvador de Jujuy, Argentina
                </div>

                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#49352F] text-white hover:bg-[#34241F] px-3.5 py-1.5 rounded-full text-xs font-medium shadow-sm transition-colors flex items-center gap-1.5"
                >
                  <span>Abrir en Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#D9B58D]" />
                </a>
              </div>

              {/* Central Map Pin marker */}
              <div className="relative z-10 my-auto flex flex-col items-center">
                <div className="relative group cursor-pointer">
                  {/* Pulse ring */}
                  <div className="absolute -inset-3 bg-[#B9824D]/30 rounded-full animate-ping"></div>

                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-[#49352F] text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-2 hover:scale-105 transition-transform"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#B9824D] flex items-center justify-center text-white text-xs">
                      🥐
                    </div>
                    <div className="text-left">
                      <p className="text-xs font-bold leading-tight">Chipacitos Vida</p>
                      <p className="text-[10px] text-[#FFF9F2]/80">Cerca de Esc. Tito Guerra</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Bottom Street Guide Bar */}
              <div className="relative z-10 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-[#E9C4BC] text-xs text-[#49352F] flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-xs">
                <span>📍 Ficha verificada en Google Maps para San Salvador de Jujuy</span>
                <span className="text-[#B9824D] font-semibold">Tocar para iniciar navegación GPS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
