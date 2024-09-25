import React from "react";
import styles from "./Svg27.module.css";
import Container from "../../Container/Container";
import imageHTML from "../../../images/27/imageHTML.png";
import imageCSS from "../../../images/27/imageCSS.png";
import imageCSS_2 from "../../../images/27/imageCSS_2.png";
import imageCSS_3 from "../../../images/27/imageCSS_3.png";
const Svg27 = () => {
  return (
    <Container
      number={27}
      images={[imageHTML, imageCSS, imageCSS_2, imageCSS_3]}
    >
      <div className={styles.wrapper}>
        <div className={styles.loader}>
          <svg>
            <rect></rect>
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default Svg27;
