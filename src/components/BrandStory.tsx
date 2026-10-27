import React from 'react';
import { MapPin, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { IMAGES, handleImageError } from '../assets/images';

interface BrandStoryProps {
  onVisitLocation: () => void;
}

export const BrandStory: React.FC<BrandStoryProps> = ({ onVisitLocation }) => {
  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-[#FFF9F2] relative overflow-hidden">
      {/* Subtle background pastel elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#F2D9D3]/40 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with layered blush pink accent block */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            {/* Layered blush pink background block behind image */}
            <div className="absolute -top-4 -left-4 w-4/5 h-4/5 bg-[#F2D9D3] rounded-[28px] -z-10 transform -rotate-2"></div>
            <div className="absolute -bottom-4 -right-4 w-3/4 h-3/4 bg-[#E9C4BC]/60 rounded-[28px] -z-10"></div>

            <div className="relative rounded-[24px] overflow-hidden shadow-xl border border-[#E9C4BC]/80 bg-white">
              <img
                src={IMAGES.chipaHerbs}
                onError={(e) => handleImageError(e, '/images/chipa_herbs_close_up.jpg')}
                alt="Chipacitos artesanales dorados con hierbas recién salidos del horno sobre plato cerámico"
                className="w-full h-[360px] sm:h-[440px] object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#49352F]/40 to-transparent pointer-events-none"></div>

              {/* Little badge in corner */}
              <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl border border-[#E9C4BC]/70 shadow-sm flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#C9817D]" />
                <span className="text-xs font-semibold text-[#49352F]">Dedicación en cada horneada</span>
              </div>
            </div>
          </div>

          {/* Right Column: Heading & Editorial Copy */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-[#B9824D]"></span>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B9824D]">
                Nuestra Filosofía
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#49352F] leading-tight [text-wrap:balance]">
              Algo rico siempre nos une.
            </h2>

            <p className="text-base sm:text-lg text-[#292321]/80 leading-relaxed">
              Los mejores momentos muchas veces empiezan con algo rico para compartir. En <strong>Chipacitos Vida</strong> queremos ser parte de esos pequeños momentos que hacen especial cada día.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#F2D9D3] text-[#B9824D] flex items-center justify-center shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#49352F]">Calor de hogar y queso fundido</h4>
                  <p className="text-xs sm:text-sm text-[#292321]/70 leading-relaxed">
                    Ese aroma inconfundible al abrir la bolsa o servir la bandeja en la mesa para compartir entre amigos o familia.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#F2D9D3] text-[#B9824D] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#49352F]">Un rincón jujeño para tus antojos</h4>
                  <p className="text-xs sm:text-sm text-[#292321]/70 leading-relaxed">
                    Ubicados estratégicamente en San Salvador de Jujuy para que puedas retirar tus panificados a tiempo para la merienda.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onVisitLocation}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#49352F] hover:bg-[#34241F] text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm hover:shadow transition-all duration-200 cursor-pointer group"
              >
                <span>Conocé nuestro espacio</span>
                <ArrowRight className="w-4 h-4 text-[#D9B58D] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
