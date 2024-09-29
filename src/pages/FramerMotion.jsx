import React, { useState } from 'react'
import Home from '../components/framerMotion/Home/Home';
import Wrapper from '../components/framerMotion/Wrapper/Wrapper';
import Header from '../components/framerMotion/Header/Header';
import Modal from "../components/framerMotion/Modal/Modal";
const FramerMotion = () => {
  const [showModal, setShowModal] = useState(false);

	return (
    <Wrapper>
      {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
      <Header />
      <Home setShowModal={setShowModal} />
    </Wrapper>
  );
}

export default FramerMotion