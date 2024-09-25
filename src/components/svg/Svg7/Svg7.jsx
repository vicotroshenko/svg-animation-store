import React from "react";
import styles from "./Svg7.module.css";
import Container from "../../Container/Container";
import imageHTML from "../../../images/7/imageHTML.png";
import imageCSS from "../../../images/7/imageCSS.png";
import imageCSS_2 from "../../../images/7/imageCSS_2.png";

const Svg7 = () => {
  return (
    <Container number={7} images={[imageHTML, imageCSS, imageCSS_2]}>
      <button type="button" className={styles.button}>
        <svg>
          <rect></rect>
        </svg>
        Button
      </button>
    </Container>
  );
};

export default Svg7;
