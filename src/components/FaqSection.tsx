import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/products';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-24 bg-[#FFF9F2] border-t border-[#E9C4BC]/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-5 h-px bg-[#B9824D]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B9824D]">
              Respuestas Claras
            </span>
            <span className="w-5 h-px bg-[#B9824D]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#49352F] tracking-tight mb-3">
            Preguntas frecuentes
          </h2>
          <p className="text-sm sm:text-base text-[#292321]/75 leading-relaxed">
            Todo lo que necesitás saber antes de consultar y disfrutar nuestros panificados.
          </p>
        </div>

        {/* Accordion container */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-[20px] border border-[#E9C4BC]/60 shadow-xs transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B9824D]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-serif font-semibold text-[#49352F]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FFF9F2] text-[#49352F] flex items-center justify-center shrink-0 transition-transform duration-200 border border-[#E9C4BC]/50 ${
                      isOpen ? 'rotate-180 bg-[#F2D9D3]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#B9824D]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#292321]/80 leading-relaxed border-t border-[#E9C4BC]/30">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
