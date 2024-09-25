import React from "react";
import Container from "../../Container/Container";
import styles from "./Svg6.module.css";
import imageHTML from "../../../images/6/imageHTML.png";
import imageCSS from "../../../images/6/imageCSS.png";
import imageCSS_2 from "../../../images/6/imageCSS_2.png";
import imageCSS_3 from "../../../images/6/imageCSS_3.png";
const Svg6 = () => {
  return (
    <Container images={[imageHTML, imageCSS, imageCSS_2, imageCSS_3]} number={6}>
      <div className={styles.box}>
        <svg>
          <rect></rect>
        </svg>
        <div className={styles.content}>
          <h1>SVG Stroke Animation Effects</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            fuga, eum beatae quibusdam eos assumenda inventore mollitia itaque
            quia maiores nostrum totam rem! Consequatur doloremque eum eligendi,
            cumque facere velit?
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Svg6;
