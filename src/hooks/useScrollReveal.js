import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook để xử lý scroll reveal animation
 * @param {Object} options - Options cho Intersection Observer
 * @param {number} options.threshold - Ngưỡng để trigger animation (0-1)
 * @param {string} options.rootMargin - Margin để trigger sớm hơn hoặc muộn hơn
 * @param {boolean} options.once - Chỉ animate một lần hay mỗi lần scroll
 * @returns {Array} [ref, isVisible] - Ref để attach vào element và state isVisible
 */
export const useScrollReveal = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    once = true,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const currentElement = elementRef.current;
    if (!currentElement) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(currentElement);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentElement);

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin, once]);

  return [elementRef, isVisible];
};

export default useScrollReveal;

