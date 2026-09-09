import React, { useState } from 'react';
import { Layers, Info, Check, Eye, Store, Home, Car, Sun } from 'lucide-react';
import { FLOOR_PLAN_ZONES, PROPERTY_INFO } from '../data/propertyData';
import { FloorPlanZone } from '../types';

interface InteractiveFloorPlanProps {
  onOpenPhotoModal: (id: string) => void;
  onOpenVisitModal: () => void;
}

export const InteractiveFloorPlan: React.FC<InteractiveFloorPlanProps> = ({
  onOpenVisitModal,
}) => {
  const [selectedZone, setSelectedZone] = useState<FloorPlanZone>(FLOOR_PLAN_ZONES[0]);

  // Función para obtener el color según la categoría
  const getCategoryColor = (category: string) => {
    const colors = {
      local: 'bg-blue-500/20 border-blue-500/30 hover:border-blue-500',
      cochera: 'bg-amber-500/20 border-amber-500/30 hover:border-amber-500',
      casa: 'bg-emerald-500/20 border-emerald-500/30 hover:border-emerald-500',
      patio: 'bg-purple-500/20 border-purple-500/30 hover:border-purple-500',
    };
    return colors[category as keyof typeof colors] || 'bg-stone-500/20 border-stone-500/30';
  };

  // Función para obtener el icono según la categoría
  const getCategoryIcon = (category: string) => {
    const icons = {
      local: Store,
      cochera: Car,
      casa: Home,
      patio: Sun,
    };
    return icons[category as keyof typeof icons] || Home;
  };

  return (
    <section id="plano" className="py-16 sm:py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-black/10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">
              Arquitectura & Distribución
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-tight">
              Esquema de Ambientes & <span className="italic">Metrajes</span>
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-sans leading-relaxed">
            Explorá cada sector: 170 m² cubiertos diseñados con ventilación cruzada y total independencia comercial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Architectural Layout Map Container */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 border border-black/10 shadow-sm">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-black/10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-500">
                Frente a la Calle (Doble Acceso)
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-black">
                Total: 199 m² / Cubiertos: 170 m²
              </span>
            </div>

            {/* Blueprint Grid Container - Versión mejorada con posicionamiento dinámico */}
            <div className="relative bg-[#1A1A1A] text-white p-6 aspect-16/11 border border-black select-none overflow-hidden">
              {/* Subtle Grid Lines */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Fondo con degradado sutil para simular terreno */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-linear-to-br from-white/5 to-transparent" />
              </div>

              {/* Mapa de zonas posicionado dinámicamente */}
              <div className="relative w-full h-full">
                {FLOOR_PLAN_ZONES.map((zone) => {
                  const Icon = getCategoryIcon(zone.category);
                  const isSelected = selectedZone.id === zone.id;

                  // Calcular posición en porcentaje
                  const left = zone.xPercent || 0;
                  const top = zone.yPercent || 0;

                  // Determinar tamaño según área (aproximado)
                  const getSize = (area: string) => {
                    const numArea = parseInt(area);
                    if (numArea >= 50) return 'w-32 h-24';
                    if (numArea >= 30) return 'w-28 h-20';
                    if (numArea >= 20) return 'w-24 h-16';
                    return 'w-20 h-14';
                  };

                  return (
                    <div
                      key={zone.id}
                      onClick={() => setSelectedZone(zone)}
                      className={`absolute transition-all duration-300 cursor-pointer p-2 border-2 rounded-lg backdrop-blur-sm
                        ${isSelected
                          ? 'border-white bg-white/20 shadow-2xl scale-105 z-20'
                          : `border-white/20 bg-black/30 hover:bg-white/10 hover:border-white/40 z-10`
                        }
                        ${getCategoryColor(zone.category)}
                      `}
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        transform: 'translate(-50%, -50%)',
                        width: 'auto',
                        minWidth: '80px',
                        maxWidth: '140px',
                      }}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Icon className={`w-3 h-3 ${isSelected ? 'text-white' : 'text-white/60'}`} />
                        <span className="text-[8px] font-bold uppercase tracking-wider text-white/80">
                          {zone.category === 'local' ? 'Local' :
                           zone.category === 'cochera' ? 'Cochera' :
                           zone.category === 'patio' ? 'Patio' : 'Casa'}
                        </span>
                      </div>
                      <p className={`text-[10px] font-bold leading-tight ${isSelected ? 'text-white' : 'text-white/80'}`}>
                        {zone.name.split(' ').slice(0, 3).join(' ')}
                      </p>
                      <p className="text-[8px] text-white/60 font-mono mt-0.5">
                        {zone.area}
                      </p>
                      {isSelected && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full animate-pulse" />
                      )}
                    </div>
                  );
                })}

                {/* Indicador de calle */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-linear-to-t from-amber-500/20 to-transparent flex items-end justify-center">
                  <span className="text-[8px] uppercase tracking-[0.3em] text-amber-400/60 font-bold pb-1">
                    Calle Espora al 590
                  </span>
                </div>
              </div>
            </div>

            <p className="text-center text-[11px] uppercase tracking-widest text-stone-400 mt-4">
              Hacé clic en cualquier ambiente para ver sus medidas y fotografía
            </p>
          </div>

          {/* Detailed Inspector Card */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 border border-black/10 shadow-sm flex flex-col justify-between min-h-110">
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 pb-3 border-b border-black/10">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                  Ambiente Seleccionado
                </span>
                <span className="text-base font-serif font-bold text-black">
                  {selectedZone.area}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 mb-1">
                {selectedZone.name}
              </h3>
              <p className="text-xs font-mono text-stone-400 font-semibold mb-4">
                Medidas: {selectedZone.dimensions}
              </p>

              {/* Categoría con badge */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded
                  ${selectedZone.category === 'local' ? 'bg-blue-100 text-blue-700' :
                    selectedZone.category === 'cochera' ? 'bg-amber-100 text-amber-700' :
                    selectedZone.category === 'patio' ? 'bg-purple-100 text-purple-700' :
                    'bg-emerald-100 text-emerald-700'}`}
                >
                  {selectedZone.category === 'local' ? 'Comercial' :
                   selectedZone.category === 'cochera' ? 'Cochera' :
                   selectedZone.category === 'patio' ? 'Exterior' : 'Residencial'}
                </span>
                <span className="text-[9px] text-stone-400 font-mono">
                  #{selectedZone.id.split('-')[1]}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 font-serif italic leading-relaxed mb-6 border-l border-black/20 pl-3">
                {selectedZone.details}
              </p>

              {selectedZone.image && (
                <div className="relative aspect-video mb-6 border border-black/10 bg-[#E5E5E1] overflow-hidden group">
                  <img
                    src={selectedZone.image}
                    alt={selectedZone.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/80 backdrop-blur-sm px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white/90">
                    Foto Real
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
