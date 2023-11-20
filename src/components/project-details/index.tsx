import { FC, useMemo } from 'react'
import { Accordion, Alert, Button } from '@/components'
import { AlertTypes } from '@/components/Alert/type'
import { ProjectDetails as ProjectDetailsDataType } from '@/types/fetch/projects'
import { ButtonKind, ButtonSize, ButtonType, Constants } from '@/types'
import { FeedbackForm } from '../project-page'
import { Community } from './Community'
import { AccordionItem as AccordionItemType } from '../Accordion/types'

import cl from './style.module.scss'
import Link from 'next/link'
import { Feedback, QNA } from '../Main'
import { YouCantParticipate } from './YouCantParticipate'

type ProjectDetails = ProjectDetailsDataType

export const ProjectDetails: FC<ProjectDetails> = ({
	block,
	boundariesEvent,
	comments,
	commentsCount,
	dateEnd,
	dateStart,
	description,
	expositionMaterials,
	id,
	locality,
	name,
	notification,
	projectMaterials,
	projectStage
}) => {
	const accordionItems = useMemo<AccordionItemType[]>(
		() => [
			{
				id: '1',
				children: (
					<div dangerouslySetInnerHTML={{ __html: projectMaterials }} />
				),
				header: 'Материалы проекта'
			},
			{
				id: '2',
				children: (
					<div>
						<Link href={`${Constants.UPLOAD_URL}${notification.url}`} download>
							{notification.title}
						</Link>
					</div>
				),
				header: 'Оповещение'
			},
			{
				id: '3',
				children: (
					<div dangerouslySetInnerHTML={{ __html: expositionMaterials }} />
				),
				header: 'Экспозиция'
			},
			{
				id: '4',
				children: <div>заключение</div>,
				header: 'Заключение'
			}
		],
		[notification, projectMaterials, expositionMaterials]
	)

	console.log({
		block,
		boundariesEvent,
		comments,
		commentsCount,
		description,
		expositionMaterials,
		id,
		locality,
		projectMaterials,
		projectStage,
		name
	})
	return (
		<>
			<div className={cl.grid}>
				<div>
					<Alert type={AlertTypes.DANGER} className={cl.alert}>
						<h4 className={cl.title}>Вы не можете принять участие</h4>
						<p>
							Направить мнения, в том числе возражения, могут только
							пользователи, авторизованные на портале посредством ЕСИА и
							предоставлением соответствующих документов. Пожалуйста, войдите
							через портал, чтобы мы смогли проверить возможность вашего участия
						</p>
						<div className={cl.buttons}>
							<Button
								buttonSize={ButtonSize.Default}
								buttonType={ButtonType.Blue}
							>
								Войти
							</Button>
							<Button
								buttonSize={ButtonSize.Default}
								buttonType={ButtonType.OutlinedBlue}
								buttonKind={ButtonKind.SlightRounded}
							>
								Как принять участие
							</Button>
							<Button
								buttonSize={ButtonSize.Default}
								buttonType={ButtonType.OutlinedBlue}
								buttonKind={ButtonKind.SlightRounded}
							>
								Техподдержка
							</Button>
						</div>
					</Alert>

					<YouCantParticipate />
					<Accordion items={accordionItems} />
					<Community />
				</div>
				<aside>
					<div className={cl.sidebar}>
						<h4 className={cl.sidebarTitle}>Экспозиция</h4>
						<span>Начало: {dateStart}</span>
						<span>Окончание: {dateEnd}</span>

						<h4 className={cl.sidebarTitle}>Границы проведения</h4>
						<span>Кадастровый капитал</span>
						{/* Уточнить */}
						<span>{name.split(' ')}</span>

						<img
							src="/images/project/details/sidebar-image.svg"
							alt=""
							className={cl.sidebarImage}
						/>
					</div>
					<FeedbackForm />
				</aside>
			</div>
			<QNA />
			<Feedback />
		</>
	)
}
