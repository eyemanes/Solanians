import { useState } from "react";
import { Search } from "lucide-react";
import { GLOSSARY } from "../content";
import { GlassCard } from "./GlassCard";

export function GlossarySearch() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredGlossary = GLOSSARY.filter(item =>
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.def.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40" size={20} />
        <input
          type="text"
          placeholder="Search glossary..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gray-900/30 border border-gray-800/50 rounded-2xl text-gray-100 placeholder:text-gray-400 focus:outline-none focus:border-purple-500/50 focus:bg-gray-900/50 transition-all"
        />
      </div>

      <div className="space-y-3">
        {filteredGlossary.map((item) => (
          <GlassCard key={item.term} hover={false}>
            <div className="space-y-2">
              <h3 className="font-semibold text-lg gradient-text">{item.term}</h3>
              <p className="text-gray-300">{item.def}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
