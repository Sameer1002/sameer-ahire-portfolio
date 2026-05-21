"use client";

import { profile } from "@/portfolio/data/profile";
import { experience } from "@/portfolio/data/experience";
import { clients } from "@/portfolio/data/clients";
import { SECTION_IDS } from "@/portfolio/constants/sections";
import { useScrollTo } from "@/portfolio/hooks/useScrollTo";
import ResumeDownloadButton from "@/portfolio/components/ui/ResumeDownloadButton";
import styles from "@/portfolio/styles/portfolio.module.scss";

const HERO_STATS = (years, companyCount, clientCount) => [
  { value: `${years}+`, label: "Years Experience" },
  { value: `${clientCount}+`, label: "Brands & Clients" },
  { value: String(companyCount), label: "Companies" },
];

export default function Hero() {
  const scrollTo = useScrollTo();
  const [firstName, lastName] = profile.name.split(" ");
  const stats = HERO_STATS(profile.yearsExperience, experience.length, clients.length);

  return (
    <section id={SECTION_IDS.home} className={styles.hero}>
      <div className={styles.heroGlow1} aria-hidden />
      <div className={styles.heroGlow2} aria-hidden />
      <div className={styles.heroGlow3} aria-hidden />
      <div className={styles.heroGrid} aria-hidden />

      <div className={styles.heroContent}>
        <div className={`${styles.heroBadge} pf-animate-in`} style={{ animationDelay: "0.1s" }}>
          <span className={styles.heroBadgeDot} />
          Available for opportunities
        </div>

        <h1 className={`${styles.heroName} pf-animate-in`} style={{ animationDelay: "0.2s" }}>
          {firstName}
          <span className={styles.heroNameAccent}>{lastName}</span>
        </h1>

        <p className={`${styles.heroTitle} pf-animate-in`} style={{ animationDelay: "0.3s" }}>
          {profile.title}
        </p>

        <p className={`${styles.heroTagline} pf-animate-in`} style={{ animationDelay: "0.4s" }}>
          {profile.tagline}
        </p>

        <div className={`${styles.heroActions} pf-animate-in`} style={{ animationDelay: "0.5s" }}>
          <button
            type="button"
            className="pf-btn pf-btn-primary"
            onClick={() => scrollTo(SECTION_IDS.experience)}
          >
            View my work
          </button>
          <button
            type="button"
            className="pf-btn pf-btn-outline"
            onClick={() => scrollTo(SECTION_IDS.contact)}
          >
            Get in touch
          </button>
          <ResumeDownloadButton variant="outline" />
        </div>

        <div className={`${styles.heroStats} pf-animate-in`} style={{ animationDelay: "0.6s" }}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.heroStat}>
              <span className={styles.heroStatNum}>{stat.value}</span>
              <span className={styles.heroStatLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.heroScroll} aria-hidden>
        <span>Scroll</span>
        <div className={styles.heroScrollLine} />
      </div>
    </section>
  );
}
