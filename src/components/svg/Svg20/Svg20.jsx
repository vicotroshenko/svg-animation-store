import React from "react";
import Container from "../../Container/Container";
import styles from "./Svg20.module.css";
import imageHTML from "../../../images/20/imageHTML.png";
import imageCSS from "../../../images/20/imageCSS.png";
import imageCSS_2 from "../../../images/20/imageCSS_2.png";

const Svg20 = () => {
  return (
    <Container number={20} images={[imageHTML, imageCSS, imageCSS_2]}>
      <div className={styles.wrapper}>
        <div className={styles.text}>
          <h2>Fire</h2>
        </div>
        <svg className={styles.svg}>
          <filter id="fire">
            <feTurbulence
              id="turbulence"
              baseFrequency="0.1 0.1"
              numOctaves="2"
              seed="3"
            >
              <animate
                attributeName="baseFrequency"
                dur="10s"
                values="0.1 0.1; 0.12 0.12"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              scale="15"
            ></feDisplacementMap>
          </filter>
        </svg>
      </div>
    </Container>
  );
};

export default Svg20;
