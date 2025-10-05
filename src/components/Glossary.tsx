import { useState } from "react";
import { GLOSSARY } from "../content";

export function Glossary() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGlossary = GLOSSARY.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.def.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="glossary" className="py-32 bg-gradient-to-b from-gray-900/20 to-gray-950">
      <div className="container">
        <div className="text-center mb-20">
          <h2 className="section-title">
            <span className="gradient-text">Glossary</span>
          </h2>
          <p className="section-subtitle">
            The language of the Solanian cosmos
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <input
            type="text"
            placeholder="Search terms..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field text-lg"
          />
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {filteredGlossary.map((item, index) => (
            <div key={index} className="glass-card">
              <h3 className="text-2xl font-bold gradient-text mb-4">{item.term}</h3>
              <p className="text-gray-300 text-lg leading-relaxed">{item.def}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}