import React, { useState } from 'react';
import { MapPin, Navigation, Bus, ShoppingBag, GraduationCap, Stethoscope, Trees, ExternalLink, ArrowRight } from 'lucide-react';
import { NEARBY_POINTS, PROPERTY_INFO } from '../data/propertyData';
import { NearbyPoint } from '../types';

export const LocationSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPoint, setSelectedPoint] = useState<NearbyPoint | null>(NEARBY_POINTS[0]);

  const categories = [
    { id: 'all', label: 'Todos los Puntos' },
    { id: 'transit', label: 'Transporte' },
    { id: 'commercial', label: 'Comercios' },
    { id: 'education', label: 'Educación' },
    { id: 'health', label: 'Salud' },
    { id: 'leisure', label: 'Recreación' },
  ];

  const filteredPoints = activeCategory === 'all'
    ? NEARBY_POINTS
    : NEARBY_POINTS.filter((p) => p.category === activeCategory);

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PROPERTY_INFO.location.address)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="ubicacion" className="py-16 sm:py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-black/10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">
              Entorno Urbano
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-tight">
              Ubicación
            </h2>
          </div>

          <button
            onClick={openGoogleMaps}
            className="px-6 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-stone-800 transition-all shrink-0 cursor-pointer"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Ver en Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
          </button>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-stone-600 border-black/10 hover:border-black/30'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 2-Column: Minimalist Editorial Map + Points Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Map Display */}
          <div className="lg:col-span-7 bg-white p-6 border border-black/10 shadow-sm">
            <div className="relative bg-[#1A1A1A] text-white aspect-16/10 overflow-hidden border border-black">
              {/* Minimal Grid */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #ffffff 1px, transparent 1px),
                    linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />

              <div className="absolute top-1/2 left-0 right-0 h-4 bg-white/10 border-y border-white/20 transform -translate-y-1/2 flex items-center justify-center">
                <span className="text-[9px] font-mono tracking-widest text-stone-300 font-bold uppercase">
                  Avenida Don Bosco (50m)
                </span>
              </div>

              {/* Main Property Pin */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-bold shadow-2xl border-2 border-black">
                  <MapPin className="w-5 h-5 fill-black" />
                </div>
                <div className="mt-2 px-3 py-1 bg-white text-black text-center shadow-lg border border-black/10">
                  <p className="text-[10px] font-bold uppercase tracking-widest">PROPIEDAD</p>
                  <p className="text-[9px] text-stone-500 font-serif italic">Grella 1593</p>
                </div>
              </div>

              {/* Nearby Nodes */}
              {filteredPoints.map((point, index) => {
                const positions = [
                  { top: '22%', left: '26%' },
                  { top: '26%', left: '76%' },
                  { top: '76%', left: '22%' },
                  { top: '78%', left: '72%' },
                  { top: '35%', left: '48%' },
                  { top: '65%', left: '45%' },
                ];
                const pos = positions[index % positions.length];
                const isSelected = selectedPoint?.id === point.id;

                return (
                  <div
                    key={point.id}
                    onClick={() => setSelectedPoint(point)}
                    style={{ top: pos.top, left: pos.left }}
                    className={`absolute z-10 transform -translate-x-1/2 -translate-y-1/2 px-3 py-1 text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white text-black shadow-xl ring-2 ring-white scale-110'
                        : 'bg-stone-900/90 text-stone-300 border border-stone-700 hover:bg-stone-800'
                    }`}
                  >
                    <span>0{index + 1}. {point.name.split(' ')[0]}</span>
                    <span className="font-mono text-[9px] opacity-70 ml-1">({point.time})</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-[#FAF9F6] border border-black/10">
                <p className="text-xs font-serif font-bold text-stone-900">Paso peatonal</p>
                <p className="text-[10px] text-stone-500">Vidriera comercial</p>
              </div>
              <div className="p-3 bg-[#FAF9F6] border border-black/10">
                <p className="text-xs font-serif font-bold text-stone-900">Transporte</p>
                <p className="text-[10px] text-stone-500">Líneas urbanas a 50m</p>
              </div>
              <div className="p-3 bg-[#FAF9F6] border border-black/10">
                <p className="text-xs font-serif font-bold text-stone-900">Comercios</p>
                <p className="text-[10px] text-stone-500">Zona comercial</p>
              </div>
            </div>
          </div>

          {/* Points List */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-1">
              Puntos de Conexión
            </span>

            <div className="space-y-3">
              {filteredPoints.map((point, idx) => {
                const isSelected = selectedPoint?.id === point.id;
                return (
                  <div
                    key={point.id}
                    onClick={() => setSelectedPoint(point)}
                    className={`p-4 bg-white border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-black ring-1 ring-black shadow-md'
                        : 'border-black/10 hover:border-black/30'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-serif font-bold text-stone-400">0{idx + 1}.</span>
                          <h4 className="font-serif text-sm font-bold text-stone-900">{point.name}</h4>
                        </div>
                        <p className="text-xs text-stone-500 font-serif italic mt-0.5">{point.description}</p>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-stone-100 text-stone-800">
                          {point.time}
                        </span>
                        <p className="text-[10px] text-stone-400 font-mono mt-0.5">{point.distance}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
