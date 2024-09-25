import React from "react";
import Container from "../../Container/Container";
import styles from "./Svg26.module.css";
import imageHTML from "../../../images/26/imageHTML.png";
import imageCSS from "../../../images/26/imageCSS.png";
import imageCSS_2 from "../../../images/26/imageCSS_2.png";
import imageCSS_3 from "../../../images/26/imageCSS_3.png";
import imageCSS_4 from "../../../images/26/imageCSS_4.png";
import imageCSS_5 from "../../../images/26/imageCSS_5.png";
const Svg26 = () => {
  return (
    <Container
      number={26}
      images={[
        imageHTML,
        imageCSS,
        imageCSS_2,
        imageCSS_3,
        imageCSS_4,
        imageCSS_5,
      ]}
    >
      <div className={styles.wrapper}>
        <div className={styles.elastic}>
          <div className={styles.ball}></div>
          <svg>
            <path></path>
          </svg>
          <svg>
            <path></path>
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default Svg26;
