import React from 'react';
import { MessageCircle, Calendar, FileText, Check, ArrowRight, Eye } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';
import facadeImg from '../assets/images/Grella1593.jpg';
import commercialImg from '../assets/images/LocalComercial.jpg';
import livingImg from '../assets/images/living-amplio.jpg';

interface HeroProps {
  onOpenVisitModal: () => void;
  onOpenDossierModal: () => void;
  onSelectPhoto: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenVisitModal, onOpenDossierModal, onSelectPhoto }) => {
  const handleWhatsApp = (topic: string) => {
    const text = encodeURIComponent(`Hola! Estoy interesado en la propiedad (Casa 2 Dorm + Cochera + Local Comercial, Ref: ${PROPERTY_INFO.referenceCode}). Motivo de consulta: ${topic}. ¿Podrían brindarme información detallada?`);
    window.open(`https://wa.me/${PROPERTY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section className="bg-[#FAF9F6] text-[#1A1A1A] border-b border-black/10 pt-8 pb-16 lg:pt-12 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Editorial Eyebrow */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-black/10 text-[11px] uppercase tracking-[0.2em] font-semibold text-stone-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Propiedad en Venta • Oportunidad</span>
          </div>
          <div>Ubicación Comercial & Residencial</div>
          <div className="hidden sm:block">Ref. {PROPERTY_INFO.referenceCode}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Editorial Large Typography & Core Story */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">
                Arquitectura & Inversión
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-[#1A1A1A]">
                Oportunidad <br />
                <span className="italic">Residencial</span> <br />
                & Comercial
              </h1>
            </div>

            <div className="border-l-2 border-black pl-5 py-1.5 space-y-2">
              <p className="text-stone-700 leading-relaxed font-serif italic text-lg">
                &ldquo;Una propiedad integral que combina el confort de una vivienda familiar de 2 dormitorios, cochera techada y el potencial de un local comercial propio a la calle.&rdquo;
              </p>
              <p className="text-xs text-stone-500 font-sans tracking-wide">
                Ideal para familias que buscan vivir y tener su propio negocio sin pagar alquiler, o inversores que buscan doble renta asegurada.
              </p>
            </div>

            {/* Editorial Feature Specs Grid */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-4 border border-black/10 flex flex-col justify-center items-center text-center shadow-sm">
                <span className="text-2xl sm:text-3xl font-serif text-[#1A1A1A]">02</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mt-1">Dormitorios</span>
              </div>

              <div className="bg-white p-4 border border-black/10 flex flex-col justify-center items-center text-center shadow-sm">
                <span className="text-2xl sm:text-3xl font-serif text-[#1A1A1A]">50<span className="text-sm font-sans">m²</span></span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mt-1">Local Comercial</span>
                <span className="text-[10px] text-stone-500 font-serif italic">Vidriera a la calle</span>
              </div>

              <div className="bg-white p-4 border border-black/10 flex flex-col justify-center items-center text-center shadow-sm">
                <span className="text-2xl sm:text-3xl font-serif text-[#1A1A1A]">01</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold mt-1">Cochera Cubierta</span>
                <span className="text-[10px] text-stone-500 font-serif italic">Portón plegable</span>
              </div>
            </div>

            {/* Action Buttons in Editorial Theme */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => handleWhatsApp('Quiero consultar precio y coordinar una visita')}
                className="flex-1 bg-[#25D366] text-white py-4 px-6 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-95 transition-all shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Directo</span>
              </button>

              <button
                onClick={onOpenVisitModal}
                className="flex-1 bg-black text-white py-4 px-6 text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Visita</span>
              </button>

              <button
                onClick={onOpenDossierModal}
                className="py-4 px-5 border border-black/20 hover:border-black text-stone-800 hover:text-black text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-stone-500" />
                <span>Dossier</span>
              </button>
            </div>

            <div className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-stone-400 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Respuesta en horario comercial • Visitas de Lunes a Viernes</span>
            </div>
          </div>

          {/* Right Column: Editorial Framed Picture with Caption Box */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative bg-[#E5E5E1] border border-black/10 group overflow-hidden">
              <div
                className="aspect-4/3 w-full overflow-hidden cursor-pointer relative"
                onClick={() => onSelectPhoto('img-1')}
              >
                <img
                  src={facadeImg}
                  alt="Fachada de la propiedad con local y vivienda"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Floating White Editorial Caption Box */}
                <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white p-5 shadow-2xl border border-black/10 max-w-sm">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 mb-1">
                    Fachada Principal & Entorno
                  </p>
                  <p className="text-sm font-serif italic text-stone-800 leading-snug mb-2">
                    Acceso independiente para la casa residencial y frente vidriado para el local comercial.
                  </p>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-black flex items-center gap-1">
                    <span>Ver galería completa</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* 2 Sub-images strip */}
            <div className="grid grid-cols-2 gap-4">
              <div
                onClick={() => onSelectPhoto('img-2')}
                className="relative bg-white border border-black/10 p-3 group cursor-pointer hover:border-black transition-colors"
              >
                <div className="aspect-4/3 overflow-hidden bg-stone-100 mb-2">
                  <img
                    src={commercialImg}
                    alt="Local comercial"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Comercio</p>
                <p className="text-xs font-serif font-bold text-stone-900">Local con Vidriera (50 m²)</p>
              </div>

              <div
                onClick={() => onSelectPhoto('img-3')}
                className="relative bg-white border border-black/10 p-3 group cursor-pointer hover:border-black transition-colors"
              >
                <div className="aspect-4/3 overflow-hidden bg-stone-100 mb-2">
                  <img
                    src={livingImg}
                    alt="Living de la casa"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Vivienda</p>
                <p className="text-xs font-serif font-bold text-stone-900">Living Comedor Luminoso</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Metrics Band */}
        <div className="mt-14 pt-8 border-t border-black/10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 border border-black/10 text-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] block">199<span className="text-xs font-sans">m²</span></span>
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Superficie Total</span>
          </div>

          <div className="bg-white p-4 border border-black/10 text-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] block">170<span className="text-xs font-sans">m²</span></span>
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Metros Cubiertos</span>
          </div>

          <div className="bg-white p-4 border border-black/10 text-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] block">02</span>
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Dormitorios</span>
          </div>

          <div className="bg-white p-4 border border-black/10 text-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] block">01</span>
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Local Comercial</span>
          </div>

          <div className="bg-white p-4 border border-black/10 text-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] block">01</span>
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Cochera Cubierta</span>
          </div>

          <div className="bg-white p-4 border border-black/10 text-center">
            <span className="text-2xl sm:text-3xl font-serif text-[#1A1A1A] block">20<span className="text-xs font-sans">m²</span></span>
            <span className="text-[10px] uppercase tracking-widest text-stone-400 font-semibold">Patio con Asador</span>
          </div>
        </div>
      </div>
    </section>
  );
};
