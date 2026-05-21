"use client";

import { profile } from "@/portfolio/data/profile";
import { classNames } from "@/portfolio/utils/classNames";
import styles from "@/portfolio/styles/portfolio.module.scss";

const VARIANT_STYLES = {
  outline: "",
  primary: styles.resumeBtnPrimary,
  nav: styles.resumeBtnNav,
  mobile: styles.resumeBtnMobile,
  light: styles.resumeBtnLight,
};

export default function ResumeDownloadButton({ variant = "outline", className = "" }) {
  const { path, fileName } = profile.resume;

  return (
    <a
      href={path}
      download={fileName}
      className={classNames(styles.resumeBtn, VARIANT_STYLES[variant], className)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download resume PDF"
    >
      <span className={styles.resumeBtnIcon} aria-hidden>
        ↓
      </span>
      Download Resume
    </a>
  );
}
