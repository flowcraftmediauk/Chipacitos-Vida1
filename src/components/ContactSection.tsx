import React, { useState } from 'react';
import { MessageCircle, MapPin, Check, Send, Sparkles, Copy, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, PRODUCTS } from '../data/products';

interface ContactSectionProps {
  customPhone: string;
  onOpenPhoneConfig: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  customPhone,
  onOpenPhoneConfig,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(['Chipacitos Clásicos Tradicionales']);
  const [preferredTime, setPreferredTime] = useState('Hoy por la tarde');
  const [customerName, setCustomerName] = useState('');
  const [copied, setCopied] = useState(false);

  const toggleItem = (name: string) => {
    if (selectedItems.includes(name)) {
      if (selectedItems.length > 1) {
        setSelectedItems(selectedItems.filter((i) => i !== name));
      }
    } else {
      setSelectedItems([...selectedItems, name]);
    }
  };

  const formattedMessage = `¡Hola Chipacitos Vida! ${customerName.trim() ? `Soy ${customerName.trim()}. ` : ''}Quisiera consultar la disponibilidad de: ${selectedItems.join(', ')}. Horario estimado de consulta: ${preferredTime}. ¿Tienen stock calentito? ¡Muchas gracias!`;

  const handleSendWhatsApp = () => {
    if (customPhone.trim()) {
      const clean = customPhone.replace(/[^0-9]/g, '');
      const url = `https://wa.me/${clean}?text=${encodeURIComponent(formattedMessage)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-[#F2D9D3] relative overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E9C4BC]/60 rounded-full blur-2xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[28px] shadow-xl border border-[#E9C4BC] p-8 sm:p-12 lg:p-14 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-5 h-px bg-[#B9824D]"></span>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B9824D]">
              Hacé tu consulta directa
            </span>
            <span className="w-5 h-px bg-[#B9824D]"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#49352F] tracking-tight mb-4 [text-wrap:balance]">
            ¿Se te antojó algo rico?
          </h2>

          <p className="text-base sm:text-lg text-[#292321]/75 max-w-xl mx-auto mb-8 leading-relaxed">
            Escribinos para consultar los productos disponibles y encontrar tu próximo favorito.
          </p>

          {/* Interactive Order & Inquiry Composer */}
          <div className="bg-[#FFF9F2] rounded-2xl p-6 border border-[#E9C4BC]/60 text-left mb-8 max-w-2xl mx-auto">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#49352F] mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#B9824D]" />
              Seleccioná qué productos te gustaría consultar:
            </h3>

            {/* Checklist of bakery items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-5">
              {PRODUCTS.map((prod) => {
                const isSelected = selectedItems.includes(prod.name);
                return (
                  <button
                    key={prod.id}
                    type="button"
                    onClick={() => toggleItem(prod.name)}
                    className={`flex items-center gap-2 px-3 py-2 text-xs rounded-xl border text-left transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-white border-[#B9824D] text-[#49352F] font-semibold shadow-xs'
                        : 'bg-[#FFF9F2] border-[#E9C4BC]/60 text-[#49352F]/70 hover:bg-white'
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded-md flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-[#B9824D] border-[#B9824D] text-white'
                          : 'border-[#E9C4BC]'
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3" />}
                    </div>
                    <span className="truncate">{prod.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Optional Name & Time */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-[11px] font-medium text-[#49352F] block mb-1">
                  Tu nombre (opcional):
                </label>
                <input
                  type="text"
                  placeholder="Ej: Sofía"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-[#E9C4BC] bg-white text-[#292321] focus:outline-none focus:border-[#B9824D]"
                />
              </div>

              <div>
                <label className="text-[11px] font-medium text-[#49352F] block mb-1">
                  Horario estimado para retirar:
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-xl border border-[#E9C4BC] bg-white text-[#292321] focus:outline-none focus:border-[#B9824D] cursor-pointer"
                >
                  <option value="Hoy por la mañana">Hoy por la mañana</option>
                  <option value="Hoy por la tarde (hora del mate)">Hoy por la tarde (hora del mate)</option>
                  <option value="Mañana a primera hora">Mañana a primera hora</option>
                  <option value="Para el fin de semana">Para el fin de semana</option>
                </select>
              </div>
            </div>

            {/* Prepared Message Preview */}
            <div className="bg-white p-3.5 rounded-xl border border-[#E9C4BC]/50">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#B9824D]">
                  Mensaje listo para enviar:
                </span>
                <span className="text-[10px] text-[#292321]/50">Formato WhatsApp Argentina</span>
              </div>
              <p className="text-xs text-[#49352F] italic leading-relaxed">
                "{formattedMessage}"
              </p>
            </div>
          </div>

          {/* Primary and Secondary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleSendWhatsApp}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#49352F] hover:bg-[#34241F] text-white text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer active:scale-98"
            >
              <MessageCircle className="w-4 h-4 text-[#D9B58D]" />
              <span>{copied ? '¡Mensaje Copiado al Portapapeles!' : 'Consultar por WhatsApp'}</span>
            </button>

            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-white text-[#49352F] hover:bg-[#F2D9D3]/40 border border-[#E9C4BC] hover:border-[#B9824D] text-sm font-semibold rounded-full shadow-xs hover:shadow transition-all duration-200 cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#B9824D]" />
              <span>Ver ubicación en Google Maps</span>
            </a>
          </div>

          {/* Phone status & proposal test notice */}
          <div className="mt-6 pt-4 border-t border-[#E9C4BC]/40 flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#292321]/65">
            {customPhone ? (
              <span className="inline-flex items-center gap-1.5 text-emerald-700 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Número configurado: +{customPhone} (Listo para abrir WhatsApp)
              </span>
            ) : (
              <span>
                ¿Querés probar con tu número?{' '}
                <button
                  type="button"
                  onClick={onOpenPhoneConfig}
                  className="text-[#B9824D] font-semibold underline underline-offset-2 hover:text-[#49352F] cursor-pointer"
                >
                  Configurarlo arriba en el panel de cliente
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
