import { FC } from 'react'
import cl from './style.module.scss'
import Image from 'next/image'

type TabProps = {
	text: string
	image: string
}

export const Tab: FC<TabProps> = ({ image, text }) => {
	return (
		<span className={cl.tab}>
			<span>{text}</span>
			<Image src={image} alt="" width={350} height={158} />
		</span>
	)
}
