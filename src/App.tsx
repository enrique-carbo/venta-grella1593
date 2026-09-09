/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PropertyUnits } from './components/PropertyUnits';
import { PhotoGallery } from './components/PhotoGallery';
import { InteractiveFloorPlan } from './components/InteractiveFloorPlan';
import { LocationSection } from './components/LocationSection';
import { InvestmentCalculator } from './components/InvestmentCalculator';
import { AmenitiesGrid } from './components/AmenitiesGrid';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { VisitModal } from './components/VisitModal';
import { DossierModal } from './components/DossierModal';
import { StickyMobileBar } from './components/StickyMobileBar';

export default function App() {
  const [selectedPhotoId, setSelectedPhotoId] = useState<string | null>(null);
  const [isVisitModalOpen, setIsVisitModalOpen] = useState(false);
  const [isDossierModalOpen, setIsDossierModalOpen] = useState(false);

  const handleOpenPhotoModal = (id: string) => {
    setSelectedPhotoId(id);
  };

  const handleClosePhotoModal = () => {
    setSelectedPhotoId(null);
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col selection:bg-amber-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        onOpenVisitModal={() => setIsVisitModalOpen(true)}
        onOpenDossierModal={() => setIsDossierModalOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero with Key Specs, Facade Preview & CTAs */}
        <Hero
          onOpenVisitModal={() => setIsVisitModalOpen(true)}
          onOpenDossierModal={() => setIsDossierModalOpen(true)}
          onSelectPhoto={handleOpenPhotoModal}
        />

        {/* 2. Detailed Breakdown of the 3 Units (Casa 2 Dorm, Cochera, Local Comercial) */}
        <PropertyUnits
          onSelectPhoto={handleOpenPhotoModal}
          onOpenVisitModal={() => setIsVisitModalOpen(true)}
        />

        {/* 3. Professional Photo Gallery with Filters & Full Lightbox */}
        <PhotoGallery
          selectedPhotoId={selectedPhotoId}
          onClosePhotoModal={handleClosePhotoModal}
          onOpenPhotoModal={handleOpenPhotoModal}
        />

        {/* 4. Interactive Floor Plan & Room Dimensions */}
        <InteractiveFloorPlan
          onOpenPhotoModal={handleOpenPhotoModal}
          onOpenVisitModal={() => setIsVisitModalOpen(true)}
        />

        {/* 5. Strategic Location & Points of Interest */}
        <LocationSection />

        {/* 6. Investment Potential & Dual-Rent / Live-Work Calculator */}
        <InvestmentCalculator
          onOpenVisitModal={() => setIsVisitModalOpen(true)}
        />

        {/* 7. Building Quality & Legal Warranties (Escritura, Servicios, etc.) */}
        <AmenitiesGrid />

        {/* 8. Frequently Asked Questions (FAQ) with Search & Accordion */}
        <FaqSection />

        {/* 9. Contact Hub (1-Click WhatsApp, Email Form, Call, Agent Details) */}
        <ContactSection
          onOpenVisitModal={() => setIsVisitModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Floating Action Bar */}
      <StickyMobileBar
        onOpenVisitModal={() => setIsVisitModalOpen(true)}
      />

      {/* Modals */}
      <VisitModal
        isOpen={isVisitModalOpen}
        onClose={() => setIsVisitModalOpen(false)}
      />

      <DossierModal
        isOpen={isDossierModalOpen}
        onClose={() => setIsDossierModalOpen(false)}
      />
    </div>
  );
}
