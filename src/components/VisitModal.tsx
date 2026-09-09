import React, { useState } from 'react';
import { X, Calendar, Clock, MessageCircle, Phone, Mail, CheckCircle2, User } from 'lucide-react';
import { PROPERTY_INFO } from '../data/propertyData';

interface VisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VisitModal: React.FC<VisitModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('10:00 a 13:00 (Mañana)');
  const [contactVia, setContactVia] = useState<'whatsapp' | 'call' | 'email'>('whatsapp');
  const [isScheduled, setIsScheduled] = useState(false);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 a 11:30 (Mañana temprano)',
    '11:30 a 14:00 (Mediodía)',
    '14:00 a 16:30 (Primera tarde)',
    '16:30 a 19:00 (Tarde)',
  ];

  const handleConfirmVisit = (e: React.FormEvent) => {
    e.preventDefault();

    if (contactVia === 'whatsapp') {
      const msg = encodeURIComponent(
        `¡Hola! Quiero coordinar una visita a la propiedad (Ref: ${PROPERTY_INFO.referenceCode}).\n` +
        `• Nombre: ${name}\n` +
        `• Teléfono: ${phone}\n` +
        `• Fecha estimada: ${preferredDate || 'A coordinar'}\n` +
        `• Franja horaria: ${preferredTimeSlot}\n` +
        `¿Qué disponibilidad tienen para confirmar?`
      );
      window.open(`https://wa.me/${PROPERTY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${msg}`, '_blank');
    }

    setIsScheduled(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#141413]/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-[#FAF9F6] text-[#1A1A1A] border border-black/20 max-w-lg w-full p-8 sm:p-10 shadow-2xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-stone-400 hover:text-black transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {!isScheduled ? (
          <div>
            <div className="mb-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                Coordinación de Visita
              </span>
            </div>

            <h3 className="font-serif text-3xl font-bold text-stone-900 mb-2">
              Agendar Recorrido
            </h3>
            <p className="text-xs text-stone-600 font-serif italic mb-6">
              Visita la casa de 2 dormitorios, el local a la calle y la cochera.
            </p>

            <form onSubmit={handleConfirmVisit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">
                  Tu Nombre y Apellido *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="Ej. Sofía Martínez"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-black/10 text-xs text-black focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">
                  Teléfono / Celular *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    placeholder="Ej. +54 9 11 9876-5432"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white border border-black/10 text-xs text-black focus:outline-none focus:border-black"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">
                    Día Preferido
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-3 bg-white border border-black/10 text-xs text-black focus:outline-none focus:border-black"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-1">
                    Franja Horaria
                  </label>
                  <select
                    value={preferredTimeSlot}
                    onChange={(e) => setPreferredTimeSlot(e.target.value)}
                    className="w-full px-3 py-3 bg-white border border-black/10 text-xs text-black focus:outline-none focus:border-black"
                  >
                    {timeSlots.map((slot, i) => (
                      <option key={i} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:brightness-95 transition-all shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Confirmar & Abrir WhatsApp de Coordinación</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-stone-900">
              ¡Solicitud Recibida!
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 font-serif italic max-w-sm mx-auto">
              Te contactaremos a la brevedad por {contactVia.toUpperCase()} para validar los horarios de visita.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setIsScheduled(false);
                  onClose();
                }}
                className="px-6 py-3 border border-black text-black text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
