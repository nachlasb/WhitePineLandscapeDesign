interface LightboxProps {
  isOpen: boolean;
  imageSrc: string | null;
  onClose: () => void;
}

export default function Lightbox({ isOpen, imageSrc, onClose }: LightboxProps) {
  if (!isOpen || !imageSrc) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black bg-opacity-90"
      onClick={handleBackdropClick}
    >
      <button 
        className="absolute top-4 right-6 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
        onClick={onClose}
      >
        &times;
      </button>
      <img 
        src={imageSrc} 
        alt="Enlarged project view" 
        className="max-w-[90%] max-h-[90%] object-contain"
      />
    </div>
  );
}
