import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const styles = {
    padding: 20,
    display: "flex",
    flexDirection: "column",
    gap: '10px'
  };
  return (
    <div style={styles}>
      <Link to="/svg" style={{ fontSize: 24, color: "black" }}>
        1. Svg animations
      </Link>
      <Link to="/h-scroll" style={{ fontSize: 24, color: "black" }}>
        2. Horizontal Scroll
      </Link>
      <Link to="/animations1" style={{ fontSize: 24, color: "black" }}>
        3. Set of Animations #1
      </Link>
    </div>
  );
};

export default Home;
