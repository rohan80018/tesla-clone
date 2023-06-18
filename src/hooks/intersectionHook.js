import { useState, useEffect, useRef } from "react";


export default function FadeInSection(props) {
  const [isVisible, setVisible] =useState(true);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (
    <div
      className={`${isVisible ? 'transition-opacity ease-in duration-1000 opacity-100' : 'opacity-0'}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}
// transition-opacity ease-in duration-700 opacity-100
