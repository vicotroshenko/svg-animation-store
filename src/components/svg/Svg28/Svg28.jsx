import React from "react";
import Container from "../../../components/Container/Container";
import styles from "./Svg28.module.css";
import imageHTML from "../../../images/28/imageHTML.png";
import imageCSS from "../../../images/28/imageCSS.png";
import imageCSS_2 from "../../../images/28/imageCSS_2.png";
import imageCSS_3 from "../../../images/28/imageCSS_3.png";
import imageCSS_4 from "../../../images/28/imageCSS_4.png";
import imageCSS_5 from "../../../images/28/imageCSS_5.png";
import imageCSS_6 from "../../../images/28/imageCSS_6.png";
const Svg28 = () => {
  return (
    <Container
      number={28}
      images={[
        imageHTML,
        imageCSS,
        imageCSS_2,
        imageCSS_3,
        imageCSS_4,
        imageCSS_5,
        imageCSS_6,
      ]}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.ring}></div>
          <div className={styles.ring}></div>
          <div className={styles.ring}></div>
        </div>
      </div>
    </Container>
  );
};

export default Svg28;
