import React, { useEffect, useRef, useState } from "react";
import styles from "./NavMenuIndicator.module.css";
import Container from "../../Container/Container";
import { IoMdHome } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
// url = https://www.youtube.com/watch?v=XfLVhJ9WedI

const buttonName = Object.freeze({
  home: "home",
  account: "account",
  setting: "setting",
  likes: "likes",
  notification: "notification",
});

const NavMenuIndicator = () => {
  const [active, setActive] = useState("home");
  const markerRef = useRef();
  const listRef = useRef();
  useEffect(() => {
    const offsetLeftFirstEl = listRef.current.children[0].offsetLeft;
    const offsetWidthFirstEl = listRef.current.children[0].offsetWidth;
    markerRef.current.style.left = offsetLeftFirstEl + "px";
    markerRef.current.style.width = offsetWidthFirstEl + "px";
  }, []);

  const moveIndicator = (e) => {
    const { name, offsetLeft, offsetWidth } = e.target;
    setActive(name);
    markerRef.current.style.left = offsetLeft + "px";
    markerRef.current.style.width = offsetWidth + "px";
  };
  return (
    <Container number={2} name="Nav menu indicator">
      <div className={styles.wrapper}>
        <ul className={styles.list} ref={listRef}>
          <li className={active === buttonName.home ? styles.active : ""}>
            <button onClick={moveIndicator} name={buttonName.home}>
              <IoMdHome className={styles.svg} />
              <p>{buttonName.home}</p>
            </button>
          </li>
          <li className={active === buttonName.account ? styles.active : ""}>
            <button onClick={moveIndicator} name={buttonName.account}>
              <FaUser className={styles.svg} />
              <p>{buttonName.account}</p>
            </button>
          </li>
          <li className={active === buttonName.setting ? styles.active : ""}>
            <button onClick={moveIndicator} name={buttonName.setting}>
              <IoIosSettings className={styles.svg} />
              <p>{buttonName.setting}</p>
            </button>
          </li>
          <li className={active === buttonName.likes ? styles.active : ""}>
            <button onClick={moveIndicator} name={buttonName.likes}>
              <FaHeart className={styles.svg} />
              <p>{buttonName.likes}</p>
            </button>
          </li>
          <li
            className={active === buttonName.notification ? styles.active : ""}
          >
            <button onClick={moveIndicator} name={buttonName.notification}>
              <IoIosNotifications className={styles.svg} />
              <p>{buttonName.notification}</p>
            </button>
          </li>
          <div id={styles.marker} ref={markerRef}>
            <span></span>
          </div>
        </ul>
      </div>
    </Container>
  );
};

export default NavMenuIndicator;
