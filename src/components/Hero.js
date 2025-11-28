'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Hero() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className={styles.hero} ref={ref}>
      {/* Background Image using next/image for better control */}
      <div className={styles.bgImage}>
        <Image
          src="/Images/image_001.png"
          alt="Interior do estábulo com vacas"
          fill
          priority
          className={`${styles.coverImage} ${isVisible ? 'animate-scale-in' : 'animate-hidden'}`}
          quality={100}
        />
      </div>

      {/* Overlay Gradient - Adjusted for better visibility of the image while keeping text readable */}
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={`${styles.title} ${isVisible ? 'animate-fade-in-up' : 'animate-hidden'}`}>
            Crie
          </h1>
          <h2 className={`${styles.subtitle} ${isVisible ? 'animate-fade-in-up delay-100' : 'animate-hidden'}`}>
            A Nutrição ideal para <br/> o seu Gado Leiteiro
          </h2>
          <p className={`${styles.description} ${isVisible ? 'animate-fade-in-up delay-200' : 'animate-hidden'}`}>
            Conheça o melhor sistema de nutrição bovina, e crie dietas precisas em minutos.
          </p>
          <div className={isVisible ? 'animate-fade-in-up delay-300' : 'animate-hidden'}>
            <Link href="#start" className={styles.ctaBtn}>
              Iniciar o Teste Gratuito
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
