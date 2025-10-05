import { useState } from "react";
import { SHOWCASE } from "../content";
import { GlassCard } from "./GlassCard";
import { GradientButton } from "./GradientButton";
import { ExternalLink, Github } from "lucide-react";

export function ShowcaseMarquee() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="overflow-hidden">
      <div 
        className={`flex space-x-6 animate-marquee ${isHovered ? 'paused' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {[...SHOWCASE, ...SHOWCASE].map((project, index) => (
          <div key={`${project.title}-${index}`} className="flex-shrink-0 w-80">
            <GlassCard className="h-full">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <GradientButton size="sm" variant="ghost" className="flex-1">
                    <Github size={16} className="mr-2" />
                    View Repo
                  </GradientButton>
                  <GradientButton size="sm" className="flex-1">
                    <ExternalLink size={16} className="mr-2" />
                    Demo
                  </GradientButton>
                </div>
              </div>
            </GlassCard>
          </div>
        ))}
      </div>
    </div>
  );
}
