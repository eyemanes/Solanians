import { cn } from "../lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: 'default' | 'dark' | 'light' | 'gradient';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

export function GlassCard({ 
  children, 
  className, 
  hover = true,
  variant = 'default',
  padding = 'md',
  onClick
}: GlassCardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };

  const variantClasses = {
    default: 'glass-card',
    dark: 'glass-card-dark',
    light: 'bg-white/10 backdrop-blur-xl border border-white/20',
    gradient: 'bg-gradient-to-br from-primary/10 to-secondary/10 backdrop-blur-xl border border-primary/20',
  };

  const hoverClasses = hover ? 'hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 hover:scale-102' : '';

  return (
    <div 
      className={cn(
        variantClasses[variant],
        paddingClasses[padding],
        'transition-all duration-300 transform-gpu',
        hoverClasses,
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}