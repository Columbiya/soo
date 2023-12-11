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
	protocol: Protocol
	conclusion: Conclusion
	notification: Notification
	expositionMaterials: string
	commentsCount: number
	block: BlocksAppearance
	comments: CommentItem[]
}

type EntityWithTitleAndUrl = {
	name: string
	url: string
}

type Notification = {
	url: string
	title: string
}
type Protocol = EntityWithTitleAndUrl
type Conclusion = EntityWithTitleAndUrl

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
