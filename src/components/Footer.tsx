import React from 'react';
import { ArrowUp, MapPin, MessageCircle, Heart } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

interface FooterProps {
  onOrderClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOrderClick }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#49352F] text-[#FFF9F2] pt-16 pb-12 border-t border-[#382823]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#FFF9F2]/15">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B9824D]"></span>
              <span className="text-2xl font-serif font-bold tracking-tight text-white">
                Chipacitos Vida
              </span>
            </div>
            <p className="text-sm text-[#FFF9F2]/80 leading-relaxed max-w-sm">
              Un espacio para descubrir sabores y disfrutar pequeños momentos. Panificados con dedicación y el inconfundible aroma del queso recién horneado.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D9B58D]">
              <MapPin className="w-4 h-4 shrink-0" />
              <span>San Salvador de Jujuy, Jujuy, Argentina</span>
            </div>
          </div>

          {/* Quick Navigation (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D9B58D]">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm text-[#FFF9F2]/80">
              <li>
                <a href="#inicio" className="hover:text-white transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="hover:text-white transition-colors">
                  Nuestros Productos
                </a>
              </li>
              <li>
                <a href="#nosotros" className="hover:text-white transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition-colors">
                  Contacto y Pedidos
                </a>
              </li>
            </ul>
          </div>

          {/* Business & Location (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#D9B58D]">
              Ubicación & Consultas
            </h4>
            <p className="text-xs text-[#FFF9F2]/80 leading-relaxed">
              Cercanías Escuela Provincial de Teatro “Tito Guerra”. Encontranos en el mapa para planificar tu visita.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D9B58D]" />
                <span>Ver en Google Maps</span>
              </a>

              <button
                onClick={onOrderClick}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#B9824D] hover:bg-[#a6713e] text-xs font-semibold text-white transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Hacé tu pedido</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF9F2]/60">
          <p>© {currentYear} Chipacitos Vida. San Salvador de Jujuy, Argentina. Todos los derechos reservados.</p>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#FFF9F2]/50">
              Propuesta de diseño web independiente · Presentación para cliente
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
