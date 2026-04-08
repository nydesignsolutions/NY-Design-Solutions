// Shared layout primitives and small UI helpers used across components.
const { useState, useEffect, useRef } = React;

// A semantic <section> with consistent scroll-margin for anchor links.
const Section = ({ id, className = '', children }) => (
  <section id={id} className={`scroll-mt-20 ${className}`}>
    {children}
  </section>
);

// Centered, max-width content container.
const Container = ({ children, className = '' }) => (
  <div className={`max-w-6xl mx-auto px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

// Wraps children in a fade-up animation that triggers when scrolled into view.
const FadeUp = ({ children, delay = 0 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className="fade-up">
      {children}
    </div>
  );
};

// Renders an outline icon from the ICONS map.
const Icon = ({ path, className = 'w-6 h-6' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.8}
    stroke="currentColor"
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);
