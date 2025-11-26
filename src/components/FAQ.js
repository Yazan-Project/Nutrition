'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from '../styles/FAQ.module.css';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Preciso de internet para usar o sistema?",
      answer: "O sistema funciona melhor com internet para sincronização em tempo real, mas nosso aplicativo mobile possui modo offline para coleta de dados no campo."
    },
    {
      question: "Posso testar antes de comprar?",
      answer: "Sim! Oferecemos 14 dias de teste gratuito com acesso a todas as funcionalidades do plano Profissional."
    },
    {
      question: "Como funciona o suporte?",
      answer: "Oferecemos suporte via chat, e-mail e WhatsApp. Clientes dos planos Profissional e Empresarial têm prioridade no atendimento."
    },
    {
      question: "É difícil migrar meus dados atuais?",
      answer: "Não. Temos ferramentas de importação de planilhas Excel e nossa equipe de sucesso do cliente auxilia em todo o processo de migração."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Perguntas Frequentes</h2>
          <p className={styles.description}>Tire suas dúvidas sobre o NutriLeite</p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.item}>
              <button 
                className={styles.questionBtn}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {openIndex === index && (
                <div className={styles.answer}>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
