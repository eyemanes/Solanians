import { VALUES } from "../content";

export function Values() {
  return (
    <section id="values" className="py-32 bg-gradient-to-b from-gray-900/20 to-gray-950">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="section-title">
            <span className="gradient-text">Core Values</span>
          </h2>
          <p className="section-subtitle">
            The principles that guide the Solanian way
          </p>
        </div>

        <div className="grid-responsive">
          {VALUES.map((value, index) => (
            <div key={index} className="glass-card">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold gradient-text">{value.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}