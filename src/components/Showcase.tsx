import { SHOWCASE } from "../content";

export function Showcase() {
  return (
    <section id="showcase" className="py-32 bg-gradient-to-b from-gray-900/20 to-gray-950">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="section-title">
            <span className="gradient-text">Showcase</span>
          </h2>
          <p className="section-subtitle">
            Projects built by the Solanian swarm
          </p>
        </div>

        <div className="grid-responsive">
          {SHOWCASE.map((project, index) => (
            <div key={index} className="glass-card">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="btn-primary">
                    View Repo
                  </button>
                  <button className="btn-secondary">
                    Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}