export default function PhotoGrid() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1558244661-d248897f7bc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
      alt: "Stone pathway through garden"
    },
    {
      src: "https://pixabay.com/get/ge596eab4531ef32a07da00cd2c096b7f05c2a51e030a46edc27c835864ec80d889bcc4d6012ce700dbb91725e96b5f9bfe4dfd3dcd0c422dc2eb1ca9628d0d9c_1280.jpg",
      alt: "Perfectly manicured lawn"
    },
    {
      src: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
      alt: "Garden with decorative rock features"
    },
    {
      src: "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
      alt: "Mountain landscape with pine trees"
    },
    {
      src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
      alt: "Patio with outdoor furniture"
    },
    {
      src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
      alt: "Decorative garden bed with variety of plants"
    },
    {
      src: "https://images.unsplash.com/photo-1528092744838-b91de0a10615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
      alt: "Stone retaining wall with landscaping"
    },
    {
      src: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
      alt: "Backyard with small pond water feature"
    }
  ];

  return (
    <section className="grid grid-cols-2 md:grid-cols-4 section-fade">
      {photos.map((photo, index) => (
        <div key={index} className="h-60 overflow-hidden">
          <img 
            src={photo.src}
            alt={photo.alt}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      ))}
    </section>
  );
}
