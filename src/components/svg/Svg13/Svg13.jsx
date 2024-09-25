import React from "react";
import styles from "./Svg13.module.css";
import Container from "../../Container/Container";
import imageHTML from "../../../images/13/imageHTML.png";
import imageCSS from "../../../images/13/imageCSS.png";
import imageCSS_2 from "../../../images/13/imageCSS_2.png";
const Svg13 = () => {
  return (
    <Container number={13} images={[imageHTML, imageCSS, imageCSS_2]}>
      <div className={styles.wrapper}>
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
        </svg>
      </div>
    </Container>
  );
};

export default Svg13;
