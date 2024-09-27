import React from 'react'
import Animate1 from '../components/animations/Animate1/Animate1'
import NavMenuIndicator from '../components/animations/NavMenuIndicator/NavMenuIndicator'
import NavMenuIndicator2 from '../components/animations/NavMenuIndicator2/NavMenuIndicator2'
import Popup from '../components/animations/Popup/Popup'
import Slider from '../components/animations/Slider/Slider'
import ImageSlider3D from '../components/animations/ImageSlider3D/ImageSlider3D'
import AnimatedForm from '../components/animations/AnimatedForm/AnimatedForm'

const Animations1 = () => {
	return (
		<div>
			<Animate1/>
			<NavMenuIndicator/>
			<NavMenuIndicator2/>
			<Popup/>
			<Slider />
			<ImageSlider3D/>
			<AnimatedForm/>
		</div>
	)
}

export default Animations1