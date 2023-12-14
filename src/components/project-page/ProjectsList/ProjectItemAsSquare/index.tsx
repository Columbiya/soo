import { FC } from 'react'

import { ProjectItem } from '@/types/fetch/projects'

import cl from '../style.module.scss'
import { classNames, formatDate } from '@/helpers'
import Image from 'next/image'
import { ButtonKind, ButtonSize, ButtonType, Constants } from '@/types'
import { Button, Label } from '@/components'
import Link from 'next/link'
import { ProjectItemImageAsSquare } from '../ProjectItemImage/ProjectItemImageAsSquare'

type ProjectItemAsSquareProps = ProjectItem

export const ProjectItemAsSquare: FC<ProjectItemAsSquareProps> = ({
	commentsCount,
	dateEnd,
	description,
	id,
	image,
	name,
	participantsCount,
	projectStage
}) => {
	return (
		<div className={classNames(cl.squareItem, cl.item)}>
			<ProjectItemImageAsSquare id={id} title={name} src={image} />

			<footer className={cl.footer}>
				<div className={cl.footerContentContainer}>
					<h2>{name}</h2>
					<div className={cl.labels}>
						<Label>Комментариев: {commentsCount}</Label>
						<Label>Участников: {participantsCount}</Label>
					</div>

					<p>Активно до {formatDate(new Date(dateEnd))}</p>
					<p>Этап: {projectStage}</p>
					<p>{description}</p>
				</div>

				<Button
					buttonSize={ButtonSize.Small}
					buttonType={ButtonType.OutlinedBlue}
					buttonKind={ButtonKind.SlightRounded}
					href={`/projects/${id.toString()}`}
					className={cl.button}
				>
					Узнать о проекте
				</Button>
			</footer>
		</div>
	)
}
