export default function Artists() {
  const artists = [
    {
      id: 1,
      name: "Anamika Rai",
      description: "Anamika has over a decade of experience in crafting stunning haircuts and styles.",
      email: "bookurlooks@gmail.com",
      phone: "+91 924-346-4992"
    },
    {
      id: 2,
      name: "Priya Sharma",
      description: "Priya specializes in bridal makeup and has transformed hundreds of brides on their special day.",
      email: "priya.sharma@bookurlooks.com",
      phone: "+91 987-654-3210"
    },
    {
      id: 3,
      name: "Rajesh Kumar",
      description: "Rajesh is a master barber with 15 years of experience in precision cuts and grooming.",
      email: "rajesh.kumar@bookurlooks.com",
      phone: "+91 876-543-2109"
    },
    {
      id: 4,
      name: "Sneha Patel",
      description: "Sneha is an expert in facial treatments and skincare, helping clients achieve radiant skin.",
      email: "sneha.patel@bookurlooks.com",
      phone: "+91 765-432-1098"
    },
    {
      id: 5,
      name: "Arjun Singh",
      description: "Arjun specializes in hair coloring and styling, bringing out the best in every client's natural beauty.",
      email: "arjun.singh@bookurlooks.com",
      phone: "+91 654-321-0987"
    }
  ];

  return (
    <div id="artists" className="bg-[#F5F3F0] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Title and Button */}
        <div className="mb-20">
          <h2 className="text-5xl font-serif text-black mb-8 animate-fade-in-up">ARTISTS</h2>
          <button className="bg-blue-100 text-gray-600 px-6 py-2 rounded text-lg font-light hover:bg-blue-200 transition-all duration-300 mb-8 transform hover:scale-105 animate-fade-in-up delay-200">
            Meet Our Talented Team
          </button>
          <p className="text-xl text-black text-left leading-relaxed animate-fade-in-up delay-300">
            Our featured artists are skilled professionals
            <br />
            dedicated to enhancing your beauty.
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {artists.map((artist, index) => (
            <div key={artist.id} className="text-left animate-slide-in-up" style={{animationDelay: `${index * 0.15}s`}}>
              {/* Artist Image Placeholder */}
              <div className="mb-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-400 mb-2">Image {artist.id}</div>
                    <div className="text-sm text-gray-500">Artist Photo</div>
                  </div>
                </div>
              </div>

              {/* Artist Profile */}
              <div>
                <h3 className="text-3xl font-serif text-black mb-4">{artist.name}</h3>
                <p className="text-lg text-black mb-6 leading-relaxed">
                  {artist.description}
                </p>
                <div className="space-y-1">
                  <p className="text-black">{artist.email}</p>
                  <p className="text-black">{artist.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
