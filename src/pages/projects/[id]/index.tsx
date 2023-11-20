import { useMemo } from 'react'
import { Container, PageTitle } from '@/components'
import { Constants } from '@/types'
import { ProjectDetails } from '@/types/fetch/projects'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ProjectDetails as ProjectDetailsComponent } from '@/components/project-details'
import { MainContentResponseType, QuestionsAndAnswersItem } from '@/types/fetch'

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const { id } = context.params as { id: string }

		const project = await fetch(`${Constants.BASE_URL}/project/${id}`, {
			method: 'GET'
		}).then((res) => res.json())

		const content = (await fetch(`${Constants.BASE_URL}/content/main`).then(
			(res) => res.json()
		)) as MainContentResponseType

		return {
			props: {
				project: JSON.stringify(project),
				questionsAndAnswers: JSON.stringify(content.questionsAndAnswers)
			}
		}
	} catch (e) {
		console.log(e)

		return {
			props: {
				project: {},
				questionsAndAnswers: []
			}
		}
	}
}

export default function Projects({
	project,
	questionsAndAnswers
}: {
	project: string
	questionsAndAnswers: string
}) {
	const projectParsed = useMemo<ProjectDetails>(
		() => JSON.parse(project),
		[project]
	)

	const qna = useMemo<QuestionsAndAnswersItem[]>(
		() => JSON.parse(questionsAndAnswers),
		[questionsAndAnswers]
	)

	return (
		<>
			<Head>
				<title>{projectParsed.name}</title>
			</Head>
			<Container>
				<PageTitle>{projectParsed.name}</PageTitle>
			</Container>

			<ProjectDetailsComponent {...projectParsed} qna={qna} />
		</>
	)
}
