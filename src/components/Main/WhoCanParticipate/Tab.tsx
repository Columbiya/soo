//@ts-nocheck

import { FC, useRef } from 'react'
import { DotLottiePlayer } from '@dotlottie/react-player'
import Image from 'next/image'
import cl from './style.module.scss'
import '@dotlottie/react-player/dist/index.css'

type TabProps = {
	text: string
	image: string
}

export const Tab: FC<TabProps> = ({ image, text }) => {
	const ref = useRef(null)

	return (
		<span className={cl.tab}>
			<span>{text}</span>
			<DotLottiePlayer
				src={image}
				hover
				loop
				style={{ height: '270px', width: '270px' }}
				className={cl.player}
			/>

			{/* <dotlottie-player
				src='https://lottie.host/8a8e04bc-d979-4731-8110-23d9ba0342ed/BDplhE6vUg.json"'
				background="transparent"
				speed="1"
				style={{ width: '300px', height: '300px' }}
				loop
				autoplay
			></dotlottie-player> */}
			<Image src="/images/main/who-can-participate-tab-image.svg" fill />
		</span>
	)
}

export default Tab
