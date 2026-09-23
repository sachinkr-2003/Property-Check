import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-3 h-3 bg-brand-accent rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-75 ease-out"
        style={{ 
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0) scale(${isHovering ? 2 : 1})`,
        }}
      />
      <div 
        className="fixed top-0 left-0 w-8 h-8 border border-brand-accent rounded-full pointer-events-none z-[9998] mix-blend-difference transition-transform duration-300 ease-out"
        style={{ 
          transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;
