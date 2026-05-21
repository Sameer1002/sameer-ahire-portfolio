"use client";

import {
  skillCategories,
  languages,
  certification,
} from "@/portfolio/data/skills";
import { SECTION_IDS } from "@/portfolio/constants/sections";
import AnimatedSection from "@/portfolio/components/ui/AnimatedSection";
import SectionHeader from "@/portfolio/components/ui/SectionHeader";
import styles from "@/portfolio/styles/portfolio.module.scss";

export default function Skills() {
  return (
    <AnimatedSection id={SECTION_IDS.skills} className="portfolio-section">
      <SectionHeader
        title="Skills & Expertise"
        subtitle="Modern front-end stack with full-stack foundations and design tooling."
      />

      <div className={styles.skillsBento}>
        {skillCategories.map((category) => (
          <div key={category.title} className={styles.skillCard}>
            <h3 className={styles.skillCardTitle}>{category.title}</h3>
            <div className={styles.skillTags}>
              {category.skills.map((skill) => (
                <span key={skill} className={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.skillsExtra}>
        <div className={styles.skillsExtraCard}>
          <h3 className={styles.skillCardTitle}>Languages</h3>
          <div className={styles.skillTags}>
            {languages.map((lang) => (
              <span key={lang} className={styles.skillTag}>
                {lang}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.skillsExtraCard}>
          <h3 className={styles.skillCardTitle}>Certification</h3>
          <p className={styles.certText}>{certification}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}
