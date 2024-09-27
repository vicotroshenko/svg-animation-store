import React from "react";
import styles from "./Container2.module.css";
const Container2 = ({ children, title, images }) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <div>{children}</div>
      <div className={styles.images_container}>
        {images ? (
          images.map((image, index) => (
            <div key={index}>
              <img src={image} alt="html code" />
            </div>
          ))
        ) : (
          <p>Not found images</p>
        )}
      </div>
    </div>
  );
};

export default Container2;
