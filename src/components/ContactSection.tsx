import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, MapPin, Calendar, CheckCircle2, User, Send, Clock, ShieldCheck, Copy, Check } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  onOpenVisitModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenVisitModal }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: 'Hola, quisiera recibir más detalles sobre la propiedad (Casa + Local + Cochera) y consultar disponibilidad de visita.',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROPERTY_INFO.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola! Mi nombre es ${formData.name || 'un interesado'}.\n` +
      `Teléfono: ${formData.phone || 'No especificado'}\n` +
      `Mensaje: ${formData.message}`
    );
    window.open(`https://wa.me/${PROPERTY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="contacto" className="py-16 sm:py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-black/10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">
              Atención Personalizada
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-tight">
              Contacto & <span className="italic">Asesoramiento</span>
            </h2>
          </div>
          <p className="text-sm text-stone-600 max-w-md font-sans leading-relaxed">
            Comunicate para coordinar una visita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info & Fast Channels */}
          <div className="lg:col-span-5 space-y-6">
            {/* WhatsApp Priority Card */}
            <div className="bg-white border border-black/10 p-8 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Canal Preferido de Respuesta Rápida</span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900">
                WhatsApp Oficial
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 font-serif italic leading-relaxed">
                Envianos un mensaje para recibir la tasación oficial y coordinar fecha de visita.
              </p>

              <button
                onClick={handleDirectWhatsApp}
                className="w-full py-4 px-6 bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-95 transition-all shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Conversar por WhatsApp</span>
              </button>

            </div>

            {/* Agent Contact Details */}
            <div className="bg-white border border-black/10 p-8 shadow-sm space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block">
                Datos de Contacto
              </span>

              <div className="space-y-3 text-xs text-stone-700">

                <div className="flex items-start gap-3 pb-3 border-b border-black/5">
                  <Phone className="w-4 h-4 text-stone-400 mt-0.5" />
                  <div>
                    <a href={`tel:${PROPERTY_INFO.contact.whatsappNumber}`} className="font-mono font-bold text-black hover:underline">
                      {PROPERTY_INFO.contact.phoneFormatted}
                    </a>
                    <p className="text-[11px] text-stone-500">Lunes a Viernes: {PROPERTY_INFO.contact.officeHours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-3 border-b border-black/5">
                  <Mail className="w-4 h-4 text-stone-400 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-black font-semibold">{PROPERTY_INFO.contact.email}</span>
                      <button
                        onClick={handleCopyEmail}
                        className="text-[10px] uppercase tracking-widest text-stone-500 hover:text-black font-bold flex items-center gap-1 cursor-pointer"
                      >
                        {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        <span>{copied ? 'Copiado' : 'Copiar'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-stone-400 mt-0.5" />
                  <div>
                    <p className="font-bold text-black">{PROPERTY_INFO.location.address}</p>
                    <p className="text-[11px] text-stone-500 font-serif italic">{PROPERTY_INFO.location.city}</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenVisitModal}
                  className="w-full py-3.5 border border-black text-black hover:bg-black hover:text-white transition-all text-xs font-bold uppercase tracking-widest cursor-pointer text-center"
                >
                  Agendar Visita Personalizada
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-black/10 p-8 sm:p-10 shadow-sm">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-1">
                    Formulario Directo
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-stone-900">
                    Enviar Consulta WhatsApp
                  </h3>
                  <p className="text-xs text-stone-500 font-serif italic mt-1">
                    Coordiná una visita.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1.5">
                      Nombre y Apellido *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Juan Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-black/10 text-xs text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1.5">
                      Teléfono / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. +54 9 11 1234-5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FAF9F6] border border-black/10 text-xs text-black focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1.5">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tucorreo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-black/10 text-xs text-black focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1.5">
                    Mensaje o Consulta
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF9F6] border border-black/10 text-xs text-black focus:outline-none focus:border-black transition-colors font-sans"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">

                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="py-4 px-6 bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest hover:brightness-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Enviar a WhatsApp</span>
                  </button>
                </div>

                <p className="text-[10px] text-stone-400 font-mono text-center">
                  Tus datos se manejan con estricta confidencialidad según la Ley de Protección de Datos.
                </p>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto shadow-lg">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-stone-900">
                  ¡Mensaje Enviado con Éxito!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 font-serif italic max-w-md mx-auto">
                  Gracias por tu interés en la propiedad. Un asesor inmobiliario te responderá a <span className="font-mono font-bold text-black">{formData.email}</span> a la brevedad.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors cursor-pointer"
                  >
                    Enviar otra consulta
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
