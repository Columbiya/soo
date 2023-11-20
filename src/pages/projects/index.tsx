import { useMemo } from 'react'
import { Container, PageTitle } from '@/components'
import { FeedbackForm, ProjectsList } from '@/components/project-page'
import { Constants } from '@/types'
import { ProjectFilterParams, ProjectItem } from '@/types/fetch/projects'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import cl from './page.module.scss'
import { ProjectsContextProvider } from '@/contexts'

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const params = context.query as Partial<ProjectFilterParams>

		const projects = await fetch(
			`${Constants.BASE_URL}/project/get-list?${new URLSearchParams(params)}`,
			{
				method: 'GET'
			}
		).then((res) => res.json())

		return {
			props: {
				projects: JSON.stringify(projects)
			}
		}
	} catch (e) {
		console.log(e)

		return {
			props: {
				projects: []
			}
		}
	}
}

export default function Projects({ projects }: { projects: string }) {
	const projectsParsed = useMemo<{ data: ProjectItem[]; totalCount: number }>(
		() => JSON.parse(projects),
		[projects]
	)

	return (
		<>
			<Head>
				<title>Проекты</title>
			</Head>
			<ProjectsContextProvider>
				<div className={cl.projectsContainer}>
					<Container>
						<PageTitle>проекты</PageTitle>

						<div className={cl.listContainer}>
							<div>
								<ProjectsList
									items={projectsParsed.data}
									totalCount={projectsParsed.totalCount}
								/>
							</div>
							<FeedbackForm />
						</div>
					</Container>
				</div>
			</ProjectsContextProvider>
		</>
	)
}
