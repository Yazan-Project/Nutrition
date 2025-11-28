'use client';

import { useRef, useState } from 'react';
import styles from '../styles/SpotlightCard.module.css';

export default function SpotlightCard({ children, className = '' }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`${styles.cardContainer} ${className}`}
    >
      <div
        className={styles.spotlight}
        style={{
          opacity,
          '--mouse-x': `${position.x}px`,
          '--mouse-y': `${position.y}px`,
        }}
      />
      {children}
    </div>
  );
}
