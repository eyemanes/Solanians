import { HERO_CONTENT } from "../content";
import { useState, useEffect } from "react";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      role="banner"
      aria-label="Hero section"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(153, 69, 255, 0.15) 0%, transparent 50%),
                              radial-gradient(circle at ${100 - mousePosition.x}% ${100 - mousePosition.y}%, rgba(20, 241, 149, 0.15) 0%, transparent 50%),
                              url('/images/Hero.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${10 + Math.random() * 20}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div 
          className={`max-w-5xl mx-auto text-center space-y-8 ${
            isLoaded ? 'animate-scale-up' : 'opacity-0'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-primary">Builders at the Speed of Light</span>
          </div>

          {/* Title */}
          <h1 className="heading-1 font-heading">
            <span className="gradient-text inline-block transform hover:scale-105 transition-transform duration-300">
              {HERO_CONTENT.title}
            </span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="heading-4 text-primary-200 max-w-3xl mx-auto">
            <span className="gradient-text-subtle">{HERO_CONTENT.subtitle}</span>
          </h2>
          
          {/* Description */}
          <p className="body-large text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {HERO_CONTENT.description}
          </p>

          {/* Contract Address */}
          <div className="pt-8 max-w-2xl mx-auto">
            <div className="glass-card p-6">
              <div className="text-center space-y-4">
                <h3 className="text-lg font-semibold text-primary">Contract Address</h3>
                <div className="flex items-center justify-center gap-3">
                  <code className="text-sm font-mono bg-gray-900/50 px-3 py-2 rounded-lg border border-gray-700 text-gray-300 break-all">
                    2RfXjaiepngcBuGgPLtdnH22g68eetpgzCDX44Hnpump
                  </code>
                  <button 
                    className="btn-ghost p-2 hover:bg-primary/10 rounded-lg transition-colors"
                    onClick={() => {
                      navigator.clipboard.writeText('2RfXjaiepngcBuGgPLtdnH22g68eetpgzCDX44Hnpump');
                      // You could add a toast notification here
                    }}
                    aria-label="Copy contract address"
                  >
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-gray-400">Click the copy icon to copy the contract address</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}