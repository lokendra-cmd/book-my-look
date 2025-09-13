export default function ServiceImages() {
  return (
    <div id="service-images" className="bg-[#F5F3F0] h-screen">
      <div className="flex flex-col h-full">
        {/* Image 1 - Top Half */}
        <div className="h-1/2 bg-white flex items-center justify-center">
          <h2 className="text-4xl font-bold text-gray-600">Image 1</h2>
        </div>

        {/* Image 2 - Bottom Half */}
        <div className="h-1/2 bg-gray-100 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-gray-600">Image 2</h2>
        </div>
      </div>
    </div>
  );
}
