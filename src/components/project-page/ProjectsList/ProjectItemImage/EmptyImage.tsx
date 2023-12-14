import { FC } from 'react'

import cl from '../style.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { EntityId } from '@/types'

type EmptyImage = {
	title: string
	id: EntityId
}

export const EmptyImage: FC<EmptyImage> = ({ title, id }) => {
	return (
		<Link className={cl.emptyImage} href={`/projects/${id}`}>
			<Image src="/images/common/empty-project-image.jpg" fill alt="" />
			<p className={cl.imageTitle}>{title}</p>
		</Link>
	)
}
