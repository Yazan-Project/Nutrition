import { Star, User } from 'lucide-react';
import styles from '../styles/Testimonial.module.css';

export default function Testimonial() {
  return (
    <section className={styles.section}>
      <div className={styles.bgPattern}></div>
      <div className={styles.container}>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} fill="currentColor" />
          ))}
        </div>
        
        <blockquote className={styles.quote}>
          "Desde que implementamos o NutriLeite na fazenda, conseguimos reduzir o custo da dieta em 15% e aumentamos a produção média por vaca. A facilidade de uso é impressionante."
        </blockquote>

        <div className={styles.author}>
          <div className={styles.avatarWrapper}>
            {/* Placeholder for User Photo */}
            <div className={styles.avatar}>
               <User />
            </div>
          </div>
          <div className={styles.authorInfo}>
            <div className={styles.authorName}>Carlos Mendes</div>
            <div className={styles.authorRole}>Produtor de Leite - MG</div>
          </div>
        </div>
      </div>
    </section>
  );
}
