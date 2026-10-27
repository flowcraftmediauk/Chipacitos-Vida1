import React from 'react';
import { Coffee, Flame, HeartHandshake } from 'lucide-react';

export const ValueSection: React.FC = () => {
  const cards = [
    {
      icon: Coffee,
      title: 'Un momento para disfrutar',
      description:
        'Hacer una pausa en el día con algo rico transforma cualquier jornada. El aroma inconfundible del queso recién horneado es la mejor invitación a desconectar.',
    },
    {
      icon: HeartHandshake,
      title: 'Sabores que invitan a compartir',
      description:
        'Ideales para llevar a una reunión de amigos, compartir con la familia o sumar a la ronda de mates de la tarde. Un sabor clásico que le gusta a todos.',
    },
    {
      icon: Flame,
      title: 'Tu próximo antojo te espera',
      description:
        'Consultá los productos disponibles con anticipación para asegurar que tu pedido esté listo para retirar en el momento justo y disfrutarlo calentito.',
    },
  ];

  return (
    <section className="py-20 bg-[#FFF9F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#B9824D]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B9824D]">
              La Experiencia
            </span>
            <span className="w-5 h-px bg-[#B9824D]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#49352F] tracking-tight mb-3">
            Pequeños detalles que marcan la diferencia
          </h2>
          <p className="text-sm sm:text-base text-[#292321]/75 leading-relaxed">
            Una propuesta pensada para acercarte productos ricos, prácticos y reconfortantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-[22px] p-8 border border-[#E9C4BC]/60 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F2D9D3]/70 text-[#B9824D] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#49352F] mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#292321]/75 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E9C4BC]/30 flex items-center gap-2 text-xs text-[#B9824D] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B9824D]"></span>
                  <span>Tradición & sabor</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
