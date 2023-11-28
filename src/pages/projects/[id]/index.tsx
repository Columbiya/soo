import { useMemo } from 'react'
import { Container, PageTitle } from '@/components'
import { Constants } from '@/types'
import { ProjectDetails } from '@/types/fetch/projects'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { ProjectDetails as ProjectDetailsComponent } from '@/components/project-details'

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const { id } = context.params as { id: string }

		const project = await fetch(`${Constants.BASE_URL}/project/${id}`, {
			method: 'GET'
		}).then((res) => res.json())

		return {
			props: {
				project: JSON.stringify(project)
			}
		}
	} catch (e) {
		console.log(e)

		return {
			props: {
				project: {}
			}
		}
	}
}

export default function Projects({ project }: { project: string }) {
	const projectParsed = useMemo<ProjectDetails>(
		() => JSON.parse(project),
		[project]
	)

	return (
		<>
			<Head>
				<title>{projectParsed.name}</title>
			</Head>
			<Container>
				<PageTitle>{projectParsed.name}</PageTitle>

				<ProjectDetailsComponent {...projectParsed} />
			</Container>
		</>
	)
}
