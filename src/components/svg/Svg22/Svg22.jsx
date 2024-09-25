import React from "react";
import Container from "../../Container/Container";
import styles from "./Svg22.module.css";
import imageHTML from "../../../images/22/imageHTML.png";
import imageHTML_2 from "../../../images/22/imageHTML_2.png";
import imageCSS from "../../../images/22/imageCSS.png";
import imageCSS_2 from "../../../images/22/imageCSS_2.png";
const Svg22 = () => {
  return (
    <Container
      number={22}
      images={[imageHTML, imageHTML_2, imageCSS, imageCSS_2]}
    >
      <div className={styles.wrapper}>
        <svg className={styles.svg}>
          <filter id="gooey">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="5"
            ></feGaussianBlur>
            <feColorMatrix
              values="
							1 0 0 0 0
							0 1 0 0 0
							0 0 1 0 0
							0 0 0 20 -10
						"
            ></feColorMatrix>
          </filter>
        </svg>
        <div className={styles.loader}>
          <span style={{ "--i": "1" }}></span>
          <span style={{ "--i": "2" }}></span>
          <span style={{ "--i": "3" }}></span>
          <span style={{ "--i": "4" }}></span>
          <span style={{ "--i": "5" }}></span>
          <span style={{ "--i": "6" }}></span>
          <span style={{ "--i": "7" }}></span>
          <span style={{ "--i": "8" }}></span>
          <span className={styles.rotate} style={{ "--j": "0" }}></span>
          <span className={styles.rotate} style={{ "--j": "1" }}></span>
          <span className={styles.rotate} style={{ "--j": "2" }}></span>
          <span className={styles.rotate} style={{ "--j": "3" }}></span>
          <span className={styles.rotate} style={{ "--j": "4" }}></span>
        </div>
      </div>
    </Container>
  );
};

export default Svg22;
