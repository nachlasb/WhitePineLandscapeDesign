import { useEffect, useState } from 'react';

interface UseScrollAnimationProps {
  threshold?: number;
  rootMargin?: string;
}

export function useScrollAnimation({ threshold = 0.1, rootMargin = '0px' }: UseScrollAnimationProps = {}) {
  const [elements, setElements] = useState<Element[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );
    
    const fadeElements = document.querySelectorAll('.section-fade');
    fadeElements.forEach((el) => observer.observe(el));
    setElements(Array.from(fadeElements));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [threshold, rootMargin]);
  
  return { elements };
}
