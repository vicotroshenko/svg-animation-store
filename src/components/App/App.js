import { Route, Routes } from "react-router-dom";
import "./App.css";
import Svg from "../../pages/Svg";
import Home from "../../pages/Home";
import HScroll from "../../pages/HScroll";
import Animations1 from "../../pages/Animations1";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/svg" element={<Svg/>} />
      <Route path="/h-scroll" element={<HScroll/>} />
      <Route path="/animations1" element={<Animations1/>} />
    </Routes>
 

  );
}

export default App;
