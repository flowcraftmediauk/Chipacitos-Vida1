import React, { useState } from 'react';
import { Eye, X, ZoomIn } from 'lucide-react';

export const FoodGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string;
    title: string;
    caption: string;
    alt: string;
  } | null>(null);

  const galleryItems = [
    {
      src: '/src/assets/images/product_chipa_relleno_1793084497800.jpg',
      title: 'Corazón Fundido',
      caption: 'Chipá partido al medio revelando el queso caliente y fundente.',
      alt: 'Chipá artesanal caliente abierto al medio con queso mozzarella fundido',
      colSpan: 'sm:col-span-2 lg:col-span-2',
      rowSpan: 'sm:row-span-2',
      height: 'h-80 sm:h-full min-h-[300px]',
    },
    {
      src: '/src/assets/images/hero_chipacitos_platter_1793084496201.jpg',
      title: 'Plato Recién Horneado',
      caption: 'Bandeja de chipacitos humeantes con costra dorada.',
      alt: 'Bandeja de chipacitos recién horneados humeantes sobre vajilla blanca',
      colSpan: 'sm:col-span-1 lg:col-span-1',
      rowSpan: 'sm:row-span-1',
      height: 'h-64 sm:h-64',
    },
    {
      src: '/src/assets/images/product_medialunas_pastry_1793084498778.jpg',
      title: 'Hojaldre y Dulzor',
      caption: 'Medialunas de manteca brillantes con sutil almíbar.',
      alt: 'Medialunas caseras de manteca con brillo de almíbar recién salidas',
      colSpan: 'sm:col-span-1 lg:col-span-1',
      rowSpan: 'sm:row-span-1',
      height: 'h-64 sm:h-64',
    },
    {
      src: '/src/assets/images/product_pasteleria_alfajores_1793084556077.jpg',
      title: 'Dulzura Tradicional',
      caption: 'Alfajorcitos de maicena caseros con coco rallado y dulce de leche.',
      alt: 'Alfajores de maicena rellenos de abundante dulce de leche con coco rallado',
      colSpan: 'sm:col-span-1 lg:col-span-1',
      rowSpan: 'sm:row-span-1',
      height: 'h-64 sm:h-64',
    },
    {
      src: '/src/assets/images/chipa_herbs_close_up_1793084531522.jpg',
      title: 'Corteza y Textura',
      caption: 'Textura macro de la masa dorada y hierbas serranas.',
      alt: 'Primer plano de chipacito con costra crocante gratinada con orégano y queso',
      colSpan: 'sm:col-span-2 lg:col-span-2',
      rowSpan: 'sm:row-span-1',
      height: 'h-64 sm:h-64',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#FFF9F2] via-[#F8E7E2]/60 to-[#FFF9F2] border-y border-[#E9C4BC]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#B9824D]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B9824D]">
              Experiencia Visual
            </span>
            <span className="w-5 h-px bg-[#B9824D]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#49352F] tracking-tight mb-3">
            Texturas que despiertan los sentidos
          </h2>
          <p className="text-sm sm:text-base text-[#292321]/75 leading-relaxed">
            Cada bocado combina el dorado perfecto por fuera y la suavidad del queso por dentro.
          </p>
        </div>

        {/* Editorial Photo Mosaic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[250px]">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedPhoto(item)}
              className={`group relative rounded-[20px] overflow-hidden bg-white shadow-sm hover:shadow-lg border border-[#E9C4BC]/70 cursor-pointer ${item.colSpan} ${item.rowSpan}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#49352F]/70 via-[#49352F]/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-[#49352F] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-4 h-4" />
              </div>

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm font-serif font-bold text-white drop-shadow-xs">
                  {item.title}
                </p>
                <p className="text-xs text-[#FFF9F2]/85 line-clamp-1">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-0" onClick={() => setSelectedPhoto(null)}></div>
          <div className="relative max-w-3xl w-full bg-[#49352F] rounded-[24px] overflow-hidden shadow-2xl z-10 border border-[#D9B58D]/30">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Cerrar foto"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[4/3] w-full bg-black">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-5 text-center bg-[#382823]">
              <h3 className="font-serif text-lg font-bold text-[#FFF9F2] mb-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-[#FFF9F2]/80">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
