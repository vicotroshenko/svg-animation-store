import React from "react";
import styles from "./Order.module.css";
import Wrapper from "../Wrapper/Wrapper";
const Order = ({ pizza }) => {
  return (
    <Wrapper>
      <div className={`${styles.order} ${styles.container}`}>
        <h2>Thank you for your order :)</h2>
        <p>You ordered a {pizza.base} pizza with:</p>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Order;
