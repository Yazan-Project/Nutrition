import { Check } from 'lucide-react';
import Link from 'next/link';
import styles from '../styles/Pricing.module.css';

export default function Pricing() {
  const plans = [
    {
      name: "Básico",
      price: "R$ 199",
      period: "/mês",
      features: [
        "Até 100 animais",
        "Formulação básica de dieta",
        "Relatórios mensais",
        "Suporte por e-mail"
      ],
      popular: false
    },
    {
      name: "Profissional",
      price: "R$ 399",
      period: "/mês",
      features: [
        "Até 500 animais",
        "Formulação avançada",
        "Relatórios semanais",
        "Suporte prioritário",
        "Gestão financeira"
      ],
      popular: true
    },
    {
      name: "Empresarial",
      price: "Sob Consulta",
      period: "",
      features: [
        "Animais ilimitados",
        "Multi-usuários",
        "API de integração",
        "Gerente de conta dedicado",
        "Treinamento in-company"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Planos</span>
          <h2 className={styles.title}>
            Escolha o plano ideal para sua fazenda
          </h2>
          <p className={styles.description}>
            Comece gratuitamente e evolua conforme sua produção cresce. Sem contratos de fidelidade.
          </p>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <div key={index} className={`${styles.card} ${plan.popular ? styles.cardPopular : ''}`}>
              {plan.popular && (
                <div className={styles.popularBadge}>
                  Mais Popular
                </div>
              )}
              
              <div className={styles.cardHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
                <div className={styles.planPrice}>
                  {plan.price}<span className={styles.planPeriod}>{plan.period}</span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <ul className={styles.featureList}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className={styles.featureItem}>
                      <Check size={20} className={styles.checkIcon} />
                      <span className={styles.featureText}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <Link href="#start" className={`${styles.btn} ${plan.popular ? styles.btnPrimary : styles.btnOutline}`}>
                  Começar Agora
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
