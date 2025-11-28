'use client';

import { Star, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from '../styles/Testimonial.module.css';

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "Desde que implementamos o NutriLeite na fazenda, conseguimos reduzir o custo da dieta em 15% e aumentamos a produção média por vaca. A facilidade de uso é impressionante.",
      name: "Carlos Mendes",
      role: "Produtor de Leite - MG"
    },
    {
      quote: "O controle nutricional ficou muito mais preciso. Consigo ver exatamente onde estou gastando e o retorno que cada animal está dando. Ferramenta indispensável.",
      name: "Ana Paula Silva",
      role: "Veterinária - SP"
    },
    {
      quote: "A equipe de suporte é fantástica e o sistema é muito intuitivo. Mesmo sem muita experiência com tecnologia, consegui organizar todos os dados do meu rebanho.",
      name: "Roberto Oliveira",
      role: "Produtor - RS"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className={styles.section}>
      <div className={styles.bgPattern}></div>
      <div className={styles.container}>
        <div className={styles.stars}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={24} fill="currentColor" />
          ))}
        </div>
        
        <div className={styles.carousel}>
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`${styles.slide} ${index === activeIndex ? styles.active : ''}`}
              style={{ display: index === activeIndex ? 'block' : 'none' }}
            >
              <blockquote className={styles.quote}>
                "{testimonial.quote}"
              </blockquote>

              <div className={styles.author}>
                <div className={styles.avatarWrapper}>
                  <div className={styles.avatar}>
                     <User />
                  </div>
                </div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === activeIndex ? styles.activeIndicator : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Ver depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
