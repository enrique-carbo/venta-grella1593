import React, { useState } from 'react';
import { Search, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_LIST, PROPERTY_INFO } from '../data/propertyData';

export const FaqSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>([FAQ_LIST[0].id]);

  const categories = [
    { id: 'all', label: 'Todas las Dudas' },
    { id: 'legal', label: 'Escritura & Títulos' },
    { id: 'payment', label: 'Pagos & Crédito' },
    { id: 'commercial', label: 'Local Comercial' },
    { id: 'house', label: 'Servicios & Casa' },
    { id: 'visits', label: 'Visitas' },
  ];

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQ_LIST.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppAsk = () => {
    const msg = encodeURIComponent(`Hola! Tengo una consulta específica sobre la propiedad (Ref: ${PROPERTY_INFO.referenceCode}): `);
    window.open(`https://wa.me/${PROPERTY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 pb-6 border-b border-black/10">
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">
            Resolución Inmediata
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-tight mb-3">
            Preguntas <span className="italic">Frecuentes</span>
          </h2>
          <p className="text-sm text-stone-600 font-sans max-w-lg mx-auto">
            Respuestas claras sobre títulos de propiedad, habilitación comercial, formas de pago y visitas.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="w-4 h-4 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por palabra clave (ej: crédito, escritura, vidriera, servicios)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-white border border-black/10 text-xs tracking-wider text-black placeholder:text-stone-400 focus:outline-none focus:border-black transition-colors"
          />
        </div>

        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-[11px] font-bold uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer border ${
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

        {/* Editorial Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white border border-black/10 p-5 sm:p-6 transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between text-left gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-serif font-bold text-stone-400 mt-0.5">0{idx + 1}.</span>
                    <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-stone-900 leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <span className={`text-lg font-serif font-light text-stone-400 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-black/5 pl-7">
                    <p className="text-xs sm:text-sm text-stone-600 font-serif italic leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions */}
        <div className="mt-10 p-6 bg-white border border-black/10 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-lg font-bold text-stone-900">¿Tenés otra duda sobre la propiedad?</h4>
            <p className="text-xs text-stone-500 font-serif italic">Atendemos consultas al instante por WhatsApp.</p>
          </div>
          <button
            onClick={handleWhatsAppAsk}
            className="px-5 py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:brightness-95 transition-all cursor-pointer shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Consultar por WhatsApp</span>
          </button>
        </div>
      </div>
    </section>
  );
};
