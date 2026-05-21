"use client";

import { ABOUT_HIGHLIGHTS } from "@/portfolio/constants/aboutHighlights";
import { profile } from "@/portfolio/data/profile";
import { SECTION_IDS } from "@/portfolio/constants/sections";
import AnimatedSection from "@/portfolio/components/ui/AnimatedSection";
import SectionHeader from "@/portfolio/components/ui/SectionHeader";
import styles from "@/portfolio/styles/portfolio.module.scss";

export default function About() {
  return (
    <AnimatedSection id={SECTION_IDS.about} className="portfolio-section">
      <SectionHeader
        title="About Me"
        subtitle="Turning ideas into polished, production-ready interfaces."
      />

      <p className={styles.aboutSummary}>{profile.summary}</p>

      <div className={styles.aboutGrid}>
        {ABOUT_HIGHLIGHTS.map((card) => (
          <div key={card.title} className={styles.aboutCard}>
            <div className={styles.aboutCardIcon}>{card.icon}</div>
            <h3 className={styles.aboutCardTitle}>{card.title}</h3>
            <p className={styles.aboutCardText}>{card.text}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
