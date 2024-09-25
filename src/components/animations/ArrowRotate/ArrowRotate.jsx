/* eslint-disable no-restricted-globals */
import React, { useLayoutEffect, useRef } from "react";
import Container from "../../Container/Container";
import styles from "./ArrowRotate.module.css";
  const array = Array.from({ length: 10 }, (_, i) => i + 1);

const ArrowRotate = () => {
  const containerRef = useRef();
  const wrapperRef = useRef();

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;

    const rotation = (event) => {
      const arw = Array.from(containerRef.current.children);
      arw.forEach((item, index) => {
        const x = item.getBoundingClientRect().left + item.clientWidth / 2;
        const y = item.getBoundingClientRect().top + item.clientHeight / 2;
        const radian = Math.atan2(event.pageX - x, event.pageY - y);
        const rot = (radian * (180 / Math.PI) * -1) + 270;
        console.log({
          rot,
          index,
        });
        item.style.transform = `rotate(${rot}deg)`;
      });
    };
    wrapper.addEventListener("mousemove", rotation);
    return () => wrapper.removeEventListener("mousemove", rotation);
  }, []);

  return (
    <Container name="Arrow rotate" number={4}>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.container} ref={containerRef}>
          {array.map((v) => (
            <div
              key={v}
              style={{
                top: `${Math.random() * 100}vh`,
                left: `${Math.random() * 100}vw`,
              }}
              className={styles.arrow}
            ></div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ArrowRotate;
