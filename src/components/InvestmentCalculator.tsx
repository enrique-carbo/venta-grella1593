import React, { useState } from 'react';
import { PROPERTY_INFO } from '../data/propertyData';

interface InvestmentCalculatorProps {
  onOpenVisitModal: () => void;
}

export const InvestmentCalculator: React.FC<InvestmentCalculatorProps> = ({ onOpenVisitModal }) => {
  const [houseRent, setHouseRent] = useState<number>(650000);
  const [localRent, setLocalRent] = useState<number>(500000);
  const [selectedScenario, setSelectedScenario] = useState<'both' | 'live_house' | 'live_local'>('both');

  // Cálculo de ingresos según escenario
  const totalMonthlyUSD =
    selectedScenario === 'both'
      ? houseRent + localRent
      : selectedScenario === 'live_house'
      ? localRent
      : 0; // Escenario 3: Cero alquileres

  const totalAnnualUSD = totalMonthlyUSD * 12;

  // Texto del ahorro para el escenario 3
  const getSavingsText = () => {
    if (selectedScenario === 'live_local') {
      return 'Cero Alquileres';
    }
    return `PESOS $${totalMonthlyUSD.toLocaleString()}`;
  };

  // Texto del subtítulo
  const getSubtitleText = () => {
    if (selectedScenario === 'live_local') {
      return `Ahorro anual: PESOS ${(houseRent + localRent * 12).toLocaleString()}`;
    }
    return `PESOS $${totalAnnualUSD.toLocaleString()} al año`;
  };

  const handleWhatsAppQuote = () => {
    const scenarioName =
      selectedScenario === 'both'
        ? 'Doble Renta (Alquilar Casa + Local)'
        : selectedScenario === 'live_house'
        ? 'Vivir en la Casa y Alquilar el Local'
        : 'Vivir en la Casa y Trabajar en mi Local Propio';
    // Lógica de WhatsApp aquí
  };

  return (
    <section id="inversion" className="py-16 sm:py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-black/10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">
              Rendimiento Financiero
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-tight">
              Simulador de <span className="italic">Renta & Inversión</span>
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-sans leading-relaxed">
            Un activo inmobiliario con doble unidad generadora de ingresos independientes para maximizar tu retorno de capital.
          </p>
        </div>

        {/* 3 Scenario Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Scenario 1 */}
          <div
            onClick={() => setSelectedScenario('both')}
            className={`p-6 bg-white border transition-all cursor-pointer ${
              selectedScenario === 'both'
                ? 'border-black ring-1 ring-black shadow-lg'
                : 'border-black/10 hover:border-black/30'
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-1">
              Escenario Inversor 01
            </span>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
              Doble Renta Integral
            </h3>
            <p className="text-xs text-stone-500 font-serif italic mb-4">
              Alquilar la casa residencial + el local comercial de forma separada.
            </p>
            <div className="pt-3 border-t border-black/10 flex justify-between items-baseline">
              <span className="text-xs text-stone-600">Renta Estimada</span>
              <span className="text-lg font-serif font-bold text-black">
                Pesos ${houseRent + localRent}/mes
              </span>
            </div>
          </div>

          {/* Scenario 2 */}
          <div
            onClick={() => setSelectedScenario('live_house')}
            className={`p-6 bg-white border transition-all cursor-pointer ${
              selectedScenario === 'live_house'
                ? 'border-black ring-1 ring-black shadow-lg'
                : 'border-black/10 hover:border-black/30'
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-1">
              Escenario Mixto 02
            </span>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
              Vivir + Alquilar Local
            </h3>
            <p className="text-xs text-stone-500 font-serif italic mb-4">
              Viví en tu casa propia y obtené un ingreso mensual fijo alquilando el local comercial.
            </p>
            <div className="pt-3 border-t border-black/10 flex justify-between items-baseline">
              <span className="text-xs text-stone-600">Ingreso Extra</span>
              <span className="text-lg font-serif font-bold text-black">
                PESOS ${localRent}/mes
              </span>
            </div>
          </div>

          {/* Scenario 3 */}
          <div
            onClick={() => setSelectedScenario('live_local')}
            className={`p-6 bg-white border transition-all cursor-pointer ${
              selectedScenario === 'live_local'
                ? 'border-black ring-1 ring-black shadow-lg'
                : 'border-black/10 hover:border-black/30'
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-1">
              Escenario Emprendedor 03
            </span>
            <h3 className="font-serif text-xl font-bold text-stone-900 mb-1">
              Vivienda + Negocio Propio
            </h3>
            <p className="text-xs text-stone-500 font-serif italic mb-4">
              Ahorrá 100% de alquiler comercial y viví al lado de tu propio punto de venta o estudio.
            </p>
            <div className="pt-3 border-t border-black/10 flex justify-between items-baseline">
              <span className="text-xs text-stone-600">Ahorro Mensual</span>
              <span className="text-lg font-serif font-bold text-black">
                Cero Alquileres
              </span>
            </div>
          </div>
        </div>

        {/* Calculation Control Box */}
        <div className="bg-white border border-black/10 p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Sliders */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="font-serif text-2xl text-stone-900">
                Ajustá las Estimaciones de Alquiler de Mercado
              </h4>

              {/* House Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold uppercase tracking-widest text-stone-600">
                    Alquiler Casa (2 Dorm + Cochera):
                  </span>
                  <span className="font-serif font-bold text-base text-black">PESOS ${houseRent} / mes</span>
                </div>
                <input
                  type="range"
                  min="600000"
                  max="700000"
                  step="10000"
                  value={houseRent}
                  onChange={(e) => setHouseRent(Number(e.target.value))}
                  className="w-full accent-black cursor-pointer"
                  disabled={selectedScenario === 'live_local'} // Deshabilitado en escenario 3
                />
              </div>

              {/* Local Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold uppercase tracking-widest text-stone-600">
                    Alquiler Local Comercial (50 m² con vidriera):
                  </span>
                  <span className="font-serif font-bold text-base text-black">PESOS ${localRent} / mes</span>
                </div>
                <input
                  type="range"
                  min="450000"
                  max="550000"
                  step="10000"
                  value={localRent}
                  onChange={(e) => setLocalRent(Number(e.target.value))}
                  className="w-full accent-black cursor-pointer"
                  disabled={selectedScenario === 'live_local'} // Deshabilitado en escenario 3
                />
              </div>

              {/* Mostrar mensaje en escenario 3 */}
              {selectedScenario === 'live_local' && (
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-4">
                  <p className="text-sm text-amber-800 font-medium">
                    💡 En este escenario no pagás alquiler. Ahorrás 100% del costo comercial.
                  </p>
                </div>
              )}
            </div>

            {/* Total Results Big Numbers - CORREGIDO */}
            <div className="lg:col-span-5 bg-[#FAF9F6] p-6 border border-black/10 text-center space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-1">
                  {selectedScenario === 'live_local' ? 'Ahorro Mensual' : 'Proyección Mensual'}
                </span>
                <p className="font-serif text-4xl sm:text-5xl font-normal text-[#1A1A1A]">
                  {selectedScenario === 'live_local' ? (
                    <span className="text-emerald-600">Cero Alquileres</span>
                  ) : (
                    `PESOS $${totalMonthlyUSD.toLocaleString()}`
                  )}
                </p>
                <span className="text-xs text-stone-500 font-serif italic block mt-2">
                  {selectedScenario === 'live_local' ? (
                    <>
                      Ahorro anual: <span className="font-bold text-emerald-600">
                        PESOS ${((houseRent + localRent) * 12).toLocaleString()}
                      </span>
                    </>
                  ) : (
                    `PESOS $${totalAnnualUSD.toLocaleString()} al año`
                  )}
                </span>

                {/* Beneficio adicional para escenario 3 */}
                {selectedScenario === 'live_local' && (
                  <div className="mt-4 pt-4 border-t border-black/10">
                    <p className="text-xs text-stone-600">
                      ✅ Ahorro en alquiler comercial + vivienda propia
                    </p>
                    <p className="text-xs text-stone-600 mt-1">
                      📈 Inversión inteligente con retorno asegurado
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
