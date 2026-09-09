import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hola! Quisiera más información sobre la propiedad (Ref: ${PROPERTY_INFO.referenceCode}).`);
    window.open(`https://wa.me/${PROPERTY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <footer className="bg-[#FAF9F6] text-[#1A1A1A] text-xs border-t border-black/10 pb-24 md:pb-12 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Col 1: Property Identity */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex flex-col">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-400 leading-tight">
                Venta de Inmueble Mixto
              </span>
              <span className="font-serif text-2xl font-bold text-stone-900 mt-1">
                Casa 2 Dormitorios + Cochera + Local Comercial
              </span>
            </div>
            <p className="text-stone-600 text-xs sm:text-sm font-serif italic leading-relaxed max-w-md">
              Una oportunidad inmobiliaria integral que combina el confort habitacional con un local comercial de 50 m² con vidriera a la calle y cochera cubierta en ubicación estratégica.
            </p>
            <p className="font-mono text-[11px] text-stone-500">
              Código de Referencia: {PROPERTY_INFO.referenceCode} • Títulos y Planos Aprobados
            </p>
          </div>

          {/* Col 2: Navigation Anchors */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-stone-400 uppercase tracking-widest text-[10px] mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-700">
              <li><a href="#unidades" className="hover:text-black transition-colors">01. Composición de Unidades</a></li>
              <li><a href="#galeria" className="hover:text-black transition-colors">02. Galería Fotográfica HD</a></li>
              <li><a href="#plano" className="hover:text-black transition-colors">03. Plano Arquitectónico</a></li>
              <li><a href="#ubicacion" className="hover:text-black transition-colors">04. Ubicación Estratégica</a></li>
              <li><a href="#inversion" className="hover:text-black transition-colors">05. Simulador de Renta</a></li>
              <li><a href="#faq" className="hover:text-black transition-colors">06. Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-3">
            <h4 className="font-bold text-stone-400 uppercase tracking-widest text-[10px] mb-4">
              Contacto Directo
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-700">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-black" />
                <a href={`tel:${PROPERTY_INFO.contact.whatsappNumber}`} className="font-mono hover:underline">
                  {PROPERTY_INFO.contact.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <button onClick={handleWhatsApp} className="hover:underline text-left cursor-pointer font-semibold">
                  WhatsApp Directo
                </button>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-black" />
                <a href={`mailto:${PROPERTY_INFO.contact.email}`} className="font-mono hover:underline">
                  {PROPERTY_INFO.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-1 text-[11px] text-stone-500 font-serif italic">
                <MapPin className="w-3.5 h-3.5 text-black mt-0.5 shrink-0" />
                <span>{PROPERTY_INFO.location.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Editorial Minimal Bottom Bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-stone-500">
          <div>
            <span>Referencia: {PROPERTY_INFO.referenceCode} • Propiedad en Venta • Inversión Asegurada</span>
          </div>

          <div className="flex items-center gap-4">
            <span>© {new Date().getFullYear()} {PROPERTY_INFO.contact.realEstateAgent}</span>
            <button
              onClick={scrollToTop}
              className="p-2 border border-black/20 hover:border-black text-black transition-colors cursor-pointer"
              title="Volver arriba"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
