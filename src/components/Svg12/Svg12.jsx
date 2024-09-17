import React from "react";
import Container from "../Container/Container";
import styles from "./Svg12.module.css";
import imageHTML from "../../images/12/imageHTML.png";
import imageCSS from "../../images/12/imageCSS.png";
import imageCSS_2 from "../../images/12/imageCSS_2.png";
const Svg12 = () => {
  return (
    <Container number={12} images={[imageHTML, imageCSS, imageCSS_2]}>
      <div className={styles.wrapper}>
        <svg>
          <rect></rect>
        </svg>
      </div>
    </Container>
  );
};

export default Svg12;
