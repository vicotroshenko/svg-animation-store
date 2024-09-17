import React from "react";
import styles from "./Svg3.module.css";
import Container from "../Container/Container";
import imageHTML from "../../images/3/imageHTML.png";
import imageCSS from "../../images/3/imageCSS.png";
import imageCSS_2 from "../../images/3/imageCSS_2.png";
const Svg3 = () => {
  return (
    <Container images={[imageHTML, imageCSS, imageCSS_2]} number={3}>
      <button type="button" className={styles.button}>
        <svg>
          <rect></rect>
        </svg>
        Button
      </button>
    </Container>
  );
};

export default Svg3;
