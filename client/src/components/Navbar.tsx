import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsFixed(scrollPos > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav id="navbar" className={`bg-off-white py-4 px-6 z-50 ${isFixed ? 'nav-fixed bg-off-white' : ''}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="flex items-center">
            {/* Wireframe-style logo with mountain and tree silhouettes */}
            <div className="h-10 w-10 mr-3">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <path d="M50 5 L10 90 H90 L50 5" stroke="currentColor" className="text-forest-green" strokeWidth="2" fill="none" />
                <path d="M40 50 L30 90 H50 L40 50" stroke="currentColor" className="text-forest-green" strokeWidth="2" fill="none" />
                <path d="M60 45 L50 90 H70 L60 45" stroke="currentColor" className="text-forest-green" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <span className="text-forest-green font-serif font-bold text-xl">White Pine Landscape Design</span>
          </a>
        </Link>
        <div className="flex items-center">
          <a 
            href="tel:2085551234" 
            className="flex items-center text-forest-green hover:text-pine-needle transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            <span className="font-semibold">(208) 555-1234</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
