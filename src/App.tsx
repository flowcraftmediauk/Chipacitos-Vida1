/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PitchBanner } from './components/PitchBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductModal } from './components/ProductModal';
import { BrandStory } from './components/BrandStory';
import { FoodGallery } from './components/FoodGallery';
import { ValueSection } from './components/ValueSection';
import { ContactSection } from './components/ContactSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { Product } from './types';

export default function App() {
  const [customPhone, setCustomPhone] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProducts = () => {
    scrollToSection('productos');
  };

  const handleVisitLocation = () => {
    scrollToSection('ubicacion');
  };

  const handleOrderClick = () => {
    scrollToSection('contacto');
  };

  const handleOpenPhoneConfig = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#292321] flex flex-col font-sans selection:bg-[#F2D9D3] selection:text-[#49352F]">
      {/* 1. Interactive Client Presentation Pitch Bar */}
      <PitchBanner
        customPhone={customPhone}
        onPhoneChange={setCustomPhone}
      />

      {/* 2. Top Navigation Bar */}
      <Navbar onOrderClick={handleOrderClick} />

      {/* 3. Hero Section */}
      <main className="flex-1">
        <Hero onExploreProducts={handleExploreProducts} />

        {/* 4. Trust and Benefits Strip */}
        <TrustStrip />

        {/* 5. Featured Products & Menu Showcase */}
        <FeaturedProducts
          onSelectProduct={(product) => setSelectedProduct(product)}
          onOpenConsultation={handleOrderClick}
          onDirectWhatsApp={(product) => setSelectedProduct(product)}
        />

        {/* 6. Brand Story Section */}
        <BrandStory onVisitLocation={handleVisitLocation} />

        {/* 7. Food Photography Experience / Gallery */}
        <FoodGallery />

        {/* 8. Value & Experience Section */}
        <ValueSection />

        {/* 9. High-Conversion Ordering & Contact Section */}
        <ContactSection
          customPhone={customPhone}
          onOpenPhoneConfig={handleOpenPhoneConfig}
        />

        {/* 10. Local Location Section (San Salvador de Jujuy) */}
        <LocationSection />

        {/* 11. Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 12. Footer */}
      <Footer onOrderClick={handleOrderClick} />

      {/* 13. Mobile Bottom Action Bar & Floating WhatsApp */}
      <MobileActionBar
        onOrderClick={handleOrderClick}
        customPhone={customPhone}
      />

      {/* Product Detail & WhatsApp Order Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        customPhone={customPhone}
      />
    </div>
  );
}
