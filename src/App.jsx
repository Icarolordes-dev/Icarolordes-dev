import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline';
import ProductCarousel from './components/ProductCarousel';
import ServiceCarousel from './components/ServiceCarousel';
import InformativeSection from './components/InformativeSection';
import InteractivePage from './components/InteractivePage';
import Testimonials from './components/Testimonials';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Timeline />
      <ProductCarousel />
      <ServiceCarousel />
      <InformativeSection />
      <InteractivePage />
      <Testimonials />
      <LocationContact />
      <Footer />
    </div>
  );
}

export default App;
