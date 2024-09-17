import React from "react";
import styles from "./Svg15.module.css";
import Container from "../Container/Container";
import imageHTML from "../../images/15/imageHTML_1.png";
import imageHTML_2 from "../../images/15/imageHTML_2.png";
import imageCSS from "../../images/15/imageCSS.png";
import imageCSS_2 from "../../images/15/imageCSS_2.png";
import imageCSS_3 from "../../images/15/imageCSS_3.png";
const Svg15 = () => {
  return (
    <Container
      number={15}
      images={[imageHTML, imageHTML_2, imageCSS, imageCSS_2, imageCSS_3]}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>Water wave div</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat optio itaque saepe labore in quidem consequatur
                asperiores quia voluptates doloribus? Harum molestias sequi
                veritatis beatae architecto laudantium possimus consectetur. Ex?
              </p>
            </div>
          </div>
        </div>
        <svg className={styles.svg}>
          <filter id="wavy">
            <feTurbulence
              x="0"
              y="0"
              baseFrequency="0.02"
              numOctaves="5"
              seed="2"
            >
              <animate
                attributeName="baseFrequency"
                dur="60s"
                values="0.02;0.05;0.02"
                repeatCount="indefinite"
              />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" scale="30" />
          </filter>
        </svg>
      </div>
    </Container>
  );
};

export default Svg15;
