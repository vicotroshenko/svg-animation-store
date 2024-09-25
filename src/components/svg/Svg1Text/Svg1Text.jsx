import React from "react";
import styles from "./Svg1Text.module.css";
import Container from "../../Container/Container";
import imageHTML from "../../../images/1/html.png";
import imageCSS from "../../../images/1/css.png";
const Svg1Text = () => {
  return (
    <Container images={[imageHTML, imageCSS]} number={1}>
      <div>
        <svg className={styles.svg}>
          <symbol id="text">
            <text textAnchor="middle" x="50%" y="60%">
              SVG TEXT
            </text>
          </symbol>
          <use xlinkHref="#text"></use>
        </svg>
      </div>
    </Container>
  );
};

export default Svg1Text;
