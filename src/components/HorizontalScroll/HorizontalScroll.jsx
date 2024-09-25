import React, { useEffect, useRef } from "react";
import styles from "./HorizontalScroll.module.css";
const HorizontalScroll = () => {
  const containerRef = useRef();
  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const percentScrolled = (scrollY / totalHeight) * 100;
      const translateX = (percentScrolled / 5) * -4;
      containerRef.current.style.transform = `translateX(${translateX}%)`;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container} ref={containerRef}>
        <section style={{ "--cle": "#dad4ff" }}>
          <div className={styles.content}>
            <h2>Section One</h2>
          </div>
        </section>
        <section style={{ "--cle": "#d4fffd" }}>
          <div className={styles.content}>
            <h2>Section Two</h2>
          </div>
        </section>
        <section style={{ "--cle": "#7f6df5" }}>
          <div className={styles.content}>
            <h2>Section Three</h2>
          </div>
        </section>
        <section style={{ "--cle": "#fcffd4" }}>
          <div className={styles.content}>
            <h2>Section Four</h2>
          </div>
        </section>
        <section style={{ "--cle": "#ffddd4" }}>
          <div className={styles.content}>
            <h2>Section Five</h2>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HorizontalScroll;
