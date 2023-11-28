import { FC, useMemo } from 'react'
import { Accordion, BlockTitle, Container, Hr, Tabs } from '@/components'
import cl from './style.module.scss'
import { TabsItem } from '@/components/Tabs/types'
import { Tab } from './Tab'
import { QuestionsAndAnswersItem } from '@/types/fetch'

type QnaProps = {
	questionsAndAnswers: QuestionsAndAnswersItem[]
}

export const QNA: FC<QnaProps> = ({ questionsAndAnswers }) => {
	const tabItems = useMemo<TabsItem[]>(
		() =>
			questionsAndAnswers?.map(({ accordion, title }) => ({
				id: title,
				tab: <Tab text={title} />,
				children: (
					<Accordion
						items={
							accordion?.map(({ text, title }) => ({
								id: title,
								header: title,
								children: text
							})) || []
						}
					/>
				)
			})),
		[questionsAndAnswers]
	)

	return (
		<section className={cl.qna}>
			<Container>
				<BlockTitle>Вопросы и ответы</BlockTitle>

				<div className={cl.tabs}>
					<Tabs
						items={tabItems || []}
						activeClass={cl.active}
						divider={<Hr color="#CCE2FF" />}
					/>
				</div>
			</Container>
		</section>
	)
}
