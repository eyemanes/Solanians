import { useState } from "react";

export function WhoAreSolanians() {
  const [activeCard, setActiveCard] = useState(0);

  const solanianProfiles = [
    {
      name: "Genesis Solanian",
      age: "400ms",
      species: "Crypto Rebel",
      status: "Active Builder",
      enemy: "Binancians",
      power: "Decentralized",
      quote: "We will rule over the Binancians!",
      image: "/images/7.png",
      color: "from-primary to-secondary",
      skills: ["DeFi", "NFTs", "Smart Contracts"],
    },
    {
      name: "Shadow Solanian",
      age: "350ms",
      species: "Protocol Hacker",
      status: "Elite Developer",
      enemy: "Ethereans",
      power: "Speed Force",
      quote: "Building at the speed of light!",
      image: "/images/2.png",
      color: "from-secondary to-accent",
      skills: ["Rust", "Web3", "Consensus"],
    },
    {
      name: "Quantum Solanian",
      age: "500ms",
      species: "Chain Master",
      status: "Architect",
      enemy: "Maximalists",
      power: "Parallel Processing",
      quote: "Scalability is our superpower!",
      image: "/images/3.png",
      color: "from-accent-tertiary to-primary",
      skills: ["Architecture", "Optimization", "Security"],
    },
  ];

  const currentProfile = solanianProfiles[activeCard];

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">
            <span className="gradient-text">Who are Solanians?</span>
          </h2>
          <p className="body-large text-gray-400 max-w-2xl mx-auto">
            Meet the rebels building the future of decentralized finance on Solana
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Profile Card */}
          <div className="relative group">
            <div className={`absolute inset-0 bg-gradient-to-r ${currentProfile.color} rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`} />
            <div className="relative glass-card p-8 h-full">
              {/* Profile Header */}
              <div className="flex items-start gap-6 mb-8">
                {/* Avatar */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentProfile.color} rounded-2xl blur-lg opacity-50`} />
                  <img 
                    src={currentProfile.image} 
                    alt={currentProfile.name}
                    className="relative w-32 h-32 object-cover rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-background">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                {/* Basic Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{currentProfile.name}</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    {currentProfile.status}
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-900/50 rounded-xl p-4 border border-white/5">
                  <div className="text-xs text-gray-500 mb-1">Age</div>
                  <div className="text-lg font-semibold gradient-text">{currentProfile.age}</div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-white/5">
                  <div className="text-xs text-gray-500 mb-1">Species</div>
                  <div className="text-lg font-semibold text-white">{currentProfile.species}</div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-white/5">
                  <div className="text-xs text-gray-500 mb-1">Enemy</div>
                  <div className="text-lg font-semibold text-red-400">{currentProfile.enemy}</div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-white/5">
                  <div className="text-xs text-gray-500 mb-1">Power</div>
                  <div className="text-lg font-semibold text-purple-400">{currentProfile.power}</div>
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <div className="text-xs text-gray-500 mb-2">Skills</div>
                <div className="flex flex-wrap gap-2">
                  {currentProfile.skills.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="pt-6 border-t border-white/10">
                <div className="relative">
                  <svg className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-lg italic text-gray-300 pl-8">
                    {currentProfile.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Selection Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-300 mb-6">Choose Your Fighter</h3>
            {solanianProfiles.map((profile, index) => (
              <button
                key={index}
                onClick={() => setActiveCard(index)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 ${
                  activeCard === index
                    ? 'glass-card border-primary/50 scale-105'
                    : 'glass-card-dark border-white/5 hover:border-primary/30 hover:scale-102'
                }`}
              >
                <div className="flex items-center gap-4">
                  <img 
                    src={profile.image} 
                    alt={profile.name}
                    className="w-16 h-16 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-white">{profile.name}</div>
                    <div className="text-sm text-gray-400">{profile.species}</div>
                  </div>
                  {activeCard === index && (
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  )}
                </div>
              </button>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}