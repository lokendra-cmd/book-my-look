export default function Hero() {
  return (
    <div id="hero" className="min-h-screen bg-[#F5F3F0] flex items-center justify-center px-6">
      <div className="text-center max-w-4xl">
        {/* Main Title - Three Lines */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif text-black leading-tight mb-8 animate-fade-in-up">
          <span className="inline-block animate-slide-in-left delay-100">ELEVATE</span>
          <br />
          <span className="inline-block animate-slide-in-left delay-200">YOUR BEAUTY</span>
          <br />
          <span className="inline-block animate-slide-in-left delay-300">ROUTINE</span>
        </h1>

        {/* Subtitle - Two Lines */}
        <p className="text-lg sm:text-xl lg:text-2xl text-black mb-12 font-sans leading-relaxed animate-fade-in-up delay-500">
          Your go-to platform for all beauty
          <br />
          needs
        </p>

        {/* Call-to-Action Button */}
        <button className="bg-[#E9499B] text-white px-16 py-5 rounded-2xl text-2xl font-serif font-bold italic btn-exact-shadow hover:bg-[#D63A8B] transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in-up delay-700">
          Get Started
        </button>
      </div>
    </div>
  );
}
