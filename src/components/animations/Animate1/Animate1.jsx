import React, { useRef, useState } from "react";
import Container from "../../Container/Container";
import styles from "./Animate1.module.css";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import imageHTML from "../../../images/animations/1/imageHTML.png";
import imageHTML_2 from "../../../images/animations/1/imageHTML_1.png";
import imageCSS from "../../../images/animations/1/imageCSS.png";
import imageCSS_2 from "../../../images/animations/1/imageCSS_2.png";
import imageCSS_3 from "../../../images/animations/1/imageCSS_3.png";
import imageCSS_4 from "../../../images/animations/1/imageCSS_4.png";

const Animate1 = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => setActive((prev) => !prev);
  return (
    <Container
      number={1}
      images={[
        imageHTML,
        imageHTML_2,
        imageCSS,
        imageCSS_2,
        imageCSS_3,
        imageCSS_4,
      ]}
      name="Hidden nav menu"
    >
      <div className={styles.wrapper}>
        <ul className={`${styles.menu} ${active ? styles.active : ""}`}>
          <div
            className={`${styles.toggle} ${active ? styles.active : ""}`}
            onClick={toggleMenu}
          >
            <RxCross2 className={styles.svg} />
          </div>
          <li style={{ "--i": "0" }} onClick={toggleMenu}>
            <a href="#">
              <FaHome className={styles.svg} />
            </a>
          </li>
          <li style={{ "--i": "1" }} onClick={toggleMenu}>
            <a href="#">
              <FaUser className={styles.svg} />
            </a>
          </li>
          <li style={{ "--i": "2" }} onClick={toggleMenu}>
            <a href="#">
              <IoSettings className={styles.svg} />
            </a>
          </li>
          <li style={{ "--i": "3" }} onClick={toggleMenu}>
            <a href="#">
              <MdEmail className={styles.svg} />
            </a>
          </li>
          <li style={{ "--i": "4" }} onClick={toggleMenu}>
            <a href="#">
              <FaVideo className={styles.svg} />
            </a>
          </li>
          <li style={{ "--i": "5" }} onClick={toggleMenu}>
            <a href="#">
              <AiFillTool className={styles.svg} />
            </a>
          </li>
          <li style={{ "--i": "6" }} onClick={toggleMenu}>
            <a href="#">
              <FaGamepad className={styles.svg} />
            </a>
          </li>
          <li style={{ "--i": "7" }} onClick={toggleMenu}>
            <a href="#">
              <FaCamera className={styles.svg} />
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Animate1;
