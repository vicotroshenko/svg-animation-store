import React from "react";
import Container from "../../Container/Container";
import styles from "./Svg14.module.css";
import imageHTML from "../../../images/14/imageHTML.png";
import imageCSS from "../../../images/14/imageCSS.png";
import imageCSS_2 from "../../../images/14/imageCSS_2.png";
const Svg14 = () => {
  return (
    <Container number={14} images={[imageHTML, imageCSS, imageCSS_2]}>
      <div className={styles.wrapper}>
        <svg>
          <path></path>
        </svg>
        <svg>
          <path></path>
        </svg>
      </div>
    </Container>
  );
};

export default Svg14;
