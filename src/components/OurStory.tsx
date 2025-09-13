export default function OurStory() {
  return (
    <div id="our-story" className="bg-[#F5F3F0]">
      {/* Top Panel - Our Story Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-left max-w-4xl">
            {/* Title */}
            <h2 className="text-5xl font-serif text-black mb-8 animate-fade-in-up">
              <span className="text-4xl animate-slide-in-left delay-100">Our</span> <span className="animate-slide-in-left delay-200">Story</span>
            </h2>
            
            {/* Description */}
            <p className="text-xl text-black mb-8 leading-relaxed animate-fade-in-up delay-300">
              Bringing beauty professionals and clients together in a seamless way.
            </p>
            
            {/* Placeholder Button */}
            <div className="w-48 h-12 border-2 border-gray-400 rounded-lg flex items-center justify-center hover:border-gray-600 transition-colors duration-300 animate-fade-in-up delay-400">
              <span className="text-gray-500 text-sm">Button Placeholder</span>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="w-full h-px bg-gray-400"></div>

      {/* Bottom Panel - Beauty Services Image */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative max-w-4xl mx-auto">
            <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400"></div>
              
              {/* Makeup Case */}
              <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-black rounded-lg shadow-2xl">
                {/* Case Lid with Brushes */}
                <div className="absolute top-0 left-0 right-0 h-20 bg-black rounded-t-lg">
                  <div className="absolute top-4 left-4 w-2 h-12 bg-gray-600 rounded-full"></div>
                  <div className="absolute top-4 left-8 w-2 h-12 bg-gray-600 rounded-full"></div>
                  <div className="absolute top-4 left-12 w-2 h-12 bg-gray-600 rounded-full"></div>
                  <div className="absolute top-4 left-16 w-2 h-12 bg-gray-600 rounded-full"></div>
                  <div className="absolute top-4 left-20 w-2 h-12 bg-gray-600 rounded-full"></div>
                </div>
                
                {/* Main Compartment */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gray-800 rounded-b-lg">
                  {/* Makeup Palette */}
                  <div className="absolute top-4 left-4 w-48 h-12 bg-gray-700 rounded">
                    <div className="absolute top-1 left-1 w-8 h-2 bg-yellow-200 rounded"></div>
                    <div className="absolute top-1 left-10 w-8 h-2 bg-yellow-300 rounded"></div>
                    <div className="absolute top-1 left-19 w-8 h-2 bg-yellow-400 rounded"></div>
                    <div className="absolute top-1 left-28 w-8 h-2 bg-yellow-500 rounded"></div>
                    <div className="absolute top-1 left-37 w-8 h-2 bg-yellow-600 rounded"></div>
                    <div className="absolute top-1 left-46 w-8 h-2 bg-yellow-700 rounded"></div>
                  </div>
                  
                  {/* Small Container */}
                  <div className="absolute top-6 right-4 w-4 h-4 bg-gray-400 rounded-full"></div>
                </div>
              </div>
              
              {/* Makeup Brush */}
              <div className="absolute top-1/3 right-1/3 w-16 h-2 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-full transform rotate-12 shadow-lg">
                <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-200 rounded-full"></div>
              </div>
              
              {/* Hands */}
              <div className="absolute top-1/2 right-1/4 w-20 h-16 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full opacity-80"></div>
              <div className="absolute top-1/2 right-1/3 w-16 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full opacity-80"></div>
              
              {/* Blurred Background Elements */}
              <div className="absolute top-1/4 left-8 w-32 h-24 bg-gray-600 rounded-lg opacity-30 blur-sm"></div>
              <div className="absolute bottom-1/4 right-8 w-24 h-20 bg-gray-500 rounded-lg opacity-30 blur-sm"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
