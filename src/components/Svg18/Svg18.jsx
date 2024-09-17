import React from "react";
import Container from "../Container/Container";
import styles from "./Svg18.module.css";
import imageHTML from '../../images/18/imageHTML.png';
import imageCSS from '../../images/18/imageCSS.png';
import imageCSS_2 from '../../images/18/imageCSS_2.png';
import imageCSS_3 from '../../images/18/imageCSS_3.png';
import imageCSS_4 from '../../images/18/imageCSS_4.png';
const Svg18 = () => {
  return (
    <Container number={18} images={[imageHTML, imageCSS, imageCSS_2, imageCSS_3, imageCSS_4]}>
      <div className={styles.wrapper}>
        <div className={`${styles.icon} ${styles.heart}`}>
          <svg
            viewBox="-1 -2 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              fill="#000000"
            />
          </svg>
        </div>
        <div className={`${styles.icon} ${styles.star}`}>
          <svg
            fill="#000000"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>
          </svg>
        </div>
        <div className={`${styles.icon} ${styles.moon}`}>
          <svg
            fill="#000000"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.895 7.574c0 7.55 5.179 13.67 11.567 13.67 1.588 0 3.101-0.38 4.479-1.063-1.695 4.46-5.996 7.636-11.051 7.636-6.533 0-11.83-5.297-11.83-11.83 0-4.82 2.888-8.959 7.023-10.803-0.116 0.778-0.188 1.573-0.188 2.39z"></path>
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default Svg18;
