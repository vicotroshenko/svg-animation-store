import React from "react";
import Container from "../../Container/Container";
import styles from "./Svg4.module.css";
import imageHTML from "../../../images/4/imageHTML.png";
import imageCSS from "../../../images/4/imageCSS.png";
import imageCSS_2 from "../../../images/4/imageCSS_2.png";
const Svg4 = () => {
  return (
    <Container images={[imageHTML, imageCSS, imageCSS_2]} number={4}>
      <button type="button" className={styles.button}>
        <svg>
          <rect></rect>
        </svg>
        Button
      </button>
    </Container>
  );
};

export default Svg4;
