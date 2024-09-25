import React, { useRef } from "react";
import Container from "../../Container/Container";
import styles from "./NavMenuIndicator2.module.css";

const NavMenuIndicator2 = () => {
  const markerRef = useRef(null);
  const onClickLink = (e) => {
    const { offsetLeft, offsetWidth } = e.target;
    const marker = markerRef.current;
    marker.style.left = offsetLeft + "px";
    marker.style.width = offsetWidth + "px";
    marker.style.display = "block";
    marker.style.filter = `hue-rotate(${Math.random() * 360}deg)`;
  };
  return (
    <Container number={3} name="Nav Menu indicator 2">
      <div className={styles.wrapper}>
        <nav onClick={onClickLink}>
          <a herf="#">Home</a>
          <a herf="#">About</a>
          <a herf="#">Service</a>
          <a herf="#">Contacts</a>
          <a herf="#">Portfolio</a>
          <a herf="#">Out team</a>
          <div id={styles.indicator} ref={markerRef}></div>
        </nav>
      </div>
    </Container>
  );
};

export default NavMenuIndicator2;
