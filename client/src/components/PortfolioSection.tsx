interface PortfolioSectionProps {
  onImageClick: (imageSrc: string) => void;
}

export default function PortfolioSection({ onImageClick }: PortfolioSectionProps) {
  const portfolioItems = [
    {
      src: "https://pixabay.com/get/gf866472fe72b8282c58fb6bf37d226f57add432584a0d54d352c88b23e438e75133dfb73e2cc9523151cb7299332b2d36d61f5fdeef5f667fabafd443ddad9c0_1280.jpg",
      alt: "Landscape design with custom stone pathways"
    },
    {
      src: "https://pixabay.com/get/g72566c7f161e267a42f9844fd4641c5b94127fc46bfa3d89cc7ad51ae74b97578af538db769d096cb727f110fe709027ae652420ddbe88fd190942802cefbbec_1280.jpg",
      alt: "Garden design with mountain view"
    },
    {
      src: "https://pixabay.com/get/g402ab0404561bb631665c4a9a572f7b733e3897f79255ae4ed65c41dd03eed52220a1c4a12782e2171c4b17aa30521b4544284e9c8588d30e6e4f905fd5a273e_1280.jpg",
      alt: "Hardscaping with stone wall"
    },
    {
      src: "https://images.unsplash.com/photo-1556715371-bdb0d523c870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Well-maintained lawn with perfect edges"
    },
    {
      src: "https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Backyard transformation with patio and landscaping"
    },
    {
      src: "https://images.unsplash.com/photo-1598902108854-10e335adac99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      alt: "Native plant garden design"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-off-white section-fade">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-12 text-center">Our Work</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="portfolio-item cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow relative group"
              onClick={() => onImageClick(item.src)}
            >
              <img 
                src={item.src}
                alt={item.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="text-white font-semibold text-lg">View Project</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
