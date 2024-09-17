import React from "react";
import Container from "../Container/Container";
import styles from "./Svg23.module.css";
import imageHTML from "../../images/23/imageHTML.png";
import imageHTML_2 from "../../images/23/imageHTML_2.png";
import imageCSS from "../../images/23/imageCSS.png";
import imageCS_2 from "../../images/23/imageCSS_2.png";
import imageCS_3 from "../../images/23/imageCSS_3.png";
import imageCS_4 from "../../images/23/imageCSS_4.png";
import imageCS_5 from "../../images/23/imageCSS_5.png";
import imageCS_6 from "../../images/23/imageCSS_6.png";

const Svg23 = () => {
  return (
    <Container
      number={23}
      images={[
        imageHTML,
        imageHTML_2,
        imageCSS,
        imageCS_2,
        imageCS_3,
        imageCS_4,
        imageCS_5,
        imageCS_6,
      ]}
    >
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.card}>
            <div className={styles.box}>
              <div>
                <div className={styles.percent}>
                  <svg className={styles.svg}>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className={styles.number}>
                    <h2>
                      90<span>%</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text}>HTML</div>
          </div>

          <div className={styles.card}>
            <div className={styles.box}>
              <div>
                <div className={styles.percent}>
                  <svg className={styles.svg}>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className={styles.number}>
                    <h2>
                      82<span>%</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text}>CSS</div>
          </div>

          <div className={styles.card}>
            <div className={styles.box}>
              <div>
                <div className={styles.percent}>
                  <svg className={styles.svg}>
                    <circle cx="70" cy="70" r="70"></circle>
                    <circle cx="70" cy="70" r="70"></circle>
                  </svg>
                  <div className={styles.number}>
                    <h2>
                      65<span>%</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.text}>JavaScript</div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Svg23;
