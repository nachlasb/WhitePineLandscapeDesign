export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            {/* Wireframe-style logo with mountain and tree silhouettes */}
            <div className="h-10 w-10 mr-3">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <path d="M50 5 L10 90 H90 L50 5" stroke="currentColor" className="text-off-white" strokeWidth="2" fill="none" />
                <path d="M40 50 L30 90 H50 L40 50" stroke="currentColor" className="text-off-white" strokeWidth="2" fill="none" />
                <path d="M60 45 L50 90 H70 L60 45" stroke="currentColor" className="text-off-white" strokeWidth="2" fill="none" />
              </svg>
            </div>
            <span className="text-off-white font-serif font-bold text-xl">White Pine Landscape Design</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="mb-2">(208) 555-1234 | info@whitepinelandscape.com</p>
            <p className="mb-2">Sandpoint, Idaho</p>
            <p className="text-sm text-gray-400 mt-4">
              Built for simplicity. Focused on quality. <br />
              &copy; {new Date().getFullYear()} White Pine Landscape Design. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
