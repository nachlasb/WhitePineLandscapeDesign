export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "They showed up on time, did clean work, and the yard has never looked better. Their attention to detail is impressive.",
      name: "Sarah Johnson",
      title: "Sandpoint Homeowner"
    },
    {
      quote: "White Pine made our space usable again — can't recommend them enough. Professional and knowledgeable from start to finish.",
      name: "Mike Thompson",
      title: "Local Business Owner"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white section-fade">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest-green mb-12 text-center">What Our Clients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-off-white p-6 rounded-lg shadow-md">
              <div className="text-5xl text-forest-green opacity-20 mb-2">"</div>
              <p className="text-charcoal italic mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center">
                <div className="mr-3 text-forest-green">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-charcoal">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
