import React, { useState, useEffect } from 'react';
import { Camera, ChevronLeft, ChevronRight, X, ZoomIn, MessageCircle, ArrowRight } from 'lucide-react';
import { PROPERTY_IMAGES, PROPERTY_INFO } from '../data/propertyData';
import { PropertyImage } from '../types';

interface PhotoGalleryProps {
  selectedPhotoId: string | null;
  onClosePhotoModal: () => void;
  onOpenPhotoModal: (id: string) => void;
}

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  selectedPhotoId,
  onClosePhotoModal,
  onOpenPhotoModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isZoomed, setIsZoomed] = useState(false);

  const categories = [
    { id: 'all', label: 'Todas las Fotos (09)' },
    { id: 'exterior', label: 'Fachada & Exterior' },
    { id: 'local', label: 'Local Comercial' },
    { id: 'casa', label: 'Casa Residencial' },
    { id: 'dormitorios', label: 'Dormitorios' },
    { id: 'cochera', label: 'Cochera & Patio' },
  ];

  const filteredImages = activeCategory === 'all'
    ? PROPERTY_IMAGES
    : PROPERTY_IMAGES.filter((img) => img.category === activeCategory);

  const currentImageIndex = PROPERTY_IMAGES.findIndex((img) => img.id === selectedPhotoId);
  const currentImage: PropertyImage | undefined = PROPERTY_IMAGES[currentImageIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedPhotoId) return;

      if (e.key === 'Escape') {
        onClosePhotoModal();
        setIsZoomed(false);
      } else if (e.key === 'ArrowRight') {
        const nextIndex = (currentImageIndex + 1) % PROPERTY_IMAGES.length;
        onOpenPhotoModal(PROPERTY_IMAGES[nextIndex].id);
        setIsZoomed(false);
      } else if (e.key === 'ArrowLeft') {
        const prevIndex = (currentImageIndex - 1 + PROPERTY_IMAGES.length) % PROPERTY_IMAGES.length;
        onOpenPhotoModal(PROPERTY_IMAGES[prevIndex].id);
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoId, currentImageIndex, onClosePhotoModal, onOpenPhotoModal]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const prevIndex = (currentImageIndex - 1 + PROPERTY_IMAGES.length) % PROPERTY_IMAGES.length;
    onOpenPhotoModal(PROPERTY_IMAGES[prevIndex].id);
    setIsZoomed(false);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIndex = (currentImageIndex + 1) % PROPERTY_IMAGES.length;
    onOpenPhotoModal(PROPERTY_IMAGES[nextIndex].id);
    setIsZoomed(false);
  };

  const handleWhatsAppAboutImage = (imageTitle: string) => {
    const text = encodeURIComponent(`Hola! Vi la foto "${imageTitle}" de la propiedad (Ref: ${PROPERTY_INFO.referenceCode}) y me gustaría hacer una consulta técnica.`);
    window.open(`https://wa.me/${PROPERTY_INFO.contact.whatsappNumber.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="galeria" className="py-16 sm:py-20 bg-[#FAF9F6] text-[#1A1A1A] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-black/10">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-stone-400 block mb-2">
              Registro Visual
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1A1A1A] tracking-tight">
              Galería Fotográfica <span className="italic">HD</span>
            </h2>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-stone-500">
            Hacé clic en cualquier imagen para abrir el visor interactivo
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-stone-600 border-black/10 hover:border-black/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => onOpenPhotoModal(image.id)}
              className={`group bg-white border border-black/10 p-3 shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                index === 0 && activeCategory === 'all' ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden bg-[#E5E5E1] aspect-4/3 mb-3">
                <img
                  src={image.url}
                  alt={image.alt}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3 left-3 bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-stone-700 border border-black/10">
                  {image.categoryLabel}
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 bg-black/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>
              </div>

              <div className="pt-1">
                <div className="flex items-baseline justify-between gap-2">
                  <h4 className="font-serif text-base text-stone-900 group-hover:text-black">
                    {image.title}
                  </h4>
                  <span className="text-[10px] font-mono text-stone-400">0{index + 1}</span>
                </div>
                <p className="text-xs text-stone-500 font-serif italic line-clamp-1 mt-0.5">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-12 p-8 bg-white border border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block mb-1">
              Visitas Presenciales
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-stone-900">
              ¿Querés recorrer la propiedad en persona?
            </h4>
            <p className="text-xs text-stone-600 mt-1">Coordinamos recorridos guiados y privados en horarios flexibles.</p>
          </div>
          <button
            onClick={() => handleWhatsAppAboutImage('Quiero agendar una visita para ver todos los ambientes')}
            className="shrink-0 px-6 py-4 bg-[#25D366] text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:brightness-95 transition-all shadow-sm cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Agendar Visita por WhatsApp</span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal in Editorial Minimalist Dark */}
      {selectedPhotoId && currentImage && (
        <div
          className="fixed inset-0 z-50 bg-[#141413]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={onClosePhotoModal}
        >
          {/* Top Bar Controls */}
          <div className="flex items-center justify-between text-white z-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold uppercase tracking-widest text-stone-400">
                Foto {currentImageIndex + 1} / {PROPERTY_IMAGES.length}
              </span>
              <span className="text-sm font-serif italic text-stone-200 hidden sm:inline">
                {currentImage.title}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-2.5 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors cursor-pointer"
                title="Zoom"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={onClosePhotoModal}
                className="p-2.5 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-white border border-stone-800 transition-colors cursor-pointer"
                title="Cerrar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Photo Display Area */}
          <div className="relative flex-1 flex items-center justify-center my-3 max-h-[75vh]" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-3 bg-black/80 hover:bg-black text-white border border-stone-700 shadow-xl transition-all cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-3 bg-black/80 hover:bg-black text-white border border-stone-700 shadow-xl transition-all cursor-pointer"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className={`relative max-w-5xl max-h-full transition-all duration-300 flex items-center justify-center ${isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'}`} onClick={() => setIsZoomed(!isZoomed)}>
              <img
                src={currentImage.url}
                alt={currentImage.alt}
                referrerPolicy="no-referrer"
                className="max-h-[70vh] w-auto max-w-full object-contain shadow-2xl border border-stone-800"
              />
            </div>
          </div>

          {/* Bottom Info & Thumbnail Strip */}
          <div className="bg-[#1A1A1A] border border-stone-800 p-4 max-w-4xl mx-auto w-full z-10" onClick={(e) => e.stopPropagation()}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400 block">{currentImage.categoryLabel}</span>
                <h3 className="font-serif text-lg text-white">{currentImage.title}</h3>
                <p className="text-xs text-stone-400 font-serif italic">{currentImage.description}</p>
              </div>

              <button
                onClick={() => handleWhatsAppAboutImage(currentImage.title)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white font-bold text-xs uppercase tracking-widest shrink-0 cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Consultar por este espacio</span>
              </button>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-stone-800">
              {PROPERTY_IMAGES.map((img) => (
                <button
                  key={img.id}
                  onClick={() => {
                    onOpenPhotoModal(img.id);
                    setIsZoomed(false);
                  }}
                  className={`relative shrink-0 w-12 h-12 overflow-hidden border transition-all cursor-pointer ${
                    img.id === selectedPhotoId
                      ? 'border-white opacity-100 scale-105'
                      : 'border-stone-700 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
