import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import { motion } from "framer-motion";
import Loader from '../Loader/Loader';

const buttonVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      repeat: 10,
      repeatType: 'reverse',
      duration: 0.3
    }
  },
};

const Home = ({ setShowModal }) => {

  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 5000);
  }, [setShowModal]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1.5 }}
      className={`${styles.home} ${styles.container}`}
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/f-motion/base">
        <motion.button variants={buttonVariants} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>
      <Loader/>
    </motion.div>
  );
};

export default Home;
