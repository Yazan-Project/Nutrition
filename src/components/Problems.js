'use client';

import { AlertTriangle, FileX, TrendingDown } from 'lucide-react';
import Image from 'next/image';
import styles from '../styles/Problems.module.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Problems() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="problems" className={styles.section} ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={`${styles.title} ${isVisible ? 'animate-fade-in-up' : 'animate-hidden'}`}>
            A gestão manual está custando caro?
          </h2>
          <p className={`${styles.description} ${isVisible ? 'animate-fade-in-up delay-100' : 'animate-hidden'}`}>
            Planilhas confusas, anotações em papel e falta de controle podem estar prejudicando a rentabilidade da sua produção.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.imageContainer} ${isVisible ? 'animate-scale-in delay-200' : 'animate-hidden'}`}>
             {/* Placeholder for Problem Image */}
             <div className={styles.imageContent}>
                <Image 
                  src="/Images/Image_002.png" 
                  alt="Produtor Estressado com Papéis" 
                  width={500} 
                  height={400} 
                  className={styles.problemImage}
                />
             </div>
          </div>
          
          <div className={styles.content}>
            <div className={`${styles.item} ${isVisible ? 'animate-fade-in-up delay-300' : 'animate-hidden'}`}>
              <div className={`${styles.iconWrapper} ${styles.iconRed}`}>
                <FileX size={24} />
              </div>
              <div>
                <h3 className={styles.itemTitle}>Informações Descentralizadas</h3>
                <p className={styles.itemText}>Dados espalhados em cadernos e planilhas dificultam a análise histórica e a tomada de decisão rápida.</p>
              </div>
            </div>
            
            <div className={`${styles.item} ${isVisible ? 'animate-fade-in-up delay-400' : 'animate-hidden'}`}>
              <div className={`${styles.iconWrapper} ${styles.iconOrange}`}>
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className={styles.itemTitle}>Erros Nutricionais</h3>
                <p className={styles.itemText}>Falta de precisão no controle das dietas pode levar a queda na produção e problemas de saúde no rebanho.</p>
              </div>
            </div>

            <div className={`${styles.item} ${isVisible ? 'animate-fade-in-up delay-500' : 'animate-hidden'}`}>
              <div className={`${styles.iconWrapper} ${styles.iconYellow}`}>
                <TrendingDown size={24} />
              </div>
              <div>
                <h3 className={styles.itemTitle}>Prejuízos Invisíveis</h3>
                <p className={styles.itemText}>Sem métricas claras, é impossível identificar onde o dinheiro está sendo desperdiçado.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
