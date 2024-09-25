import React, { useRef, useState } from "react";
import styles from "./Slider.module.css";
import Container from "../../Container/Container";
import imageIceland from "../../../images/animations/5/iceland.webp";
import imageIreland from "../../../images/animations/5/ireland.webp";
import imageNetherlands from "../../../images/animations/5/netherlands.jpg";
import imageAustralia from "../../../images/animations/5/australia.jpg";
import imageUkraine from "../../../images/animations/5/Ukraine.jpg";
import imageItaly from "../../../images/animations/5/italy.webp";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import imageHTML from "../../../images/animations/5/imageHTML.png";
import imageHTML_2 from "../../../images/animations/5/imageHTML_2.png";
import imageCSS from "../../../images/animations/5/imageCSS.png";
import imageCSS_2 from "../../../images/animations/5/imageCSS_2.png";
import imageCSS_3 from "../../../images/animations/5/imageCSS_3.png";
import imageCSS_4 from "../../../images/animations/5/imageCSS_4.png";
import imageCSS_5 from "../../../images/animations/5/imageCSS_5.png";
import imageCSS_6 from "../../../images/animations/5/imageCSS_6.png";
import imageCSS_7 from "../../../images/animations/5/imageCSS_7.png";

const countries = [
  {
    id: "1",
    country: "Iceland",
    image: imageIceland,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laborum exercitationem inventore dicta reiciendis voluptate placeat ratione ipsa adipisci aut deserunt similique totam tempora, qui quos architecto dolore omnis obcaecati!",
  },
  {
    id: "2",
    country: "Ireland",
    image: imageIreland,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laborum exercitationem inventore dicta reiciendis voluptate placeat ratione ipsa adipisci aut deserunt similique totam tempora, qui quos architecto dolore omnis obcaecati!",
  },
  {
    id: "3",
    country: "Netherlands",
    image: imageNetherlands,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laborum exercitationem inventore dicta reiciendis voluptate placeat ratione ipsa adipisci aut deserunt similique totam tempora, qui quos architecto dolore omnis obcaecati!",
  },
  {
    id: "4",
    country: "Ukraine",
    image: imageUkraine,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laborum exercitationem inventore dicta reiciendis voluptate placeat ratione ipsa adipisci aut deserunt similique totam tempora, qui quos architecto dolore omnis obcaecati!",
  },
  {
    id: "5",
    country: "Italy",
    image: imageItaly,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laborum exercitationem inventore dicta reiciendis voluptate placeat ratione ipsa adipisci aut deserunt similique totam tempora, qui quos architecto dolore omnis obcaecati!",
  },
  {
    id: "6",
    country: "Australia",
    image: imageAustralia,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae laborum exercitationem inventore dicta reiciendis voluptate placeat ratione ipsa adipisci aut deserunt similique totam tempora, qui quos architecto dolore omnis obcaecati!",
  },
];

const Slider = () => {
  const slidesContainerRef = useRef();
  const changeSlide = (event) => {
    const { name } = event.currentTarget;
    const slides = Array.from(slidesContainerRef.current.children);
    name === "next" && slidesContainerRef.current.appendChild(slides[0]);
    name === "prev" &&
      slidesContainerRef.current.prepend(slides[slides.length - 1]);
  };

  return (
    <Container
      number={5}
      name="Image Slider"
      images={[
        imageHTML,
        imageHTML_2,
        imageCSS,
        imageCSS_2,
        imageCSS_3,
        imageCSS_4,
        imageCSS_5,
        imageCSS_6,
        imageCSS_7,
      ]}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.slide} ref={slidesContainerRef}>
            {countries.map((country) => (
              <div
                className={styles.item}
                style={{ backgroundImage: `url(${country.image})` }}
                key={country.id}
              >
                <div className={styles.content}>
                  <div className={styles.name}>{country.country}</div>
                  <div className={styles.desc}>{country.description}</div>
                  <button type="button" name={country.country}>
                    See more
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.buttons}>
            <button
              type="button"
              onClick={changeSlide}
              name="prev"
              className={styles.prev}
            >
              <FaArrowLeft />
            </button>
            <button
              type="button"
              onClick={changeSlide}
              name="next"
              className={styles.next}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Slider;
