'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from '../styles/Header.module.css';
import DockNavigation from './DockNavigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
           {/* eslint-disable-next-line @next/next/no-img-element */}
           <img src="/Logo/Logo.jpg" alt="Nutrition Logo" className={styles.logoImg} />
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.nav}>
          <DockNavigation 
            links={[
              { href: "#", label: "Início" },
              { href: "#problems", label: "Desafios" },
              { href: "#platform", label: "Solução" },
              { href: "#features", label: "Funcionalidades" },
              { href: "#faq", label: "Perguntas Frequentes" }
            ]}
          />
        </div>

        {/* Actions */}
        <div className={styles.actions}>
          <Link href="https://g0bf628276fc698-cownutrition.adb.sa-saopaulo-1.oraclecloudapps.com/ords/r/cow_nutrition/nutrition/" className={styles.loginLink}>
            Entrar
          </Link>
          <Link href="#pricing" className={styles.plansBtn}>
            Nossos Planos
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileBtn}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="#" className={styles.mobileLinkActive} onClick={() => setIsMenuOpen(false)}>Início</Link>
          <Link href="#problems" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Desafios</Link>
          <Link href="#platform" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Solução</Link>
          <Link href="#features" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Funcionalidades</Link>
          <Link href="#faq" className={styles.mobileLink} onClick={() => setIsMenuOpen(false)}>Perguntas Frequentes</Link>
          <div className={styles.mobileActions}>
            <Link href="https://g0bf628276fc698-cownutrition.adb.sa-saopaulo-1.oraclecloudapps.com/ords/r/cow_nutrition/nutrition/" className={styles.mobileLogin} onClick={() => setIsMenuOpen(false)}>Entrar</Link>
            <Link href="#pricing" className={styles.mobilePlansBtn} onClick={() => setIsMenuOpen(false)}>
              Nossos Planos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
