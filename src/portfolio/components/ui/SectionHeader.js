export default function SectionHeader({ title, subtitle, id, centered = false }) {
  const headingClass = centered
    ? "portfolio-section-title portfolio-section-title--center"
    : "portfolio-section-title";

  return (
    <>
      {id ? <h2 id={id} className={headingClass}>{title}</h2> : <h2 className={headingClass}>{title}</h2>}
      {subtitle && <p className="portfolio-section-sub">{subtitle}</p>}
    </>
  );
}
