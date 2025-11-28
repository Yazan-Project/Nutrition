'use client';

import { CheckCircle, BarChart2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Platform.module.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Platform() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="platform" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Content */}
          <div className={isVisible ? 'animate-fade-in-up' : 'animate-hidden'}>
            <h2 className={styles.title}>
              Tudo o que você precisa em um só lugar
            </h2>
            <p className={styles.description}>
              Nossa plataforma centraliza todas as informações do seu rebanho, permitindo um controle total sobre a nutrição e o desempenho dos animais.
            </p>
            
            <div className={styles.list}>
              {[
                "Formulação de dietas precisas",
                "Controle de estoque de insumos",
                "Relatórios de desempenho financeiro",
                "Histórico de saúde do rebanho"
              ].map((item, index) => (
                <div key={index} className={styles.listItem}>
                  <CheckCircle size={20} className={styles.checkIcon} />
                  <span className={styles.listText}>{item}</span>
                </div>
              ))}
            </div>

            <Link href="#start" className={styles.btn}>
              Conhecer a Plataforma
            </Link>
          </div>

          {/* Image Placeholder */}
          <div className={styles.imageWrapper}>
            <div className={`${styles.imageContainer} ${isVisible ? 'animate-scale-in delay-200' : 'animate-hidden'}`}>
               <Image 
                  src="/Images/Image_003.png" 
                  alt="Plataforma NutriLeite" 
                  width={600} 
                  height={450} 
                  className={styles.platformImage}
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
