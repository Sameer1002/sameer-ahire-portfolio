"use client";

import { useEffect, useRef, useState } from "react";
import { classNames } from "@/portfolio/utils/classNames";
import styles from "@/portfolio/styles/portfolio.module.scss";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as: Component = "section",
  ...props
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Component ref={ref} className={className} {...props}>
      <div
        className={classNames(styles.reveal, visible && styles.revealVisible)}
        style={{ transitionDelay: `${delay}s` }}
      >
        {children}
      </div>
    </Component>
  );
}
