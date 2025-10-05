import { cn } from "../lib/utils";
import type { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'subtle' | 'vibrant' | 'warm' | 'cool';
  animate?: boolean;
}

export function GradientText({ 
  children, 
  className,
  variant = 'default',
  animate = false
}: GradientTextProps) {
  const variantClasses = {
    default: 'gradient-text',
    subtle: 'gradient-text-subtle',
    vibrant: 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent',
    warm: 'bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent',
    cool: 'bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent',
  };

  return (
    <span className={cn(
      variantClasses[variant],
      animate && 'animate-gradient-shift',
      className
    )}>
      {children}
    </span>
  );
}