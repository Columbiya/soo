import { FC } from 'react'
import { ProjectItem } from '@/types/fetch/projects'

import cl from '../style.module.scss'
import Image from 'next/image'
import { ButtonKind, ButtonSize, ButtonType, Constants } from '@/types'
import Link from 'next/link'
import { Button, Label } from '@/components'
import { classNames, formatDate } from '@/helpers'
import { ProjectItemImage } from '../ProjectItemImage'

type ProjectItemAsListItemProps = ProjectItem

export const ProjectItemAsListItem: FC<ProjectItemAsListItemProps> = (item) => {
	return (
		<div className={classNames(cl.item, cl.listItem)}>
			<ProjectItemImage id={item.id} src={item.image} title={item.name} />

			<div className={cl.content}>
				<h3>{item.name}</h3>
				<div className={cl.labels}>
					<Label>Комментариев: {item.commentsCount}</Label>
					<Label>Участников: {item.participantsCount}</Label>
				</div>

				<p>Активно до {formatDate(new Date(item.dateEnd))}</p>
				<p>Этап: {item.projectStage}</p>
				<p>{item.description}</p>

				<Button
					buttonSize={ButtonSize.Small}
					buttonType={ButtonType.OutlinedBlue}
					buttonKind={ButtonKind.SlightRounded}
					href={`/projects/${item.id.toString()}`}
					className={cl.listItemButton}
				>
					Узнать о проекте
				</Button>
			</div>
		</div>
	)
}
