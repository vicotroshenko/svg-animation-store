import React from "react";
import Container from "../Container/Container";
import styles from "./Svg21.module.css";
import imageHTML from "../../images/21/imageHTML.png";
import imageCSS from "../../images/21/imageCSS.png";
const Svg21 = () => {
  return (
    <Container number={21} images={[imageHTML, imageCSS]}>
      <section className={styles.wrapper}></section>
      <svg className={styles.svg}>
        <filter id="noise">
          <feTurbulence id="turbulence">
            <animate
              attributeName="baseFrequency"
              dur="50s"
              values="0.9 0.9; 0.8 0.8; 0.9 0.9"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" scale="60"></feDisplacementMap>
        </filter>
      </svg>
    </Container>
  );
};

export default Svg21;
