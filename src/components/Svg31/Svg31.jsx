import React from "react";
import styles from "./Svg31.module.css";
import Container from "../Container/Container";
import imageHTML from "../../images/31/imageHTML.png";
import imageCSS from "../../images/31/imageCSS.png";
import imageCSS_2 from "../../images/31/imageCSS_2.png";
const Svg31 = () => {
  return (
    <Container number={31} images={[imageHTML, imageCSS, imageCSS_2]}>
      <div className={styles.wrapper}>
        <h2 data-text="Creative...">Creative...</h2>
      </div>
    </Container>
  );
};

export default Svg31;
