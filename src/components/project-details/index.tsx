import { FC, useMemo } from 'react'
import { Accordion, Alert, Button, Container, Banner } from '@/components'
import { AlertTypes } from '@/components/Alert/type'
import { ProjectDetails as ProjectDetailsDataType } from '@/types/fetch/projects'
import {
	ButtonKind,
	ButtonSize,
	ButtonType,
	Constants,
	ProjectStages
} from '@/types'
import { FeedbackForm } from '../project-page'
import { Community } from './Community'
import { AccordionItem as AccordionItemType } from '../Accordion/types'

import cl from './style.module.scss'
import Link from 'next/link'
import { Feedback, QNA } from '../Main'
import { YouCantParticipate } from './YouCantParticipate'
import { QuestionsAndAnswersItem } from '@/types/fetch'

type ProjectDetails = ProjectDetailsDataType & {
	qna: QuestionsAndAnswersItem[]
}

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
	conclusion,
	protocol,
	projectMaterials,
	projectStage,
	qna
}) => {
	const accordionItems = useMemo<AccordionItemType[]>(() => {
		const items: AccordionItemType[] = []
		const projectStageLower = projectStage.toLowerCase()

		items.push({
			id: '1',
			children: (
				<div>
					<p className={cl.tabItemText}>
						Просим Вас внимательно отнестись к скачиванию больших объемов
						данных. Вам может потребоваться дополнительное дисковое пространство
						на вашем устройстве, а также процесс скачивания может занять
						продолжительное время.
					</p>
					<div dangerouslySetInnerHTML={{ __html: projectMaterials }} />
				</div>
			),
			header: 'Материалы проекта'
		})

		items.push({
			id: '2',
			children: (
				<div>
					<Link
						href={`${Constants.UPLOAD_URL}${notification?.url}`}
						download
						target="_blank"
					>
						{notification?.title}
					</Link>
				</div>
			),
			header: 'Оповещение'
		})

		if (
			projectStageLower === ProjectStages.EXPOSITION ||
			projectStageLower === ProjectStages.PROTOCOL ||
			projectStageLower === ProjectStages.END
		) {
			items.push({
				id: '3',
				children: (
					<div dangerouslySetInnerHTML={{ __html: expositionMaterials }} />
				),
				header: 'Экспозиция'
			})
		}

		if (
			projectStageLower === ProjectStages.PROTOCOL ||
			projectStageLower === ProjectStages.END
		) {
			items.push({
				id: '4',
				children: (
					<div>
						<Link
							href={`${Constants.UPLOAD_URL}${protocol?.url}`}
							download
							target="_blank"
						>
							{protocol?.name}
						</Link>
					</div>
				),
				header: 'Протокол'
			})
		}

		if (projectStageLower === ProjectStages.END) {
			items.push({
				id: '5',
				children: (
					<div>
						<Link
							href={`${Constants.UPLOAD_URL}${conclusion?.url}`}
							download
							target="_blank"
						>
							{conclusion?.name}
						</Link>
					</div>
				),
				header: 'Заключение'
			})
		}

		return items
	}, [
		notification,
		projectMaterials,
		expositionMaterials,
		conclusion,
		protocol
	])

	return (
		<>
			<Container>
				<div className={cl.grid}>
					<div>
						<Alert type={AlertTypes.DANGER} className={cl.alert}>
							<h4 className={cl.title}>Вы не можете принять участие</h4>
							<p>
								Направить мнения, в том числе возражения, могут только
								пользователи, авторизованные на портале посредством ЕСИА и
								предоставлением соответствующих документов. Пожалуйста, войдите
								через портал, чтобы мы смогли проверить возможность вашего
								участия
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
									href="/partners"
								>
									Как принять участие
								</Button>
								<Button
									buttonSize={ButtonSize.Default}
									buttonType={ButtonType.OutlinedBlue}
									buttonKind={ButtonKind.SlightRounded}
									href="#feedback"
								>
									Техподдержка
								</Button>
							</div>
						</Alert>

						<YouCantParticipate />
						<Accordion items={accordionItems} className={cl.accordion} />
					</div>
					<aside>
						<div className={cl.sticky}>
							<div className={cl.sidebar}>
								<h4 className={cl.sidebarTitle}>{projectStage}</h4>
								<span>Начало: {dateStart}</span>
								<span>Окончание: {dateEnd}</span>

								<h4 className={cl.sidebarTitle}>Границы проведения</h4>
								{/* Уточнить */}
								<span>{boundariesEvent}</span>

								<img
									src="/images/project/details/sidebar-image.svg"
									alt=""
									className={cl.sidebarImage}
								/>
							</div>
							<FeedbackForm />
						</div>
					</aside>
				</div>
			</Container>

			<Community />
			<QNA questionsAndAnswers={qna} />
			<Feedback />
		</>
	)
}
