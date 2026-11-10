import React from 'react';

/**
 * USL Studio-Grade Scroll Reveal Component
 * Uses IntersectionObserver with refined cubic-bezier easing
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 800,
  threshold = 0.05,
  className = '',
  width = 'w-full'
}) {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -10px 0px'
      }
    );

    observer.observe(element);
    return () => { if (element) observer.unobserve(element); };
  }, [threshold]);

  const getTransform = () => {
    if (isVisible) return 'none';
    switch (direction) {
      case 'up': return 'translate3d(0, 32px, 0)';
      case 'down': return 'translate3d(0, -32px, 0)';
      case 'left': return 'translate3d(-24px, 0, 0)';
      case 'right': return 'translate3d(24px, 0, 0)';
      case 'scale': return 'scale3d(0.95, 0.95, 1)';
      default: return 'none';
    }
  };

  return (
    <div
      ref={ref}
      className={`${width} ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
}

/**
 * USL Studio Signature Masked Text Rise
 * Hides text behind overflow-hidden mask and smoothly slides it up into view
 */
export function MaskRise({ children, delay = 0, className = '', as: Component = 'span' }) {
  const ref = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -10px 0px'
      }
    );

    observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <Component ref={ref} className={`block overflow-hidden pb-[0.25em] -mb-[0.25em] ${className}`}>
      <span
        className="block pb-[0.05em] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(125%)',
          transitionDelay: `${delay}ms`,
          willChange: 'transform'
        }}
      >
        {children}
      </span>
    </Component>
  );
}
