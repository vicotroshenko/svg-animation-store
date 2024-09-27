import React from "react";
import { Link } from "react-router-dom";
import styles from "./Base.module.css";
import Wrapper from "../Wrapper/Wrapper";
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <Wrapper>
      <div className={`${styles.base} ${styles.container}`}>
        <h3>Step 1: Choose Your Base</h3>
        <ul>
          {bases.map((base) => {
            let spanClass = pizza.base === base ? styles.active : "";
            return (
              <li
                key={base}
                className={styles.item}
                onClick={() => addBase(base)}
              >
                <span className={spanClass}>{base}</span>
              </li>
            );
          })}
        </ul>

        {pizza.base && (
          <div className={styles.next}>
            <Link to="/f-motion/toppings">
              <button className={styles.button}>Next</button>
            </Link>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default Base;
