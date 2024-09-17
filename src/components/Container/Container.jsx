import React, { useState } from "react";
import styles from "./Container.module.css";

const Container = ({ children, images = null, number }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container} id={number}>
      <h2>{number}</h2>
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
