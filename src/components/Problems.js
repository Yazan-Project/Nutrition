import { AlertTriangle, FileX, TrendingDown } from 'lucide-react';
import styles from '../styles/Problems.module.css';

export default function Problems() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            A gestão manual está custando caro?
          </h2>
          <p className={styles.description}>
            Planilhas confusas, anotações em papel e falta de controle podem estar prejudicando a rentabilidade da sua produção.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.imageContainer}>
             {/* Placeholder for Problem Image */}
             <div className={styles.imageContent}>
                <span className={styles.imageIcon}>📝</span>
                <p className={styles.imageText}>Imagem: Produtor Estressado com Papéis</p>
             </div>
          </div>
          
          <div className={styles.content}>
            <div className={styles.item}>
              <div className={`${styles.iconWrapper} ${styles.iconRed}`}>
                <FileX size={24} />
              </div>
              <div>
                <h3 className={styles.itemTitle}>Informações Descentralizadas</h3>
                <p className={styles.itemText}>Dados espalhados em cadernos e planilhas dificultam a análise histórica e a tomada de decisão rápida.</p>
              </div>
            </div>
            
            <div className={styles.item}>
              <div className={`${styles.iconWrapper} ${styles.iconOrange}`}>
                <AlertTriangle size={24} />
              </div>
              <div>
                <h3 className={styles.itemTitle}>Erros Nutricionais</h3>
                <p className={styles.itemText}>Falta de precisão no controle das dietas pode levar a queda na produção e problemas de saúde no rebanho.</p>
              </div>
            </div>

            <div className={styles.item}>
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
