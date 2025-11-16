import { useScrollReveal } from '../../hooks/useScrollReveal';

/**
 * Component wrapper để thêm scroll reveal animation
 * @param {ReactNode} children - Nội dung cần wrap
 * @param {string} animation - Loại animation: 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'fade', 'scale', 'slide-up', 'slide-down'
 * @param {number} delay - Delay animation (ms)
 * @param {number} duration - Duration animation (ms)
 * @param {number} threshold - Ngưỡng để trigger animation (0-1)
 * @param {string} rootMargin - Margin để trigger sớm hơn
 * @param {boolean} once - Chỉ animate một lần
 * @returns {JSX.Element}
 */
function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
  className = '',
}) {
  const [elementRef, isVisible] = useScrollReveal({
    threshold,
    rootMargin,
    once,
  });

  const animationClasses = {
    'fade-up': 'opacity-0 translate-y-4 sm:translate-y-6 md:translate-y-8',
    'fade-down': 'opacity-0 -translate-y-4 sm:-translate-y-6 md:-translate-y-8',
    'fade-left': 'opacity-0 translate-x-4 sm:translate-x-6 md:translate-x-8',
    'fade-right': 'opacity-0 -translate-x-4 sm:-translate-x-6 md:-translate-x-8',
    'fade': 'opacity-0',
    'scale': 'opacity-0 scale-95',
    'slide-up': 'opacity-0 translate-y-6 sm:translate-y-8 md:translate-y-12',
    'slide-down': 'opacity-0 -translate-y-6 sm:-translate-y-8 md:-translate-y-12',
  };

  const visibleClasses = {
    'fade-up': 'opacity-100 translate-y-0',
    'fade-down': 'opacity-100 translate-y-0',
    'fade-left': 'opacity-100 translate-x-0',
    'fade-right': 'opacity-100 translate-x-0',
    'fade': 'opacity-100',
    'scale': 'opacity-100 scale-100',
    'slide-up': 'opacity-100 translate-y-0',
    'slide-down': 'opacity-100 translate-y-0',
  };

  const baseClass = animationClasses[animation] || animationClasses['fade-up'];
  const visibleClass = visibleClasses[animation] || visibleClasses['fade-up'];

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out will-change-transform ${baseClass} ${
        isVisible ? visibleClass : ''
      } ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;

