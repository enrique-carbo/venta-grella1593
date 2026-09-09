import React, { useRef } from 'react';
import { X, Printer, Download, Check, MapPin, Phone, MessageCircle } from 'lucide-react';
import { PROPERTY_INFO, PROPERTY_UNITS, AMENITIES } from '../data/propertyData';
import facadeImg from '../assets/images/Vivienda-LocalComercial.jpeg';

interface DossierModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DossierModal: React.FC<DossierModalProps> = ({ isOpen, onClose }) => {
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    const printContents = printRef.current;
    if (!printContents) return;

    // Guardar el contenido original
    const originalContents = document.body.innerHTML;

    // Crear un nuevo documento para imprimir
    const printWindow = window.open('', '_blank', 'width=800,height=600');
    if (!printWindow) {
      alert('Por favor, permite las ventanas emergentes para imprimir');
      return;
    }

    // Obtener todos los estilos de la página
    const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
    let stylesHTML = '';
    styles.forEach((style) => {
      stylesHTML += style.outerHTML;
    });

    // Construir el HTML para impresión
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Dossier - ${PROPERTY_INFO.referenceCode}</title>
          ${stylesHTML}
          <style>
            /* Reset para impresión */
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            body {
              background: white !important;
              padding: 20px !important;
              font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
              color: #1A1A1A;
            }

            .dossier-print-container {
              max-width: 1000px;
              margin: 0 auto;
              background: white;
            }

            /* Ocultar elementos no deseados */
            .no-print {
              display: none !important;
            }

            /* Asegurar que todo sea visible */
            .overflow-y-auto {
              overflow: visible !important;
              max-height: none !important;
            }

            .max-h-\\[90vh\\] {
              max-height: none !important;
            }

            .fixed {
              position: static !important;
            }

            .backdrop-blur-md {
              backdrop-filter: none !important;
              background: white !important;
            }

            .bg-\\[\\#141413\\]\\/85 {
              background: white !important;
            }

            /* Mejorar apariencia en impresión */
            .border-black\\/10 {
              border-color: #e5e5e5 !important;
            }

            .shadow-2xl {
              box-shadow: none !important;
            }

            img {
              max-width: 100% !important;
              height: auto !important;
            }

            /* Evitar saltos de página */
            .print\\:break-inside-avoid {
              break-inside: avoid;
              page-break-inside: avoid;
            }

            /* Ajustes para impresión */
            .space-y-6 > * + * {
              margin-top: 1.5rem;
            }

            .space-y-4 > * + * {
              margin-top: 1rem;
            }

            .gap-3 {
              gap: 0.75rem;
            }

            .gap-4 {
              gap: 1rem;
            }

            .grid {
              display: grid;
            }

            .grid-cols-2 {
              grid-template-columns: repeat(2, 1fr);
            }

            .grid-cols-4 {
              grid-template-columns: repeat(4, 1fr);
            }

            .sm\\:grid-cols-4 {
              grid-template-columns: repeat(4, 1fr);
            }

            @media (max-width: 640px) {
              .grid-cols-2 {
                grid-template-columns: repeat(2, 1fr);
              }
              .sm\\:grid-cols-4 {
                grid-template-columns: repeat(2, 1fr);
              }
            }

            /* Estilos para la impresión */
            @page {
              margin: 1.5cm;
              size: A4;
            }

            .bg-white {
              background: white !important;
            }

            .p-4 {
              padding: 1rem;
            }

            .p-5 {
              padding: 1.25rem;
            }

            .p-6 {
              padding: 1.5rem;
            }

            .text-center {
              text-align: center;
            }

            .text-right {
              text-align: right;
            }

            .font-serif {
              font-family: Georgia, 'Times New Roman', serif;
            }

