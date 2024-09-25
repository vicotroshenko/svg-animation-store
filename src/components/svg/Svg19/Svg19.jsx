import React from "react";
import Container from "../../Container/Container";
import styles from "./Svg19.module.css";

import imageHTML from "../../../images/19/imageHTML.png";
import imageCSS from "../../../images/19/imageCSS.png";
import imageCSS_2 from "../../../images/19/imageCSS_2.png";
import imageCSS_3 from "../../../images/19/imageCSS_3.png";
import imageCSS_4 from "../../../images/19/imageCSS_4.png";

const Svg19 = () => {
  return (
    <Container
      number={19}
      images={[imageHTML, imageCSS, imageCSS_2, imageCSS_3, imageCSS_4]}
    >
      <div className={styles.wrapper}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <svg className={styles.svg}>
          <filter id="wavy">
            <feTurbulence
              x="0"
              y="0"
              baseFrequency="0.009"
              numOctaves="5"
              seed="2"
            >
              <animate
                attributeName="baseFrequency"
                dur="60s"
                values="0.02; 0.05; 0.02"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMa in="SourceGraphic" scale="30"></feDisplacementMa>
          </filter>
        </svg>
      </div>
    </Container>
  );
};

export default Svg19;
