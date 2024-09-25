import React, { useState } from "react";
import Container from "../../Container/Container";
import styles from "./Popup.module.css";
import image from "../../../images/17.jpg";
import imageHTML from "../../../images/animations/4/imageHTML.png";
import imageCSS from "../../../images/animations/4/imageCSS.png";
import imageCSS_2 from "../../../images/animations/4/imageCSS_2.png";
import imageCSS_3 from "../../../images/animations/4/imageCSS_3.png";
import imageCSS_4 from "../../../images/animations/4/iamgeCSS_4.png";
const Popup = () => {
  const [active, setActive] = useState(false);

  const toggle = () => setActive((prev) => !prev);
  return (
    <Container
      number={4}
      name="Popup"
      images={[imageHTML, imageCSS, imageCSS_2, imageCSS_3, imageCSS_4]}
    >
      <div className={`${styles.wrapper} ${active ? styles.active : ""}`}>
        <div className={styles.container}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <img src={image} alt="the building" className={styles.image} />
          <button type="button" onClick={toggle} className={styles.button}>
            Open popup
          </button>
        </div>
        <div id={styles.popup}>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequatur provident rem fugit amet esse numquam et maiores
            officiis, saepe dolorem totam nisi explicabo cupiditate, ipsam a
            laudantium iure magni rerum?
          </p>
          <button type="button" onClick={toggle} className={styles.button}>
            Close
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Popup;
