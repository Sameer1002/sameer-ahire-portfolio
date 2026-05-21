"use client";

import { education } from "@/portfolio/data/education";
import { SECTION_IDS } from "@/portfolio/constants/sections";
import AnimatedSection from "@/portfolio/components/ui/AnimatedSection";
import SectionHeader from "@/portfolio/components/ui/SectionHeader";
import styles from "@/portfolio/styles/portfolio.module.scss";

export default function Education() {
  return (
    <AnimatedSection id={SECTION_IDS.education} className="portfolio-section">
      <SectionHeader
        title="Education"
        subtitle="Academic foundation across arts, engineering, and technology."
      />

      <div className={styles.eduGrid}>
        {education.map((item) => (
          <article key={item.institution} className={styles.eduCard}>
            <h3 className={styles.eduDegree}>{item.degree}</h3>
            <p className={styles.eduInstitution}>{item.institution}</p>
            <p className={styles.eduMeta}>
              {item.period} · {item.location}
            </p>
            {item.detail && <p className={styles.eduDetail}>{item.detail}</p>}
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
