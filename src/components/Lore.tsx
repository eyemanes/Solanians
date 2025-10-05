import { useState } from "react";
import { LORE_CONTENT } from "../content";

export function Lore() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (index: number) => {
    if (index !== activeIndex) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsAnimating(false);
      }, 150);
    }
  };

  return (
    <section id="lore" className="section-spacing bg-gradient-to-b from-background via-gray-950/50 to-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239945FF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-6">
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
            </svg>
            <span className="text-sm font-medium text-primary">Epic Tales</span>
          </div>
          <h2 className="heading-2 mb-4">
            <span className="gradient-text">The Legendary Lore</span>
          </h2>
          <p className="body-large text-gray-400 max-w-3xl mx-auto">
            Chronicles of the eternal battle between Solanians and their rivals
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {LORE_CONTENT.map((lore, index) => (
              <button
                key={index}
                onClick={() => handleTabChange(index)}
                className={`relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform ${
                  activeIndex === index
                    ? 'scale-105'
                    : 'hover:scale-102'
                }`}
                aria-selected={activeIndex === index}
                role="tab"
              >
                {/* Background */}
                <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-r from-primary to-secondary opacity-100'
                    : 'bg-gray-800/50 backdrop-blur-sm opacity-100 hover:bg-gray-700/50'
                }`} />
                
                {/* Border */}
                <div className={`absolute inset-0 rounded-2xl border transition-all duration-300 ${
                  activeIndex === index
                    ? 'border-transparent'
                    : 'border-white/10 hover:border-primary/50'
                }`} />
                
                {/* Text */}
                <span className={`relative z-10 ${
                  activeIndex === index ? 'text-white' : 'text-gray-300'
                }`}>
                  {lore.title}
                </span>

                {/* Active Indicator */}
                {activeIndex === index && (
                  <div className="absolute -top-1 -right-1">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Content Card */}
          <div className={`relative transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="glass-card p-8 md:p-12">
              {/* Title with Icon */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {activeIndex + 1}
                  </span>
                </div>
                <h3 className="heading-3 gradient-text">
                  {LORE_CONTENT[activeIndex].title}
                </h3>
              </div>

              {/* Description */}
              <p className="body-large text-gray-300 mb-10 leading-relaxed">
                {LORE_CONTENT[activeIndex].description}
              </p>

              {/* Battle Comparison */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-green-500/5 rounded-2xl" />
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {LORE_CONTENT[activeIndex].vs.split('\n').map((line, lineIndex) => {
                      const isSolanian = line.includes('Solanians');
                      const isBinancian = line.includes('Binancians');
                      
                      return (
                        <div 
                          key={lineIndex}
                          className={`relative p-4 rounded-xl border ${
                            isSolanian 
                              ? 'bg-green-500/5 border-green-500/20' 
                              : isBinancian 
                              ? 'bg-red-500/5 border-red-500/20'
                              : 'bg-gray-800/30 border-white/5'
                          }`}
                        >
                          {/* Icon */}
                          <div className="absolute -top-3 -right-3">
                            {isSolanian && (
                              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                              </div>
                            )}
                            {isBinancian && (
                              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                              </div>
                            )}
                          </div>
                          
                          <p className={`text-base leading-relaxed ${
                            isSolanian 
                              ? 'text-green-300' 
                              : isBinancian 
                              ? 'text-red-300'
                              : 'text-gray-400'
                          }`}>
                            {line}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}