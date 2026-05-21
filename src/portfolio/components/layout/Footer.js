import { profile } from "@/portfolio/data/profile";
import styles from "@/portfolio/styles/portfolio.module.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        © {year} {profile.name}.
        <span className={styles.footerHeart}> ♥</span>
      </p>
    </footer>
  );
}
