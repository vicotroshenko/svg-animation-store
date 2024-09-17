import React from "react";
import Container from "../Container/Container";
import styles from "./Svg25.module.css";
import imageHTML from "../../images/25/imageHTML.png";
import imageCSS from "../../images/25/imageCSS.png";
import imageCSS_2 from "../../images/25/imageCSS_2.png";
import imageCSS_3 from "../../images/25/imageCSS_3.png";
import imageCSS_4 from "../../images/25/imageCSS_4.png";
import imageCSS_5 from "../../images/25/imageCSS_5.png";
const Svg25 = () => {
  return (
    <Container
      number={25}
      images={[
        imageHTML,
        imageCSS,
        imageCSS_2,
        imageCSS_3,
        imageCSS_4,
        imageCSS_5,
      ]}
    >
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div
              className={styles.percent}
              style={{ "--clr": "#04fc43", "--num": "83" }}
            >
              <div className={styles.dot}></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className={styles.number}>
                <h2>
                  85<span>%</span>
                </h2>
                <p>HTML</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div
              className={styles.percent}
              style={{ "--clr": "#ff00be", "--num": "77" }}
            >
              <div className={styles.dot}></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className={styles.number}>
                <h2>
                  77<span>%</span>
                </h2>
                <p>CSS</p>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div
              className={styles.percent}
              style={{ "--clr": "#06ccff", "--num": "65" }}
            >
              <div className={styles.dot}></div>
              <svg>
                <circle cx="70" cy="70" r="70"></circle>
                <circle cx="70" cy="70" r="70"></circle>
              </svg>
              <div className={styles.number}>
                <h2>
                  65<span>%</span>
                </h2>
                <p>HTML</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Svg25;
