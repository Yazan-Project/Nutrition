'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/DockNavigation.module.css';

export default function DockNavigation({ links }) {
  const mouseX = useRef(null);
  const [hovered, setHovered] = useState(false);
  const pathname = usePathname();

  const handleMouseMove = (e) => {
    mouseX.current = e.pageX;
    if (!hovered) setHovered(true);
  };

  const handleMouseLeave = () => {
    mouseX.current = null;
    setHovered(false);
  };

  return (
    <nav 
      className={styles.dockContainer}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {links.map((link, index) => (
        <DockItem 
          key={index} 
          href={link.href} 
          label={link.label} 
          mouseX={mouseX} 
          isHovered={hovered}
          isActive={pathname === link.href}
        />
      ))}
    </nav>
  );
}

function DockItem({ href, label, mouseX, isHovered, isActive }) {
  const ref = useRef(null);
  const [scale, setScale] = useState(1);

  // Use requestAnimationFrame for smooth animation loop
  const animate = () => {
    if (ref.current && mouseX.current !== null && isHovered) {
      const rect = ref.current.getBoundingClientRect();
      const itemCenterX = rect.left + rect.width / 2 + window.scrollX;
      
      // Calculate distance from mouse to item center
      const distance = Math.abs(mouseX.current - itemCenterX);
      
      // Calculate scale based on distance (Gaussian-like curve)
      // Max scale 1.5, base scale 1.0, influence radius 150px
      const scaleValue = 1 + Math.max(0, 0.5 * (1 - Math.min(distance / 150, 1)));
      
      setScale(scaleValue);
    } else {
      setScale(1);
    }
    requestAnimationFrame(animate);
  };

  // Start animation loop when hovered
  if (isHovered) {
    requestAnimationFrame(animate);
  }

  return (
    <Link 
      ref={ref}
      href={href} 
      className={`${styles.dockItem} ${isActive ? styles.dockItemActive : ''}`}
      style={{ 
        transform: `scale(${isHovered ? scale : 1})`,
        transformOrigin: 'bottom center'
      }}
    >
      {label}
    </Link>
  );
}
