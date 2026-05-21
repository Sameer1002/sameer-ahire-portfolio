"use client";

import { experience } from "@/portfolio/data/experience";
import { profile } from "@/portfolio/data/profile";
import { SECTION_IDS } from "@/portfolio/constants/sections";
import AnimatedSection from "@/portfolio/components/ui/AnimatedSection";
import SectionHeader from "@/portfolio/components/ui/SectionHeader";
import styles from "@/portfolio/styles/portfolio.module.scss";

export default function Experience() {
  return (
    <AnimatedSection id={SECTION_IDS.experience} className="portfolio-section">
      <SectionHeader
        title="Experience"
        subtitle={`${profile.yearsExperience} years building interfaces—from enterprise analytics to large-scale events.`}
      />

      <div className={styles.expTimeline}>
        {experience.map((job, index) => (
          <AnimatedSection key={job.company} delay={index * 0.08} as="div">
            <div className={styles.expItem}>
              <span className={styles.expDot} aria-hidden />
              <article className={styles.expCard}>
                <div className={styles.expHeader}>
                  <h3 className={styles.expCompany}>{job.company}</h3>
                  <span className={styles.expMeta}>{job.period}</span>
                </div>
                <p className={styles.expRole}>{job.role}</p>
                <p className={styles.expMeta}>{job.location}</p>

                {job.project && (
                  <span className={styles.expProject}>Featured: {job.project}</span>
                )}

                <ul className={styles.expList}>
                  {job.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <div className={styles.expTech}>
                  {job.tech.map((tech) => (
                    <span key={tech} className={styles.expTechTag}>
                      {tech}
                    </span>
                  ))}
                </div>

                {job.clients?.length > 0 && (
                  <p className={styles.expClients}>
                    <strong>Clients:</strong> {job.clients.join(" · ")}
                  </p>
                )}
              </article>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </AnimatedSection>
  );
}
