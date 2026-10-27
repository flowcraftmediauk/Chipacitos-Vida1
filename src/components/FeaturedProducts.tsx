import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { MessageCircle, Eye, ArrowRight, Utensils } from 'lucide-react';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
  onOpenConsultation: () => void;
  onDirectWhatsApp: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onOpenConsultation,
  onDirectWhatsApp,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'chipas' | 'rellenos' | 'dulces'>('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="productos" className="py-16 sm:py-24 bg-[#FFF9F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#B9824D]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B9824D]">
              Propuesta Artesanal
            </span>
            <span className="w-5 h-px bg-[#B9824D]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#49352F] tracking-tight mb-4 [text-wrap:balance]">
            Un antojo siempre encuentra su momento
          </h2>
          <p className="text-base sm:text-lg text-[#292321]/75 leading-relaxed">
            Conocé nuestros productos y encontrá algo rico para disfrutar.
          </p>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#F2D9D3]/40 rounded-full max-w-md mx-auto border border-[#E9C4BC]/60">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-[#49352F] text-white shadow-sm'
                  : 'text-[#49352F] hover:text-[#B9824D]'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setActiveCategory('chipas')}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === 'chipas'
                  ? 'bg-[#49352F] text-white shadow-sm'
                  : 'text-[#49352F] hover:text-[#B9824D]'
              }`}
            >
              Chipacitos
            </button>
            <button
              onClick={() => setActiveCategory('rellenos')}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === 'rellenos'
                  ? 'bg-[#49352F] text-white shadow-sm'
                  : 'text-[#49352F] hover:text-[#B9824D]'
              }`}
            >
              Rellenos
            </button>
            <button
              onClick={() => setActiveCategory('dulces')}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                activeCategory === 'dulces'
                  ? 'bg-[#49352F] text-white shadow-sm'
                  : 'text-[#49352F] hover:text-[#B9824D]'
              }`}
            >
              Panadería Dulce
            </button>
          </div>
        </div>

        {/* Product Cards Grid - Inspired by uploaded reference */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-[22px] border border-[#E9C4BC]/60 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image Container with pastel background styling */}
              <div className="relative aspect-[4/3] bg-gradient-to-b from-[#F2D9D3]/40 to-[#FFF9F2] overflow-hidden p-3.5">
                <div className="w-full h-full rounded-[16px] overflow-hidden bg-white shadow-inner relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500 ease-out"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle hover overlay button */}
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="absolute inset-0 bg-[#49352F]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                    aria-label={`Ver detalles de ${product.name}`}
                  >
                    <span className="bg-white/95 text-[#49352F] text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      Ver detalles
                    </span>
                  </button>
                </div>

                {/* Subtle category indicator without pill cliches */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md text-[11px] font-medium text-[#49352F] shadow-xs">
                  {product.categoryLabel}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#49352F] group-hover:text-[#B9824D] transition-colors mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#292321]/75 leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E9C4BC]/40 mt-auto">
                  <div className="flex items-center justify-between gap-3">
                    <button
                      onClick={() => onSelectProduct(product)}
                      className="text-xs font-semibold text-[#49352F] hover:text-[#B9824D] transition-colors flex items-center gap-1 py-1 cursor-pointer"
                    >
                      <span>Conocer más</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#B9824D] group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onDirectWhatsApp(product)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#49352F] hover:bg-[#34241F] text-white text-xs font-medium rounded-full shadow-xs transition-colors cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#D9B58D]" />
                      <span>Consultar</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered CTA below grid */}
        <div className="text-center mt-14 sm:mt-18">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#49352F] hover:text-[#49352F] hover:bg-[#F2D9D3]/40 border border-[#E9C4BC] hover:border-[#B9824D] text-sm font-semibold rounded-full shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group active:scale-98"
          >
            <Utensils className="w-4 h-4 text-[#B9824D]" />
            <span>Quiero conocer el menú</span>
            <ArrowRight className="w-4 h-4 text-[#B9824D] group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-[#292321]/60 mt-3">
            Consultá disponibilidad del día directamente con el negocio
          </p>
        </div>
      </div>
    </section>
  );
};
