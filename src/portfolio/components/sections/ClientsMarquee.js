import { clients } from "@/portfolio/data/clients";
import SectionHeader from "@/portfolio/components/ui/SectionHeader";
import styles from "@/portfolio/styles/portfolio.module.scss";

export default function ClientsMarquee() {
  const marqueeItems = [...clients, ...clients];

  return (
    <section className={styles.clientsSection} aria-labelledby="clients-heading">
      <SectionHeader
        id="clients-heading"
        title="Brands I've Worked With"
        centered
      />
      <div className={styles.marqueeWrap} aria-label="Brands and clients">
        <div className={styles.marqueeTrack}>
          {marqueeItems.map((name, index) => (
            <span key={`${name}-${index}`} className={styles.marqueeItem}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
