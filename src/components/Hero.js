import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Image using next/image for better control */}
      <div className={styles.bgImage}>
        <Image
          src="/Images/image_001.png"
          alt="Interior do estábulo com vacas"
          fill
          priority
          className={styles.coverImage}
          quality={100}
        />
      </div>

      {/* Overlay Gradient - Adjusted for better visibility of the image while keeping text readable */}
      <div className={styles.overlay}></div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Crie
          </h1>
          <h2 className={styles.subtitle}>
            A Nutrição ideal para <br/> o seu Gado Leiteiro
          </h2>
          <p className={styles.description}>
            Conheça o melhor sistema de nutrição bovina, e crie dietas precisas em minutos.
          </p>
          <div>
            <Link href="#start" className={styles.ctaBtn}>
              Iniciar o Teste Gratuito
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
