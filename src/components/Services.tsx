export default function Services() {
  const services = [
    {
      id: 1,
      title: "HAIR SMOOTHENING | INDORE | SMART LOOK SALON",
      subtitle: "Frizz-Free Confidence Starts Here.",
      duration: "1 hr",
      price: "₹3,000",
      image: "Hair Smoothening"
    },
    {
      id: 2,
      title: "HAIR CUT & STYLING | MUMBAI | STYLE STUDIO",
      subtitle: "Transform Your Look with Expert Styling.",
      duration: "45 min",
      price: "₹1,500",
      image: "Hair Cut & Styling"
    },
    {
      id: 3,
      title: "FACIAL TREATMENT | DELHI | GLOW SPA",
      subtitle: "Reveal Your Natural Glow.",
      duration: "1.5 hr",
      price: "₹2,500",
      image: "Facial Treatment"
    },
    {
      id: 4,
      title: "MANICURE & PEDICURE | BANGALORE | NAIL ART",
      subtitle: "Perfect Nails for Every Occasion.",
      duration: "1 hr",
      price: "₹1,800",
      image: "Manicure & Pedicure"
    },
    {
      id: 5,
      title: "BRIDAL MAKEUP | PUNE | WEDDING BEAUTY",
      subtitle: "Your Perfect Wedding Day Look.",
      duration: "2 hr",
      price: "₹8,000",
      image: "Bridal Makeup"
    },
    {
      id: 6,
      title: "MASSAGE THERAPY | GOA | RELAX SPA",
      subtitle: "Unwind and Rejuvenate Your Body.",
      duration: "1 hr",
      price: "₹2,200",
      image: "Massage Therapy"
    },
    {
      id: 7,
      title: "EYEBROW SHAPING | CHENNAI | BROW STUDIO",
      subtitle: "Frame Your Face Perfectly.",
      duration: "30 min",
      price: "₹800",
      image: "Eyebrow Shaping"
    }
  ];

  return (
    <div id="services" className="bg-[#F5F3F0] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl sm:text-5xl font-serif text-black mb-12 animate-fade-in-up">SERVICES</h2>
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.id} className={`bg-[#F5F3F0] rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in`} style={{animationDelay: `${index * 0.1}s`}}>
              {/* Circular Image Placeholder */}
              <div className="w-32 h-32 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mx-auto mb-6 flex items-center justify-center shadow-md">
                <div className="text-center text-gray-600">
                  <div className="text-2xl font-bold text-gray-500 mb-1">Image {service.id}</div>
                  <p className="text-xs font-medium">Service Photo</p>
                </div>
              </div>

              {/* Service Title */}
              <h3 className="text-lg font-bold text-black mb-2 leading-tight">
                {service.title}
              </h3>

              {/* Service Subtitle */}
              <p className="text-black mb-3 text-sm">
                {service.subtitle}
              </p>

              {/* Read More Link */}
              <a href="#" className="text-black underline text-sm mb-4 block hover:text-gray-700">
                Read More
              </a>

              {/* Separator Line */}
              <div className="w-full h-px bg-gray-300 mb-4"></div>

              {/* Duration and Price */}
              <div className="mb-6">
                <p className="text-black text-sm mb-1">{service.duration}</p>
                <p className="text-black font-semibold">{service.price}</p>
              </div>

              {/* Book Now Button */}
              <button className="w-full bg-black text-white py-3 px-4 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300 shadow-md">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
