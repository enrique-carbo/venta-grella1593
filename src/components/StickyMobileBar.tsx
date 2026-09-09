import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface StickyMobileBarProps {
  onOpenVisitModal: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenVisitModal }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hola! Quiero consultar por la propiedad con Casa 2 Dorm + Cochera + Local Comercial (Ref: ${PROPERTY_INFO.referenceCode}).`);
    window.open(`https://wa.me/${PROPERTY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FAF9F6]/95 backdrop-blur-md border-t border-black/10 p-3 shadow-2xl safe-area-inset-bottom">
      <div className="flex items-center gap-2 max-w-lg mx-auto">
        <button
          onClick={onOpenVisitModal}
          className="flex-1 py-3 px-3 bg-black text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Agendar Visita</span>
        </button>

        <button
          onClick={handleWhatsApp}
          className="flex-1 py-3 px-3 bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 shadow-sm active:scale-95 transition-all cursor-pointer"
        >
          <MessageCircle className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp</span>
        </button>
      </div>
    </div>
  );
};
