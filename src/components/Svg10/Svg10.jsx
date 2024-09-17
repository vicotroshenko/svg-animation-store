import React from "react";
import Container from "../Container/Container";
import styles from "./Svg10.module.css";
import imageHTML from "../../images/10/imageHTML.png";
import imageCSS from "../../images/10/imageCSS.png";
import imageCSS_2 from "../../images/10/imageCSS_2.png";
import imageCSS_3 from "../../images/10/imageCSS_3.png";
const Svg10 = () => {
  return (
    <Container
      number={10}
      images={[imageHTML, imageCSS, imageCSS_2, imageCSS_3]}
    >
      <button type="button" className={styles.button}>
        <svg>
          <rect></rect>
        </svg>
        Button
      </button>
    </Container>
  );
};

export default Svg10;
