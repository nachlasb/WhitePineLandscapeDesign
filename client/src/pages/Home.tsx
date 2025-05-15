import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PhotoGrid from "@/components/PhotoGrid";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { useState, useEffect } from "react";

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleOpenLightbox = (imageSrc: string) => {
    // Get larger version of image
    const largeSrc = imageSrc.includes("w=600&h=400") 
      ? imageSrc.replace("w=600&h=400", "w=1200&h=800") 
      : imageSrc;
    
    setLightboxImage(largeSrc);
    setIsLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    // Intersection Observer for fade-in animations
    const fadeElements = document.querySelectorAll('.section-fade');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    }, {
      threshold: 0.1
    });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection onImageClick={handleOpenLightbox} />
      <TestimonialsSection />
      <PhotoGrid />
      <CTASection />
      <Footer />
      <Lightbox 
        isOpen={isLightboxOpen} 
        imageSrc={lightboxImage} 
        onClose={handleCloseLightbox} 
      />
    </>
  );
}
