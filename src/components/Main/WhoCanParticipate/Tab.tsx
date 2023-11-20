import { FC } from 'react'
import cl from './style.module.scss'
import Image from 'next/image'

type TabProps = {
	text: string
	image: string
}

export const Tab: FC<TabProps> = ({ image, text }) => {
	return (
		<div className={cl.tab}>
			<p>{text}</p>
			<Image src={image} alt="" width={350} height={158} />
		</div>
	)
}
