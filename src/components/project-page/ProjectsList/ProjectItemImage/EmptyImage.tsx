import { FC } from 'react'

import cl from '../style.module.scss'

type EmptyImage = {
	title: string
}

export const EmptyImage: FC<EmptyImage> = ({ title }) => {
	return (
		<div className={cl.emptyImage}>
			<p className={cl.imageTitle}>{title}</p>
		</div>
	)
}
