import React from "react";
import { Link } from "react-router-dom";
import styles from "./Base.module.css";
import Wrapper from "../Wrapper/Wrapper";
import { motion } from "framer-motion";
import Header from "../Header/Header";

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

const nextVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 120 },
  },
};
const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <Wrapper>
      <Header />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`${styles.base} ${styles.container}`}
      >
        <h3>Step 1: Choose Your Base</h3>
        <ul>
          {bases.map((base) => {
            let spanClass = pizza.base === base ? styles.active : "";
            return (
              <motion.li
                key={base}
                className={styles.item}
                onClick={() => addBase(base)}
                whileHover={{ scale: 1.1, originX: 0, color: "#f8e112" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className={spanClass}>{base}</span>
              </motion.li>
            );
          })}
        </ul>

        {pizza.base && (
          <motion.div variants={nextVariants} className={styles.next}>
            <Link to="/f-motion/toppings">
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                className={styles.button}
              >
                Next
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </Wrapper>
  );
};

export default Base;