            .font-mono {
              font-family: 'Courier New', monospace;
            }
          </style>
        </head>
        <body>
          <div class="dossier-print-container">
            ${printContents.innerHTML}
          </div>
        </body>
      </html>
    `);

    printWindow.document.close();

    // Esperar a que carguen las imágenes y luego imprimir
    setTimeout(() => {
      printWindow.print();
      // Cerrar la ventana después de imprimir (opcional)
      // printWindow.close();
    }, 500);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-[#141413]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div
        className="bg-[#FAF9F6] text-[#1A1A1A] border border-black/20 max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        {/* Top Controls - NO SE IMPRIMEN */}
        <div className="flex items-center justify-between border-b border-black/10 pb-4 mb-6 no-print">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-widest text-black bg-white px-2.5 py-1 border border-black/10">
              Ficha Técnica Oficial
            </span>
            <span className="text-xs text-stone-500 font-mono">Ref: {PROPERTY_INFO.referenceCode}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-white border border-black/20 hover:border-black text-black text-xs font-bold uppercase tracking-widest cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 text-stone-400 hover:text-black cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* CONTENIDO A IMPRIMIR */}
        <div ref={printRef}>
          <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between gap-4 items-start border-b border-black/10 pb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-1">
                  Dossier Inmobiliario Exclusivo
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 leading-tight">
                  Casa 2 Dormitorios + Cochera + Local Comercial
                </h2>
                <p className="text-xs text-stone-600 flex items-center gap-1 mt-2">
                  <MapPin className="w-3.5 h-3.5 text-black" />
                  {PROPERTY_INFO.location.address}
                </p>
              </div>

              <div className="text-right shrink-0 bg-white p-4 border border-black/10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 block">Venta Directa</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-500 block">Escritura Inmediata</span>
                <span className="text-xs font-mono font-bold text-stone-900 block mt-1">Cod: {PROPERTY_INFO.referenceCode}</span>
              </div>
            </div>

            {/* Facade Picture */}
            <div className="aspect-16/8 border border-black/10 bg-[#E5E5E1] overflow-hidden">
              <img
                src={facadeImg}
                alt="Fachada de la propiedad"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-4 bg-white border border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Terreno</p>
                <p className="text-xl font-serif font-bold text-stone-900">{PROPERTY_INFO.totalArea}</p>
              </div>
              <div className="p-4 bg-white border border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Cubiertos</p>
                <p className="text-xl font-serif font-bold text-stone-900">{PROPERTY_INFO.coveredArea}</p>
              </div>
              <div className="p-4 bg-white border border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Dormitorios</p>
                <p className="text-xl font-serif font-bold text-stone-900">2</p>
              </div>
              <div className="p-4 bg-white border border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Local</p>
                <p className="text-xl font-serif font-bold text-stone-900">50 m² Vidriera</p>
              </div>
            </div>

            {/* 3 Modules Description */}
            <div className="space-y-4">
              <h4 className="font-serif text-xl text-stone-900 border-b border-black/10 pb-2">
                Desglose de Ambientes
              </h4>

              {PROPERTY_UNITS.map((u, idx) => (
                <div key={u.id} className="p-5 bg-white border border-black/10 print:break-inside-avoid">
                  <div className="flex justify-between items-baseline mb-1">
                    <h5 className="font-serif font-bold text-base text-stone-900">0{idx + 1}. {u.title}</h5>
                    <span className="text-xs font-serif italic text-stone-500">{u.surface}</span>
                  </div>
                  <p className="text-xs text-stone-600 font-serif italic mb-3">{u.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px] text-stone-700">
                    {u.highlights.slice(0, 4).map((h, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-black rounded-full" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Legal & Contact Footer */}
            <div className="pt-5 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-600">
              <div>
                <p className="font-bold text-stone-900 uppercase tracking-wider">{PROPERTY_INFO.contact.realEstateAgent}</p>
                <p className="text-[11px] text-stone-500">Horarios: {PROPERTY_INFO.contact.officeHours}</p>
              </div>
              <div className="text-center sm:text-right">
                <p className="font-bold font-mono text-stone-900">Tel: {PROPERTY_INFO.contact.phoneFormatted}</p>
                <p className="text-[11px] font-mono">{PROPERTY_INFO.contact.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
