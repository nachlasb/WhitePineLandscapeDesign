export default function ServicesSection() {
  const services = [
    {
      icon: "pencil-ruler",
      title: "Landscape Design",
      description: "Thoughtful planning and design for beautiful, functional outdoor spaces."
    },
    {
      icon: "layer-group",
      title: "Hardscaping",
      description: "Quality stonework, patios, walkways, and structural elements."
    },
    {
      icon: "leaf",
      title: "Lawn Care & Maintenance",
      description: "Regular maintenance to keep your landscape looking its best year-round."
    },
    {
      icon: "broom",
      title: "Seasonal Cleanup",
      description: "Thorough spring and fall cleanups to prepare your landscape for the changing seasons."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white section-fade">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-12 text-center">Our Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-off-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                {service.icon === "pencil-ruler" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )}
                {service.icon === "layer-group" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )}
                {service.icon === "leaf" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
                {service.icon === "broom" && (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-forest-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-serif font-bold text-charcoal mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-charcoal text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
