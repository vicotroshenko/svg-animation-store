import React from "react";
import Container from "../Container/Container";
import styles from "./Svg2.module.css";
import imageHTML from "../../images/2/html.png";
import imageCSS from "../../images/2/css.png";
const Svg2 = () => {
  return (
    <Container images={[imageHTML, imageCSS]} number={2}>
      <div>
        <svg
          width="222"
          height="232"
          viewBox="0 0 222 232"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svg}
        >
          <path
            d="M0.5 1V230.5M0.5 230.5V231M0.5 230.5H0M0.5 230.5H141M0 0.5H141M141.5 1V95M141 94.5H221M221.5 95V231M221 231.5H119"
            className={styles.line}
          />
        </svg>
      </div>
    </Container>
  );
};

export default Svg2;
