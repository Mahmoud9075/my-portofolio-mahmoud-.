import { memo, forwardRef } from 'react';

/**
 * ScrollRevealItem Component
 * Wrapper component for scroll reveal animations
 * Applies animation classes with optional stagger delay
 */
export const ScrollRevealItem = forwardRef(({ 
  children, 
  className = "", 
  delay = 0,
  revealType = "reveal"
}) => {
  const revealClass = revealType === "reveal" ? "anim-reveal" : "anim-reveal";
  const delayClass = delay > 0 ? `anim-${revealType}-${Math.min(Math.floor(delay / 0.1), 4)}` : revealClass;
  
  return (
    <div 
      className={`${className} opacity-0 ${revealClass}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
});

ScrollRevealItem.displayName = 'ScrollRevealItem';
