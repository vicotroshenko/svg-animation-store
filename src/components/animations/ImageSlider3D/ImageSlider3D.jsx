import React from "react";
import styles from "./ImageSlider3D.module.css";
import Container from "../../Container/Container";
import image1 from "../../../images/animations/6/dragon_1.jpg";
import image2 from "../../../images/animations/6/dragon_2.jpg";
import image3 from "../../../images/animations/6/dragon_3.jpg";
import image4 from "../../../images/animations/6/dragon_4.jpg";
import image5 from "../../../images/animations/6/dragon_5.jpg";
import image6 from "../../../images/animations/6/dragon_6.jpg";
import image7 from "../../../images/animations/6/dragon_7.jpg";
import image8 from "../../../images/animations/6/dragon_8.jpg";
import image9 from "../../../images/animations/6/dragon_9.jpg";
import image10 from "../../../images/animations/6/dragon_10.jpg";
import imageHTML from "../../../images/animations/6/imageHTML.png";
import imageHTML_2 from "../../../images/animations/6/imageHTML_2.png";
import imageCSS from "../../../images/animations/6/imageCSS.png";
import imageCSS_2 from "../../../images/animations/6/imageCSS_2.png";
import imageCSS_3 from "../../../images/animations/6/imageCSS_3.png";
import imageCSS_4 from "../../../images/animations/6/imageCSS_4.png";
import imageCSS_5 from "../../../images/animations/6/imageCSS_5.png";
const ImageSlider3D = () => {
  return (
    <Container
      name="3D images slider"
      number={6}
      images={[
        imageHTML,
        imageHTML_2,
        imageCSS,
        imageCSS_2,
        imageCSS_3,
        imageCSS_4,
        imageCSS_5,
      ]}
    >
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <ul className={styles.slider} style={{ "--quantity": "10" }}>
            <li className={styles.item} style={{ "--position": "1" }}>
              <img src={image1} alt="dragon 1" />
            </li>
            <li className={styles.item} style={{ "--position": "2" }}>
              <img src={image2} alt="dragon 2" />
            </li>
            <li className={styles.item} style={{ "--position": "3" }}>
              <img src={image3} alt="dragon 3" />
            </li>
            <li className={styles.item} style={{ "--position": "4" }}>
              <img src={image4} alt="dragon 4" />
            </li>
            <li className={styles.item} style={{ "--position": "5" }}>
              <img src={image5} alt="dragon 5" />
            </li>
            <li className={styles.item} style={{ "--position": "6" }}>
              <img src={image6} alt="dragon 6" />
            </li>
            <li className={styles.item} style={{ "--position": "7" }}>
              <img src={image7} alt="dragon 7" />
            </li>
            <li className={styles.item} style={{ "--position": "8" }}>
              <img src={image8} alt="dragon 8" />
            </li>
            <li className={styles.item} style={{ "--position": "9" }}>
              <img src={image9} alt="dragon 9" />
            </li>
            <li className={styles.item} style={{ "--position": "10" }}>
              <img src={image10} alt="dragon10" />
            </li>
          </ul>
          <div className={styles.content}>
            <h1 data-content="CSS ONLY">CSS ONLY</h1>
            <div className={styles.author}>
              <h2>LUN DEV</h2>
              <p>
                <b>Web Design</b>
              </p>
            </div>
            <div className={styles.model}></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ImageSlider3D;
