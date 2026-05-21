"use client";

import { profile } from "@/portfolio/data/profile";
import { SECTION_IDS } from "@/portfolio/constants/sections";
import { getContactLinks } from "@/portfolio/utils/contactLinks";
import AnimatedSection from "@/portfolio/components/ui/AnimatedSection";
import SectionHeader from "@/portfolio/components/ui/SectionHeader";
import ResumeDownloadButton from "@/portfolio/components/ui/ResumeDownloadButton";
import styles from "@/portfolio/styles/portfolio.module.scss";

export default function Contact() {
  const contactLinks = getContactLinks();

  return (
    <AnimatedSection id={SECTION_IDS.contact} className="portfolio-section">
      <SectionHeader
        title="Contact"
        subtitle="Open to UI developer roles, freelance projects, and collaborations."
      />

      <div className={styles.contactGrid}>
        <div className={styles.contactCard}>
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.contactLink}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              <span className={styles.contactIcon}>{link.icon}</span>
              <div>
                <div className={styles.contactLabel}>{link.label}</div>
                <div className={styles.contactValue}>{link.value}</div>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.contactCta}>
          <h3>Let&apos;s build something great.</h3>
          <p>
            Whether it&apos;s a product UI, event platform, or enterprise dashboard—I&apos;d
            love to hear about your project.
          </p>
          <div className={styles.contactCtaActions}>
            <a href={`mailto:${profile.email}`} className={styles.contactCtaBtn}>
              Send an email
            </a>
            <ResumeDownloadButton variant="light" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
