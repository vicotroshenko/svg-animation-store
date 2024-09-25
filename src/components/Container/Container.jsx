import React, { useState } from "react";
import styles from "./Container.module.css";

const Container = ({ children, images = null, number, name = '' }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container} id={number}>
      <div className={styles.title_container}>
        <h2>{number}</h2>
        <p>{name}</p>
      </div>
      <div>{children}</div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={styles.button}
      ></button>
      {open && (
        <div className={styles.images_container}>
          {images ? (
            images.map((image) => (
              <div>
                <img src={image} alt="html code" />
              </div>
            ))
          ) : (
            <p>Not found images</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Container;
