import React, { useEffect, useState } from 'react'
import LoginForm from '../../atoms/LoginForm'
import './LoginComponent.scss'
import IMAGES from '../../../utils/images'

const LoginComponent = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			// Update the current image index to create a slideshow effect
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % IMAGES.length)
		}, 5000) // Change images every 3 seconds (adjust as needed)

		return () => {
			clearInterval(interval)
		}
	}, [])
	return (
		<div className='login_layout'>
			<div className='insta_login_comp'>
				<div className='images_div_outer'>
					<div className='images_div_inner'>
						{IMAGES.map((image, index) => {
							return (
								<div
									key={index}
									className={`image ${
										index === currentImageIndex ? 'visible' : ''
									}`}
								>
									<img alt={`${image.altText}`} src={`${image.src}`} />
								</div>
							)
						})}
					</div>
				</div>
				<div className='loginForm_div'>
					<LoginForm />
				</div>
			</div>
		</div>
	)
}

export default LoginComponent
