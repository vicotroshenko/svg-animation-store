import React from "react";
import Container from "../../Container/Container";
import styles from "./Svg8.module.css";
import imageHTML from "../../../images/8/imageHTML.png";
import imageCSS from "../../../images/8/imageCSS.png";
const Svg8 = () => {
  return (
    <Container images={[imageHTML, imageCSS]} number={8}>
      <div className={styles.wrapper}>
        <svg>
          <filter id="wavy">
            <feTurbulence
              type="turbulence"
              baseFrequency="0.005"
              numOctaves="5"
            ></feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              scale="50"
            ></feDisplacementMap>
          </filter>
        </svg>
        <h2 className={styles.title}>Wavy text</h2>
      </div>
    </Container>
  );
};

export default Svg8;
