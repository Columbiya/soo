import { EntityId } from '..'
import { ProjectItem } from './projects'

export type MainContentResponseType = {
	whoInProject: WhoInProjectItem[]
	questionsAndAnswers: QuestionsAndAnswersItem[]
	header: Header
	seo: SEO
}

export type MainMostViewedProjects = {
	data: ProjectItem[]
}

export type WhoInProjectItem = {
	id: EntityId
	title: string
	manual: string
	img: string
	residential: string[]
	nonResidential: string[]
	textList: string[]
}

export type QuestionsAndAnswersItem = {
	title: string
	accordion: AccordionItem[]
}

type AccordionItem = {
	title: string
	text: string
}

type Header = {
	title: string
	text: string
	video: string
	logo: string
	list: AchievementItem[]
}

type AchievementItem = {
	text: string
	value: string
}

type SEO = {
	title: string
	keywords: string
	description: string
}

export interface Pagination {
	totalCount: number
}
