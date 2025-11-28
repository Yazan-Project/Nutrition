import { CheckCircle, BarChart2 } from 'lucide-react';
import Link from 'next/link';
import styles from '../styles/Platform.module.css';

export default function Platform() {
  return (
    <section id="platform" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Content */}
          <div>
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
            <div className={styles.dashboard}>
               <div className={styles.browserBar}>
                  <div className={`${styles.dot} ${styles.dotRed}`}></div>
                  <div className={`${styles.dot} ${styles.dotYellow}`}></div>
                  <div className={`${styles.dot} ${styles.dotGreen}`}></div>
               </div>
               <div className={styles.dashboardContent}>
                  <BarChart2 className={styles.dashboardIcon} />
                  <p className={styles.dashboardText}>Dashboard NutriLeite</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
