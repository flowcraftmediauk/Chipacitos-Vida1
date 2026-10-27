import React, { useState } from 'react';
import { Product } from '../types';
import { X, MessageCircle, Check, Coffee, Package, Sparkles } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  customPhone: string;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  customPhone,
}) => {
  const [selectedQuantity, setSelectedQuantity] = useState('1 Docena');
  const [note, setNote] = useState('');
  const [copiedState, setCopiedState] = useState(false);

  if (!product) return null;

  const quantities = ['1/2 Docena', '1 Docena', '2 Docenas', 'Bandeja Especial'];

  const generatedMessage = `¡Hola Chipacitos Vida! Quisiera consultar por ${product.name} (Cantidad sugerida: ${selectedQuantity}). ${note ? `Nota: "${note}".` : ''} ¿Tienen disponibilidad hoy? ¡Muchas gracias!`;

  const handleWhatsAppClick = () => {
    if (customPhone.trim()) {
      const cleanPhone = customPhone.replace(/[^0-9]/g, '');
      const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(generatedMessage)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      // If phone is not yet configured, copy to clipboard and notify visitor
      navigator.clipboard.writeText(generatedMessage);
      setCopiedState(true);
      setTimeout(() => setCopiedState(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      {/* Backdrop click to close */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal Dialog */}
      <div className="relative bg-white w-full max-w-2xl rounded-[24px] shadow-2xl border border-[#E9C4BC] overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Header bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E9C4BC]/40 bg-[#FFF9F2]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B9824D]"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B9824D]">
              {product.categoryLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#F2D9D3]/60 text-[#49352F] transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Image & Main Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            <div className="rounded-[18px] overflow-hidden bg-[#F2D9D3]/30 border border-[#E9C4BC]/50 aspect-[4/3]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-serif font-bold text-[#49352F] leading-tight">
                {product.name}
              </h3>
              <p className="text-sm text-[#292321]/80 leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Suggested Pairing */}
              <div className="flex items-center gap-2 text-xs text-[#49352F] bg-[#FFF9F2] p-2.5 rounded-xl border border-[#E9C4BC]/50">
                <Coffee className="w-4 h-4 text-[#B9824D] shrink-0" />
                <span>{product.suggestedPairing}</span>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#49352F]/70 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B9824D]" />
              Características destacadas
            </h4>
            <div className="flex flex-wrap gap-2">
              {product.features.map((feature) => (
                <span
                  key={feature}
                  className="text-xs px-3 py-1 rounded-full bg-[#F2D9D3]/50 text-[#49352F] border border-[#E9C4BC]/60 flex items-center gap-1"
                >
                  <Check className="w-3 h-3 text-[#B9824D]" />
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Quantity selector for ordering */}
          <div className="space-y-2 pt-2 border-t border-[#E9C4BC]/40">
            <label className="text-xs font-semibold text-[#49352F] flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-[#B9824D]" />
              Elegí la cantidad para consultar:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {quantities.map((qty) => (
                <button
                  key={qty}
                  type="button"
                  onClick={() => setSelectedQuantity(qty)}
                  className={`py-2 px-3 text-xs font-medium rounded-xl border transition-all cursor-pointer ${
                    selectedQuantity === qty
                      ? 'bg-[#49352F] text-white border-[#49352F] shadow-xs'
                      : 'bg-white text-[#49352F] border-[#E9C4BC] hover:border-[#B9824D]'
                  }`}
                >
                  {qty}
                </button>
              ))}
            </div>
          </div>

          {/* Optional notes */}
          <div>
            <label className="text-xs font-medium text-[#49352F] block mb-1">
              ¿Alguna preferencia o consulta especial? (Opcional)
            </label>
            <input
              type="text"
              placeholder="Ej: Si están recién horneados, pasar a retirar a las 17 hs."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-[#E9C4BC] bg-[#FFF9F2] focus:outline-none focus:ring-1 focus:ring-[#B9824D] text-[#292321]"
            />
          </div>

          {/* WhatsApp message preview box */}
          <div className="bg-[#FFF9F2] p-3 rounded-xl border border-[#E9C4BC]/60 text-[11px] text-[#49352F]/90">
            <p className="font-semibold mb-1 text-[#49352F]">Mensaje preparado para enviar:</p>
            <p className="italic bg-white p-2 rounded-lg border border-[#E9C4BC]/40">
              "{generatedMessage}"
            </p>
          </div>
        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 bg-[#FFF9F2] border-t border-[#E9C4BC]/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#292321]/60 text-center sm:text-left">
            {customPhone ? 'Envío directo por WhatsApp' : 'Podés configurar el número oficial en el panel superior'}
          </p>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-[#49352F] hover:bg-[#F2D9D3]/40 rounded-full transition-colors cursor-pointer flex-1 sm:flex-none"
            >
              Cerrar
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="px-6 py-2.5 bg-[#49352F] hover:bg-[#34241F] text-white text-xs font-semibold rounded-full shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer flex-1 sm:flex-none"
            >
              <MessageCircle className="w-4 h-4 text-[#D9B58D]" />
              <span>{copiedState ? '¡Mensaje Copiado!' : 'Consultar por WhatsApp'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
