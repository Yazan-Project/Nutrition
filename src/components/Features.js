import { Database, Calculator, FileText, Smartphone, Users, ShieldCheck } from 'lucide-react';
import styles from '../styles/Features.module.css';

export default function Features() {
  const features = [
    {
      icon: <Database size={24} />,
      title: "Banco de Alimentos",
      description: "Acesso a uma vasta biblioteca de alimentos com composição nutricional detalhada."
    },
    {
      icon: <Calculator size={24} />,
      title: "Cálculo Automático",
      description: "Algoritmos avançados que equilibram a dieta ideal pelo menor custo."
    },
    {
      icon: <FileText size={24} />,
      title: "Relatórios Completos",
      description: "Gere relatórios detalhados para acompanhamento e tomada de decisão."
    },
    {
      icon: <Smartphone size={24} />,
      title: "Acesso Mobile",
      description: "Acesse suas dietas e informações de qualquer lugar, direto pelo celular."
    },
    {
      icon: <Users size={24} />,
      title: "Multi-usuários",
      description: "Permita que sua equipe e consultores acessem os dados da fazenda."
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Segurança de Dados",
      description: "Seus dados armazenados com segurança e backups automáticos diários."
    }
  ];

  return (
    <section id="features" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Recursos</span>
          <h2 className={styles.title}>
            Ferramentas Poderosas
          </h2>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardText}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
