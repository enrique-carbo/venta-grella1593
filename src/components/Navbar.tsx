import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowUpRight, Calendar, FileText } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface NavbarProps {
  onOpenVisitModal: () => void;
  onOpenDossierModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenVisitModal, onOpenDossierModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Unidades', href: '#unidades' },
    { label: 'Galería', href: '#galeria' },
    { label: 'Plano', href: '#plano' },
    { label: 'Ubicación', href: '#ubicacion' },
    { label: 'Inversión', href: '#inversion' },
    { label: 'Preguntas', href: '#faq' },
  ];

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('¡Hola! Me comunico desde la web para consultar por la propiedad con Casa 2 Dormitorios + Cochera + Local Comercial. Quisiera más información y coordinar una visita.');
    window.open(`https://wa.me/${PROPERTY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Editorial Top Micro Header */}
      <div className="bg-[#FAF9F6] text-[#1A1A1A] border-b border-black/10 py-2 px-4 sm:px-8 text-[10px] uppercase tracking-widest font-semibold">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Propiedad en Venta
            </span>
            <span className="hidden sm:inline text-black/30">|</span>
            <span className="hidden sm:inline text-stone-600">Ref: {PROPERTY_INFO.referenceCode}</span>
            <span className="hidden md:inline text-black/30">|</span>
            <span className="hidden md:inline text-stone-600">Escritura al Día • Apto Crédito</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${PROPERTY_INFO.contact.whatsappNumber}`}
              className="inline-flex items-center gap-1.5 text-stone-700 hover:text-black transition-colors"
            >
              <Phone className="w-3 h-3 text-stone-500" />
              <span>{PROPERTY_INFO.contact.phoneFormatted}</span>
            </a>
            <button
              onClick={onOpenDossierModal}
              className="inline-flex items-center gap-1 text-black font-bold hover:opacity-70 transition-opacity cursor-pointer underline underline-offset-2"
            >
              <FileText className="w-3 h-3" />
              <span>Dossier PDF</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-black/10 py-3.5'
            : 'bg-[#FAF9F6] border-b border-black/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Editorial Logo / Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="flex flex-col">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#1A1A1A] leading-tight">
                Vivienda & Comercio
              </span>
              <span className="font-serif italic text-lg text-stone-800 leading-tight">
                Casa 2 Dorm + Local + Cochera
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-bold uppercase tracking-widest text-stone-700 hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenVisitModal}
              className="px-4 py-2.5 border border-black text-black hover:bg-black hover:text-white transition-all text-xs font-bold uppercase tracking-widest cursor-pointer"
            >
              Agendar Visita
            </button>

            <button
              onClick={handleWhatsAppClick}
              className="px-5 py-2.5 bg-[#25D366] text-white hover:brightness-95 transition-all text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white" />
              <span>WhatsApp</span>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={handleWhatsAppClick}
              className="sm:hidden p-2 bg-[#25D366] text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 hover:text-black focus:outline-none"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF9F6] border-b border-black/10 px-6 pt-4 pb-6 space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold uppercase tracking-widest text-stone-800 py-1.5 border-b border-black/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenVisitModal();
                }}
                className="w-full py-3 border border-black text-black text-xs font-bold uppercase tracking-widest text-center"
              >
                Agendar Visita
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
                className="w-full py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Contactar por WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
