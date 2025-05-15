export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Scenic landscape with mountains and pine trees" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 z-10 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
          Crafting Exceptional Outdoor Spaces
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 max-w-xl mx-auto">
          Professional landscape design and maintenance in Sandpoint, Idaho
        </p>
        <a 
          href="#contact" 
          className="bg-forest-green hover:bg-pine-needle text-white font-semibold py-3 px-8 rounded-md transition-colors inline-block"
        >
          Request a call today
        </a>
      </div>
    </section>
  );
}
