import React from 'react';
import { ArrowDown, MapPin, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface HeroProps {
  onExploreProducts: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts }) => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#F2D9D3] via-[#F8E7E2] to-[#FFF9F2] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E9C4BC]/40"
    >
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/40 rounded-full blur-3xl pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#E9C4BC]/30 rounded-full blur-2xl pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text & CTAs (42-45% width on desktop) */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#B9824D]"></span>
              <span className="text-[12px] sm:text-[13px] font-semibold tracking-[0.2em] uppercase text-[#B9824D]">
                El sabor de lo hecho con cariño
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-[#49352F] leading-[1.12] tracking-tight [text-wrap:balance]">
              Pequeños bocados, <br />
              <span className="italic font-normal text-[#B9824D]">grandes momentos.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#292321]/80 leading-relaxed max-w-xl">
              Descubrí una propuesta de panificados pensada para disfrutar cada momento. Encontrá tus favoritos y conocé todo lo que tenemos para vos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#49352F] hover:bg-[#34241F] text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer group active:scale-98"
              >
                <span>Descubrí nuestros productos</span>
                <ArrowDown className="w-4 h-4 text-[#D9B58D] group-hover:translate-y-0.5 transition-transform" />
              </button>

              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/80 hover:bg-white text-[#49352F] border border-[#E9C4BC] hover:border-[#B9824D]/60 text-sm font-semibold rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
              >
                <MapPin className="w-4 h-4 text-[#B9824D]" />
                <span>Cómo llegar</span>
              </a>
            </div>

            {/* Local Trust Note */}
            <div className="pt-3 border-t border-[#E9C4BC]/60 flex items-center gap-3 text-xs text-[#49352F]/70">
              <Sparkles className="w-4 h-4 text-[#B9824D] shrink-0" />
              <span>Panificados frescos en San Salvador de Jujuy · Horneado diario</span>
            </div>
          </div>

          {/* Right Column: Hero Food Photograph (55-58% width on desktop) */}
          <div className="lg:col-span-7 relative">
            {/* Visual Frame */}
            <div className="relative mx-auto max-w-2xl lg:max-w-none">
              {/* Outer decorative soft blush aura */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E9C4BC]/50 via-white/60 to-[#F2D9D3]/70 rounded-[32px] blur-sm transform -rotate-1"></div>

              {/* Main Image Container */}
              <div className="relative rounded-[28px] overflow-hidden bg-white shadow-xl shadow-[#49352F]/10 border border-[#E9C4BC]/70 group">
                <img
                  src="/src/assets/images/hero_chipacitos_platter_1793084496201.jpg"
                  alt="Plato de chipacitos de queso artesanales recién horneados sobre mantel rosa pastel"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[500px] object-cover object-center transform group-hover:scale-102 transition-transform duration-700 ease-out"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle vignette gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#49352F]/60 via-[#49352F]/10 to-transparent pointer-events-none"></div>

                {/* Floating caption pill */}
                <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-md border border-[#E9C4BC]/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#F2D9D3] flex items-center justify-center text-[#B9824D] font-bold text-xs shrink-0">
                    🧀
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#49352F]">Chipacitos Recién Horneados</p>
                    <p className="text-[11px] text-[#292321]/70">Crocantes por fuera · Suaves y aireados por dentro</p>
                  </div>
                </div>

                {/* Aesthetic pagination dots reflecting the reference */}
                <div className="absolute bottom-4 right-6 hidden sm:flex items-center gap-1.5 z-10 bg-white/70 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-[#49352F]"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#49352F]/40"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#49352F]/40"></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#49352F]/40"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
