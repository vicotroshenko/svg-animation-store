import { Route, Routes } from "react-router-dom";
import "./App.css";
import Svg from "../../pages/Svg";
import Home from "../../pages/Home";
import HScroll from "../../pages/HScroll";
import Animations1 from "../../pages/Animations1";
import FramerMotion from "../../pages/FramerMotion";
import Base from "../framerMotion/Base/Base";
import { useState } from "react";
import Toppings from "../framerMotion/Toppings/Toppings";
import Order from "../framerMotion/Order/Order";
import FeaturesJs from "../../pages/FeaturesJs";

function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/svg" element={<Svg />} />
      <Route path="/h-scroll" element={<HScroll />} />
      <Route path="/animations1" element={<Animations1 />} />
      <Route path="/js-features" element={<FeaturesJs />} />
      <Route path="/f-motion" element={<FramerMotion />} />
      <Route
        path="/f-motion/base"
        element={<Base addBase={addBase} pizza={pizza} />}
      />
      <Route
        path="/f-motion/toppings"
        element={<Toppings addTopping={addTopping} pizza={pizza} />}
      />
      <Route path="/f-motion/order" element={<Order pizza={pizza} />} />
    </Routes>
  );
}

export default App;
