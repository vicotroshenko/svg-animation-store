import React from "react";
import Container from "../Container/Container";
import styles from "./Svg9.module.css";
import imageHTML from "../../images/9/imageHTML.png";
import imageCSS from "../../images/9/imageCSS.png";
import imageCSS_2 from "../../images/9/imageCSS_2.png";
import imageCSS_3 from "../../images/9/imageCSS_3.png";
const Svg9 = () => {
  return (
    <Container
      number={9}
      images={[imageHTML, imageCSS, imageCSS_2, imageCSS_3]}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          Believe
          <span>Believe</span>
          <span>Believe</span>
          <span>in yourself</span>
        </h2>
      </div>
    </Container>
  );
};

export default Svg9;
