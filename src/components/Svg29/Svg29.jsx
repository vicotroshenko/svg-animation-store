import React from "react";
import Container from "../Container/Container";
import styles from "./Svg29.module.css";
import imageHTML from "../../images/29/imageHTML.png";
import imageCSS from "../../images/29/imageCSS.png";
import imageCSS_2 from "../../images/29/imageCSS_2.png";
import imageCSS_3 from "../../images/29/imageCSS_3.png";
import imageCSS_4 from "../../images/29/imageCSS_4.png";
const Svg29 = () => {
  return (
    <Container
      number={29}
      images={[imageHTML, imageCSS, imageCSS_2, imageCSS_3, imageCSS_4]}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.cube}></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Svg29;
