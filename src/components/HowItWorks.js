import { UserPlus, Activity, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import styles from '../styles/HowItWorks.module.css';

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus size={32} />,
      title: "1. Cadastre",
      description: "Insira os dados do seu rebanho e dos alimentos disponíveis na sua propriedade."
    },
    {
      icon: <Activity size={32} />,
      title: "2. Monitore",
      description: "Acompanhe o consumo e a saúde dos animais através de indicadores precisos."
    },
    {
      icon: <TrendingUp size={32} />,
      title: "3. Colha",
      description: "Visualize o aumento na produção de leite e a redução nos custos operacionais."
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Como Funciona</span>
        <h2 className={styles.title}>
          Simples, Rápido e Eficiente
        </h2>

        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {step.icon}
              </div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.btnWrapper}>
          <Link href="#start" className={styles.btn}>
            Começar Agora
          </Link>
        </div>
      </div>
    </section>
  );
}
