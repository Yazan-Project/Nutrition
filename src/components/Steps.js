import { UserPlus, Settings, BarChart } from 'lucide-react';
import styles from '../styles/Steps.module.css';

export default function Steps() {
  const steps = [
    {
      number: 1,
      title: "Crie sua conta gratuita",
      description: "Cadastre-se em menos de 2 minutos. Sem necessidade de cartão de crédito para começar."
    },
    {
      number: 2,
      title: "Configure seu rebanho",
      description: "Importe seus dados ou cadastre seus animais manualmente. Nossa equipe pode ajudar na migração."
    },
    {
      number: 3,
      title: "Comece a economizar",
      description: "Receba as primeiras recomendações de dieta e veja a redução de custos na prática."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.imageWrapper}>
             {/* Placeholder for Steps Image */}
             <div className={styles.imagePlaceholder}>
                <span className="text-6xl mb-4">🚀</span>
                <p>Imagem: Fazendeiro usando o App</p>
             </div>
          </div>
          
          <div className={styles.content}>
            <div className={styles.header}>
              <span className={styles.label}>Comece Agora</span>
              <h2 className={styles.title}>
                Pronto para transformar sua produção?
              </h2>
              <p className={styles.description}>
                Junte-se a mais de 500 produtores que já estão lucrando mais com o NutriLeite.
              </p>
            </div>

            <div className={styles.stepList}>
              {steps.map((step, index) => (
                <div key={index} className={styles.stepItem}>
                  <div className={styles.stepNumber}>
                    {step.number}
                  </div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepText}>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
