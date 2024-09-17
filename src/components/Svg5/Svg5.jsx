import React from "react";
import Container from "../Container/Container";
import styles from "./Svg5.module.css";
import imageHTML from "../../images/5/imageHTML.png";
import imageCSS from "../../images/5/imageCSS.png";
import imageCSS_2 from "../../images/5/imageCSS_2.png";
const Svg5 = () => {
  return (
    <Container images={[imageHTML, imageCSS, imageCSS_2]} number={5}>
      <button type="button" className={styles.button}>
        <svg>
          <rect></rect>
        </svg>
        Button
      </button>
    </Container>
  );
};

export default Svg5;
