import React from "react";
import { Link } from "react-router-dom";
import styles from "./Toppings.module.css";
import Wrapper from "../Wrapper/Wrapper";
import { motion } from "framer-motion";


const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      repeat: 10,
      repeatType: "reverse",
      duration: 0.3,
    },
  },
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <Wrapper>
      <motion.div className={`${styles.toppings} ${styles.container}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3>Step 2: Choose Toppings</h3>
        <ul>
          {toppings.map((topping) => {
            let spanClass = pizza.toppings.includes(topping)
              ? styles.active
              : "";
            return (
              <motion.li
                key={topping}
                className={styles.item}
                onClick={() => addTopping(topping)}
                whileHover={{ scale: 1.1, originX: 0, color: "#f8e112"}}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span className={spanClass}>{topping}</span>
              </motion.li>
            );
          })}
        </ul>

        <Link to="/f-motion/order">
          <motion.button variants={buttonVariants} whileHover="hover" className={styles.button}>Order</motion.button>
        </Link>
      </motion.div>
    </Wrapper>
  );
};

export default Toppings;
