import React from "react";
import styles from "./AnimatedForm.module.css";
import Container from "../../Container/Container";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import imageHTML from "../../../images/animations/7/imageHTML.png";
import imageHTML_2 from "../../../images/animations/7/imageHTML_2.png";
import imageCSS from "../../../images/animations/7/imageCSS.png";
import imageCSS_2 from "../../../images/animations/7/imageCSS_2.png";
import imageCSS_3 from "../../../images/animations/7/imageCSS_3.png";
import imageCSS_4 from "../../../images/animations/7/imageCSS_4.png";
import imageCSS_5 from "../../../images/animations/7/imageCSS_5.png";
import imageCSS_6 from "../../../images/animations/7/imageCSS_6.png";

const AnimatedForm = () => {
  return (
    <Container
      name="Animated Login Form Design"
      number={7}
      images={[
        imageHTML,
        imageHTML_2,
        imageCSS,
        imageCSS_2,
        imageCSS_3,
        imageCSS_4,
        imageCSS_5,
        imageCSS_6,
      ]}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <form action="#" className={styles.form}>
            <h2>Login form</h2>
            <div className={styles.input_box}>
              <input type="text" required />
              <span>Username</span>
              <FaUser className={styles.input_icon} />
            </div>
            <div className={styles.input_box}>
              <input type="password" required />
              <span>Password</span>
              <FaLock className={styles.input_icon} />
            </div>
            <div className={styles.links}>
              <label>
                <input type="checkbox" />
                Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="button" className={styles.btn}>
              Login
            </button>
            <div className={styles.signup}>
              <p>
                Don't have an account? <a href="#">Signup</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default AnimatedForm;
