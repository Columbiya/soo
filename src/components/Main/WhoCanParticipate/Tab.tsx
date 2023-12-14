//@ts-nocheck

import { FC, useRef } from 'react'
import { DotLottiePlayer } from '@dotlottie/react-player'
import Image from 'next/image'
import cl from './style.module.scss'
import '@dotlottie/react-player/dist/index.css'
import { EntityId } from '@/types'
import { classNames } from '@/helpers'

type TabProps = {
	id: EntityId
	text: string
	image: string
}

export const Tab: FC<TabProps> = ({ id, image, text }) => {
	return (
		<span className={cl.tab}>
			<span>{text}</span>
			<DotLottiePlayer
				src={image}
				hover
				loop
				style={{ height: '270px', width: '270px' }}
				className={classNames(cl.player, {
					[cl.third]: id === '3'
				})}
			/>

			<Image src="/images/main/who-can-participate-tab-image.svg" alt="" fill />

			{id === '3' && (
				<Image
					src="/images/main/who-in-project-3rd-tab.svg"
					width="270"
					height="270"
					alt=""
					className={cl.extraImage}
				/>
			)}
		</span>
	)
}

export default Tab
