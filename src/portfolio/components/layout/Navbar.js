"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { profile } from "@/portfolio/data/profile";
import { NAV_LINKS, SECTION_IDS } from "@/portfolio/constants/sections";
import { useScrollTo } from "@/portfolio/hooks/useScrollTo";
import { useNavbarScroll } from "@/portfolio/hooks/useNavbarScroll";
import { classNames } from "@/portfolio/utils/classNames";
import ResumeDownloadButton from "@/portfolio/components/ui/ResumeDownloadButton";
import styles from "@/portfolio/styles/portfolio.module.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useNavbarScroll();
  const scrollTo = useScrollTo();

  const handleNavClick = (sectionId) => {
    scrollTo(sectionId);
    setMenuOpen(false);
  };

  const lastName = profile.name.split(" ")[1];

  return (
    <header className={classNames(styles.nav, scrolled && styles.navScrolled, "pf-nav-in")}>
      <div className={styles.navInner}>
        <button
          type="button"
          className={styles.navLogo}
          onClick={() => handleNavClick(SECTION_IDS.home)}
          aria-label="Scroll to top"
        >
          <span className={styles.navLogoMark}>AS</span>
          <span className={styles.navLogoText}>{lastName}</span>
        </button>

        <nav className={styles.navLinks} aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              type="button"
              className={styles.navLink}
              onClick={() => handleNavClick(link.id)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <ResumeDownloadButton variant="nav" className={styles.navResume} />

        <button
          type="button"
          className={styles.navCta}
          onClick={() => handleNavClick(SECTION_IDS.contact)}
        >
          Let&apos;s talk
        </button>

        <button
          type="button"
          className={styles.navToggle}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={menuOpen ? styles.barOpen : ""} />
          <span className={menuOpen ? styles.barOpen : ""} />
          <span className={menuOpen ? styles.barOpen : ""} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.navMobile}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                type="button"
                className={styles.navMobileLink}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
            <ResumeDownloadButton variant="mobile" className={styles.navMobileResume} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
