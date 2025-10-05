import { ROLES } from "../content";

export function Join() {
  return (
    <section id="join" className="py-32 bg-gradient-to-b from-gray-950 to-gray-900/20">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="section-title">
            <span className="gradient-text">How to Join</span>
          </h2>
          <p className="section-subtitle">
            Three steps to become part of the Solanian swarm
          </p>
        </div>

        <div className="space-y-24">
          {/* Step 1: Pick a Role */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-12">Step 1: Pick a Role</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {ROLES.map((role, index) => (
                <button
                  key={index}
                  className="glass-card text-center hover:scale-105 transition-all duration-300"
                >
                  <div className="font-bold text-white text-xl mb-3">{role.name}</div>
                  <div className="text-gray-400 text-lg">{role.tag}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Claim Your Light Cone */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-12">Step 2: Claim Your Light Cone</h3>
            <div className="max-w-lg mx-auto space-y-6">
              <div>
                <label className="block text-left text-gray-300 mb-3 text-lg">Goal</label>
                <input
                  type="text"
                  placeholder="What will you build this week?"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-left text-gray-300 mb-3 text-lg">Timeline</label>
                <input
                  type="text"
                  placeholder="24h, 72h, 1 week?"
                  className="input-field"
                />
              </div>
              <div>
                <label className="block text-left text-gray-300 mb-3 text-lg">Proof Link</label>
                <input
                  type="text"
                  placeholder="GitHub repo, demo, or on-chain tx"
                  className="input-field"
                />
              </div>
            </div>
          </div>

          {/* Step 3: Ship & Earn */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-12">Step 3: Ship & Earn</h3>
            <div className="grid-responsive max-w-5xl mx-auto">
              <div className="glass-card text-center">
                <h4 className="text-2xl font-bold gradient-text mb-4">Points</h4>
                <p className="text-gray-300 text-lg">Build reputation through contributions</p>
              </div>
              <div className="glass-card text-center">
                <h4 className="text-2xl font-bold gradient-text mb-4">Bounties</h4>
                <p className="text-gray-300 text-lg">Complete missions for rewards</p>
              </div>
              <div className="glass-card text-center">
                <h4 className="text-2xl font-bold gradient-text mb-4">Rev-Share</h4>
                <p className="text-gray-300 text-lg">Earn from successful projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}