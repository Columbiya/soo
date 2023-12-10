import { Pagination } from '.'
import { EntityId, ProjectStages } from '..'

export type ProjectItem = {
	id: EntityId
	name: string
	description: string
	image: string
	dateEnd: string
	projectStage: ProjectStages
	commentsCount: number
	participantsCount: number
}

export interface ProjectResponse extends Pagination {}

export type ProjectFilterParams = {
	search: string
	locality: string
	documentType: string
	stage: string
	period: string
	limit: string
	page: string
}

export type ProjectFilterResponse = {
	stages: string[]
	localities: string[]
	documentTypes: string[]
	periods: string[]
}

export type ProjectDetails = {
	id: EntityId
	name: string
	description: string
	projectStage: string
	dateStart: string
	dateEnd: string
	boundariesEvent: string
	locality: string
	projectMaterials: string
	expositionMaterials: string
	notification: Notification
	commentsCount: number
	block: BlocksAppearance
	comments: CommentItem[]
}

type Notification = {
	url: string
	title: string
}

type BlocksAppearance = {
	auth: boolean
	application: boolean
	commenting: boolean
}

type CommentItem = {
	id: EntityId
	createdName: string
	createdLastName: string
	dateCreate: string
	commentType: string
	solutionOption: string
	comment: string
	file: string
	answerCreateDate: string
	answer: string
}
