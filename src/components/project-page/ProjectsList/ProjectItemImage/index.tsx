import { FC } from 'react'
import { EmptyImage } from './EmptyImage'

import Link from 'next/link'
import Image from 'next/image'

import { Constants, EntityId } from '@/types'

import cl from '../style.module.scss'

type ProjectItemImageProps = {
	src?: string | null
	title: string
	id: EntityId
}

export const ProjectItemImage: FC<ProjectItemImageProps> = ({
	src,
	title,
	id
}) => {
	if (!src) {
		return <EmptyImage title={title} id={id} />
	}

	return (
		<div className={cl.imageContainer}>
			<Link href={`/projects/${id}`}>
				<Image
					src={`${Constants.UPLOAD_URL}${src}`}
					alt=""
					fill
					className={cl.image}
					objectFit="cover"
				/>
			</Link>
		</div>
	)
}
