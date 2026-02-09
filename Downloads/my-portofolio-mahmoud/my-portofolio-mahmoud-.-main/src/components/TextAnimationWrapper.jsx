import { memo } from 'react';
import { useLang } from '@/i18n';

/**
 * TextAnimationWrapper Component
 * Applies directional animation based on language
 * - Arabic (RTL): Slides from right to left
 * - English (LTR): Slides from left to right
 */
export const TextAnimationWrapper = memo(({ 
  children, 
  className = "", 
  delay = 0,
  useSlideAnimation = true 
}) => {
  const { lang } = useLang();
  
  if (!useSlideAnimation) {
    return <span className={className}>{children}</span>;
  }
  
  const isArabic = lang === "ar";
  const animationClass = isArabic 
    ? "anim-slide-in-right" 
    : "anim-slide-in-left";
  
  return (
    <span 
      className={`${className} opacity-0 ${animationClass}`}
      style={{
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </span>
  );
});

TextAnimationWrapper.displayName = 'TextAnimationWrapper';
