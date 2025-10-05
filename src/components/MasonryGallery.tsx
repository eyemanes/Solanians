import { useState, useEffect } from "react";

export function MasonryGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("all");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const galleryImages = [
    { id: 1, src: "/images/1.png", category: "heroes", size: "large" },
    { id: 2, src: "/images/2.png", category: "villains", size: "medium" },
    { id: 3, src: "/images/3.png", category: "heroes", size: "small" },
    { id: 4, src: "/images/4.png", category: "battles", size: "large" },
    { id: 5, src: "/images/5.png", category: "heroes", size: "medium" },
    { id: 6, src: "/images/6.png", category: "villains", size: "small" },
    { id: 7, src: "/images/8.png", category: "battles", size: "medium" },
    { id: 8, src: "/images/9.png", category: "heroes", size: "large" },
  ];

  const categories = [
    { value: "all", label: "All", color: "from-primary to-secondary" },
    { value: "heroes", label: "Heroes", color: "from-green-400 to-blue-500" },
    { value: "villains", label: "Villains", color: "from-red-400 to-purple-500" },
    { value: "battles", label: "Battles", color: "from-yellow-400 to-orange-500" },
  ];

  const filteredImages = filter === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const getSizeClasses = (size: string) => {
    switch (size) {
      case "large":
        return "md:col-span-2 md:row-span-2";
      case "medium":
        return "md:col-span-2 md:row-span-1";
      default:
        return "md:col-span-1 md:row-span-1";
    }
  };

  return (
    <section id="gallery" className="section-spacing bg-gradient-to-b from-background to-gray-950/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-primary">Visual Chronicles</span>
          </div>
          <h2 className="heading-2 mb-4">
            <span className="gradient-text">Gallery of Legends</span>
          </h2>
          <p className="body-large text-gray-400 max-w-3xl mx-auto">
            Witness the epic moments captured in the Solana blockchain history
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setFilter(category.value)}
              className={`relative px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category.value
                  ? 'text-white scale-105'
                  : 'text-gray-400 hover:text-white'
              }`}
              aria-label={`Filter by ${category.label}`}
            >
              {filter === category.value && (
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-full`} />
              )}
              <span className="relative z-10">{category.label}</span>
              {filter === category.value && (
                <span className="relative z-10 ml-2 inline-flex items-center justify-center w-5 h-5 text-xs bg-white/20 rounded-full">
                  {filteredImages.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] ${
          isLoaded ? 'animate-fade-in' : 'opacity-0'
        }`}>
          {filteredImages.map((item, index) => (
            <div 
              key={item.id} 
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${getSizeClasses(item.size)}`}
              onClick={() => setSelectedImage(item.src)}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Image Container */}
              <div className="relative w-full h-full overflow-hidden bg-gray-900">
                <img 
                  src={item.src} 
                  alt={`Gallery item ${item.id}`}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold">Solanian #{item.id}</p>
                        <p className="text-gray-300 text-sm capitalize">{item.category}</p>
                      </div>
                      <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    item.category === 'heroes' ? 'bg-green-500/20 text-green-300 border border-green-500/30' :
                    item.category === 'villains' ? 'bg-red-500/20 text-red-300 border border-red-500/30' :
                    'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 rounded-2xl transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary group">
            <span className="flex items-center gap-2">
              Load More
              <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-label="Image preview"
          aria-modal="true"
        >
          <div className="relative max-w-6xl max-h-[90vh] animate-scale-up">
            {/* Close Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              className="absolute -top-12 right-0 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-colors group"
              aria-label="Close preview"
            >
              <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image */}
            <img 
              src={selectedImage} 
              alt="Preview" 
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Navigation Arrows */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                // Handle previous image
              }}
              aria-label="Previous image"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                // Handle next image
              }}
              aria-label="Next image"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}