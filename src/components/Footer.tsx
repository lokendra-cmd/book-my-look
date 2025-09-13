export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#F5F3F0] to-[#EBE8E3] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border border-gray-400 rounded-full"></div>
        <div className="absolute top-32 right-16 w-16 h-16 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 border border-gray-400 rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 border border-gray-400 rounded-full"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl font-serif text-black mb-4 tracking-tight">Book Ur Look</h2>
              <p className="text-gray-700 text-lg leading-relaxed max-w-md">
                Your premier destination for professional styling services. 
                Transform your look with our expert team of stylists and artists.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-4 animate-fade-in-up delay-200">
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-[#E9499B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <a href="tel:+919243464992" className="text-black hover:text-[#E9499B] transition-colors duration-300 font-medium">
                  +91 924-346-4992
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <div className="w-8 h-8 bg-[#E9499B] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <a href="mailto:bookurlooks@gmail.com" className="text-black hover:text-[#E9499B] transition-colors duration-300 font-medium">
                  bookurlooks@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 animate-fade-in-up delay-300">
            <h3 className="text-xl font-semibold text-black mb-4">Quick Links</h3>
            <nav className="space-y-3">
              <a href="#services" className="block text-gray-700 hover:text-[#E9499B] transition-colors duration-300 group">
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Services</span>
              </a>
              <a href="#artists" className="block text-gray-700 hover:text-[#E9499B] transition-colors duration-300 group">
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Our Artists</span>
              </a>
              <a href="#about" className="block text-gray-700 hover:text-[#E9499B] transition-colors duration-300 group">
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">About Us</span>
              </a>
              <a href="#contact" className="block text-gray-700 hover:text-[#E9499B] transition-colors duration-300 group">
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Contact</span>
              </a>
            </nav>
          </div>

          {/* Legal & Policies */}
          <div className="space-y-6 animate-fade-in-up delay-400">
            <h3 className="text-xl font-semibold text-black mb-4">Legal</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-700 hover:text-[#E9499B] transition-colors duration-300 group">
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Privacy Policy</span>
              </a>
              <a href="#" className="block text-gray-700 hover:text-[#E9499B] transition-colors duration-300 group">
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Terms & Conditions</span>
              </a>
              <a href="#" className="block text-gray-700 hover:text-[#E9499B] transition-colors duration-300 group">
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Refund Policy</span>
              </a>
              <a href="#" className="block text-gray-700 hover:text-[#E9499B] transition-colors duration-300 group">
                <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">Booking Policy</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-gray-300 pt-12 mb-12">
          <div className="text-center animate-fade-in-up delay-500">
            <h3 className="text-lg font-semibold text-black mb-6">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              {/* Facebook */}
              <a href="#" className="group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-[#E9499B] group-hover:bg-[#E9499B] transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
              </a>
              
              {/* Instagram */}
              <a href="#" className="group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-[#E9499B] group-hover:bg-[#E9499B] transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875z"/>
                  </svg>
                </div>
              </a>
              
              {/* X (Twitter) */}
              <a href="#" className="group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-[#E9499B] group-hover:bg-[#E9499B] transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </a>
              
              {/* TikTok */}
              <a href="#" className="group">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-[#E9499B] group-hover:bg-[#E9499B] transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-xl">
                  <svg className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="animate-fade-in-up delay-600">
              <p className="text-sm text-gray-600">
                © 2025 Book Ur Look. All rights reserved.
              </p>
            </div>
            <div className="animate-fade-in-up delay-700">
              <p className="text-sm text-gray-600">
                Powered and secured by <span className="text-[#E9499B] font-medium">BookUrLook's Tech Team</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
