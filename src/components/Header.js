'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import styles from '../styles/Header.module.css';

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
        <nav className={styles.nav}>
          <Link href="#" className={styles.navLinkActive}>Início</Link>
          <Link href="#problems" className={styles.navLink}>Desafios</Link>
          <Link href="#platform" className={styles.navLink}>Solução</Link>
          <Link href="#features" className={styles.navLink}>Funcionalidades</Link>
          <Link href="#faq" className={styles.navLink}>Perguntas Frequentes</Link>
        </nav>

        {/* Actions */}
        <div className={styles.actions}>
          <Link href="#login" className={styles.loginLink}>
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
            <Link href="#login" className={styles.mobileLogin} onClick={() => setIsMenuOpen(false)}>Entrar</Link>
            <Link href="#pricing" className={styles.mobilePlansBtn} onClick={() => setIsMenuOpen(false)}>
              Nossos Planos
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
