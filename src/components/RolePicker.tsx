import { useEffect, useState } from "react";
import { ROLES } from "../content";

interface RolePickerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onRoleSelect: (role: string) => void;
}

export function RolePicker({ open, onOpenChange, onRoleSelect }: RolePickerProps) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setIsAnimating(true);
      // Try to get existing role from localStorage with error handling
      try {
        const storedRole = localStorage.getItem('selectedRole');
        if (storedRole) {
          setSelectedRole(storedRole);
        }
      } catch (error) {
        console.error('Error reading from localStorage:', error);
      }
    }
  }, [open]);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    
    // Save to localStorage with error handling
    try {
      localStorage.setItem('selectedRole', role);
    } catch (error) {
      console.error('Error saving to localStorage:', error);
    }
    
    // Animate out before closing
    setIsAnimating(false);
    setTimeout(() => {
      onRoleSelect(role);
      onOpenChange(false);
    }, 300);
  };

  if (!open) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${
        isAnimating ? 'animate-fade-in' : 'animate-fade-out'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="role-picker-title"
    >
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md"
        onClick={() => {
          setIsAnimating(false);
          setTimeout(() => onOpenChange(false), 300);
        }}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className={`relative max-w-4xl w-full ${
        isAnimating ? 'animate-scale-up' : 'scale-95 opacity-0'
      }`}>
        <div className="glass-card p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h2 id="role-picker-title" className="heading-3 mb-4">
              <span className="gradient-text">Choose Your Path</span>
            </h2>
            <p className="body-large text-gray-400 max-w-2xl mx-auto">
              Select how you'll contribute to the Solanian ecosystem and shape the future of DeFi
            </p>
          </div>

          {/* Roles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {ROLES.map((role, index) => {
              const isSelected = selectedRole === role.name;
              const gradients = [
                'from-primary to-secondary',
                'from-secondary to-accent',
                'from-accent-tertiary to-primary',
                'from-yellow-400 to-orange-500',
                'from-blue-400 to-purple-500',
                'from-green-400 to-teal-500',
              ];
              
              return (
                <button
                  key={index}
                  onClick={() => handleRoleSelect(role.name)}
                  className={`relative group transition-all duration-300 ${
                    isSelected ? 'scale-105' : 'hover:scale-102'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Card Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % gradients.length]} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`} />
                  
                  {/* Card Border */}
                  <div className={`absolute inset-0 rounded-2xl border-2 transition-all ${
                    isSelected 
                      ? 'border-primary shadow-lg shadow-primary/20' 
                      : 'border-white/10 group-hover:border-white/20'
                  }`} />
                  
                  {/* Card Content */}
                  <div className="relative glass-card-dark p-6 h-full">
                    {/* Icon/Number */}
                    <div className={`w-12 h-12 mb-4 mx-auto bg-gradient-to-br ${gradients[index % gradients.length]} rounded-xl flex items-center justify-center`}>
                      <span className="text-2xl font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                    
                    {/* Role Name */}
                    <h3 className="text-xl font-bold text-white mb-2">
                      {role.name}
                    </h3>
                    
                    {/* Role Tag */}
                    <p className="text-sm text-gray-400 mb-4">
                      {role.tag}
                    </p>
                    
                    {/* Selected Indicator */}
                    {isSelected && (
                      <div className="absolute top-3 right-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    )}
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Role Info */}
          {selectedRole && (
            <div className="glass-card-dark p-6 mb-8 animate-slide-up">
              <div className="flex items-center gap-3 mb-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm text-gray-400">Selected Role:</span>
                <span className="font-semibold text-white">{selectedRole}</span>
              </div>
              <p className="text-sm text-gray-500">
                Great choice! You can change your role anytime from your profile settings.
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {selectedRole && (
              <button
                onClick={() => handleRoleSelect(selectedRole)}
                className="btn-primary"
              >
                Confirm Selection
              </button>
            )}
            <button
              onClick={() => {
                setIsAnimating(false);
                setTimeout(() => onOpenChange(false), 300);
              }}
              className="btn-secondary"
            >
              {selectedRole ? 'Choose Different Role' : 'Skip for Now'}
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => {
            setIsAnimating(false);
            setTimeout(() => onOpenChange(false), 300);
          }}
          className="absolute -top-4 -right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-red-500 transition-colors group"
          aria-label="Close dialog"
        >
          <svg className="w-5 h-5 text-white group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}