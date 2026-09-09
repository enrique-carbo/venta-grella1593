import React from 'react';
import { AMENITIES } from '../data/propertyData';

export const AmenitiesGrid: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-black/10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">
              Especificaciones & Garantías
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-tight">
              Calidad Constructiva & <span className="italic">Documentación</span>
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-sans leading-relaxed">
            Inmueble con mantenimiento al día, materiales nobles y documentación en regla para escrituración inmediata.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AMENITIES.map((item, idx) => (
            <div
              key={item.id}
              className="p-8 bg-white border border-black/10 shadow-sm flex flex-col justify-between hover:border-black transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif text-stone-400">0{idx + 1}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Verificado</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-serif italic leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/5 text-[10px] uppercase tracking-widest text-stone-400 font-mono">
                Estado: Conforme a Norma
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
