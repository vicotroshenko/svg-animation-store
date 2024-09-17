import React from "react";
import Container from "../Container/Container";
import styles from "./Svg11.module.css";
import imageHTML from "../../images/11/imageHTML.png";
import imageCSS from "../../images/11/imageCSS.png";
import imageCSS_2 from "../../images/11/imageCSS_2.png";
import imageCSS_3 from "../../images/11/imageCSS_3.png";
const Svg11 = () => {
  return (
    <Container
      number={11}
      images={[imageHTML, imageCSS, imageCSS_2, imageCSS_3]}
    >
      <section className={styles.section}>
        <div className={`${styles.wave} ${styles.wave1}`}></div>
        <div className={`${styles.wave} ${styles.wave2}`}></div>
        <div className={`${styles.wave} ${styles.wave3}`}></div>
        <div className={`${styles.wave} ${styles.wave4}`}></div>
      </section>
    </Container>
  );
};

export default Svg11;
