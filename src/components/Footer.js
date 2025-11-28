import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Logo/Logo.jpg" alt="Nutrition Logo" className={styles.logoImg} />
            </div>
            <p className={styles.brandText}>
              Transformando a pecuária leiteira através da tecnologia e nutrição de precisão.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className={styles.columnTitle}>Links Rápidos</h4>
            <ul className={styles.linkList}>
              <li><Link href="#" className={styles.link}>Início</Link></li>
              <li><Link href="#features" className={styles.link}>Funcionalidades</Link></li>
              <li><Link href="#pricing" className={styles.link}>Planos</Link></li>
              <li><Link href="#faq" className={styles.link}>FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className={styles.columnTitle}>Contato</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <Mail size={18} />
                <span>contato@nutrileite.com.br</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={18} />
                <span>(31) 99999-9999</span>
              </li>
              <li className={styles.contactItem}>
                <MapPin size={18} />
                <span>Belo Horizonte, MG</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className={styles.columnTitle}>Redes Sociais</h4>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink}><Instagram size={20} /></a>
              <a href="#" className={styles.socialLink}><Facebook size={20} /></a>
              <a href="#" className={styles.socialLink}><Linkedin size={20} /></a>
              <a href="#" className={styles.socialLink}><Twitter size={20} /></a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Nutrition. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
