import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Toppings.module.css'
import Wrapper from '../Wrapper/Wrapper';
const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <Wrapper>
      <div className={`${styles.toppings} ${styles.container}`}>
        <h3>Step 2: Choose Toppings</h3>
        <ul>
          {toppings.map((topping) => {
            let spanClass = pizza.toppings.includes(topping)
              ? styles.active
              : "";
            return (
              <li
                key={topping}
                className={styles.item}
                onClick={() => addTopping(topping)}
              >
                <span className={spanClass}>{topping}</span>
              </li>
            );
          })}
        </ul>

        <Link to="/f-motion/order">
          <button className={styles.button}>Order</button>
        </Link>
      </div>
    </Wrapper>
  );
}

export default Toppings;