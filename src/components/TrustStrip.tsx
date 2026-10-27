import React from 'react';
import { Heart, Users, Sparkles, MapPin } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const benefits = [
    {
      icon: Users,
      title: 'Sabor para compartir',
      description: 'El clásico infaltable para acompañar el mate o la merienda',
    },
    {
      icon: Heart,
      title: 'Momentos especiales',
      description: 'Elaborados con dedicación para disfrutar en cada pausa',
    },
    {
      icon: Sparkles,
      title: 'Una propuesta para disfrutar',
      description: 'Pequeños bocados horneados con irresistible aroma a queso',
    },
    {
      icon: MapPin,
      title: 'Cerca de vos',
      description: 'En San Salvador de Jujuy, listos para tu retiro del día',
    },
  ];

  return (
    <section className="bg-[#FFF9F2] border-b border-[#E9C4BC]/40 py-7 lg:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#E9C4BC]/40">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex flex-col items-center text-center ${
                  idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#F2D9D3]/70 text-[#B9824D] flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-semibold text-[#49352F] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#292321]/70 leading-normal max-w-[200px]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
