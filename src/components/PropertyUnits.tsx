import React, { useState } from 'react';
import { Home, Store, Car, Check, ArrowRight, MessageCircle, Eye } from 'lucide-react';
import { PROPERTY_UNITS, PROPERTY_INFO } from '../data/propertyData';

interface PropertyUnitsProps {
  onSelectPhoto: (id: string) => void;
  onOpenVisitModal: () => void;
}

export const PropertyUnits: React.FC<PropertyUnitsProps> = ({ onSelectPhoto, onOpenVisitModal }) => {
  const [activeTab, setActiveTab] = useState<string>(PROPERTY_UNITS[0].id);

  const handleWhatsAppUnit = (unitTitle: string) => {
    const text = encodeURIComponent(`Hola! Me interesa conocer más detalles sobre la unidad "${unitTitle}" de la propiedad (Ref: ${PROPERTY_INFO.referenceCode}). ¿Tienen fotos adicionales o especificaciones?`);
    window.open(`https://wa.me/${PROPERTY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="unidades" className="py-16 sm:py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-black/10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">
              Composición Arquitectónica
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-tight">
              Tres Unidades en un <span className="italic">Mismo Inmueble</span>
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-sans leading-relaxed">
            Distribución estratégica que garantiza total independencia funcional entre la vida familiar y el desarrollo comercial.
          </p>
        </div>

        {/* Editorial Tab Selectors */}
        <div className="flex border-b border-black/10 mb-10 overflow-x-auto">
          {PROPERTY_UNITS.map((unit, idx) => {
            const isActive = activeTab === unit.id;
            return (
              <button
                key={unit.id}
                onClick={() => setActiveTab(unit.id)}
                className={`py-4 px-6 text-xs font-bold uppercase tracking-[0.2em] transition-all whitespace-nowrap cursor-pointer border-b-2 -mb-0.5 ${
                  isActive
                    ? 'border-black text-black'
                    : 'border-transparent text-stone-400 hover:text-stone-700'
                }`}
              >
                0{idx + 1}. {unit.title}
              </button>
            );
          })}
        </div>

        {/* Active Unit Detailed Display */}
        {PROPERTY_UNITS.map((unit) => {
          if (unit.id !== activeTab) return null;

          return (
            <div
              key={unit.id}
              className="bg-white border border-black/10 shadow-sm overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Image Side with Framed Picture */}
                <div className="lg:col-span-7 relative group overflow-hidden bg-[#E5E5E1] min-h-87.5 sm:min-h-110 border-b lg:border-b-0 lg:border-r border-black/10">
                  <img
                    src={unit.imageUrl}
                    alt={unit.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />

                  {/* Floating Editorial Badge */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm p-3.5 shadow-lg border border-black/10">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{unit.badge}</p>
                    <p className="text-sm font-serif italic text-stone-900">{unit.surface}</p>
                  </div>

                  <div className="absolute bottom-6 right-6">
                    <button
                      onClick={() => onSelectPhoto(unit.id === 'unit-house' ? 'img-3' : unit.id === 'unit-commercial' ? 'img-2' : 'img-6')}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-[11px] font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors shadow cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Ver en Galería HD</span>
                    </button>
                  </div>
                </div>

                {/* Text Description Side */}
                <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-2">
                      Ficha de Unidad
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 mb-2">
                      {unit.title}
                    </h3>
                    <p className="font-serif italic text-stone-600 text-sm mb-5">
                      {unit.subtitle}
                    </p>
                    <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6 border-l border-black/20 pl-3">
                      {unit.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        Características Destacadas:
                      </p>
                      <ul className="space-y-2">
                        {unit.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-black mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-black/10 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleWhatsAppUnit(unit.title)}
                      className="flex-1 py-3.5 px-4 bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-95 transition-all shadow-sm cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Consultar Unidad</span>
                    </button>
                    <button
                      onClick={onOpenVisitModal}
                      className="py-3.5 px-5 bg-black text-white font-bold text-xs uppercase tracking-widest hover:bg-stone-800 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Visitar</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* 3 Editorial Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROPERTY_UNITS.map((unit, idx) => (
            <div
              key={unit.id}
              onClick={() => setActiveTab(unit.id)}
              className={`p-6 bg-white border transition-all cursor-pointer ${
                activeTab === unit.id
                  ? 'border-black ring-1 ring-black shadow-md'
                  : 'border-black/10 hover:border-black/30'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-serif text-[#1A1A1A]">0{idx + 1}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{unit.surface}</span>
              </div>
              <h4 className="font-serif text-lg text-stone-900 mb-1">{unit.title}</h4>
              <p className="text-xs text-stone-500 font-serif italic line-clamp-2">{unit.subtitle}</p>
              <div className="mt-4 pt-3 border-t border-black/5 text-[10px] font-bold uppercase tracking-widest text-black flex items-center justify-between">
                <span>Explorar detalles</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
