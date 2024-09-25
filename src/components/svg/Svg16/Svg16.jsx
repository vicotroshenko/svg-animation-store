import React from "react";
import styles from "./Svg16.module.css";
import Container from "../../Container/Container";
const Svg16 = () => {
  return (
    <Container number={16}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>Happy</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>Republic</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.content}>
              <h2>Day</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <svg>
          <filter id="wavy">
            <feTurbulence
              x="0"
              y="0"
              id="turbulence"
              baseFrequency="0.01"
              numOctaves="5"
              seed="2"
            >
              <animate
                attributeName="baseFrequency"
                dur="60s"
                values="0.01;0.05;0.01"
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

export default Svg16;
