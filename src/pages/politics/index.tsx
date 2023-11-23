import { useMemo } from 'react'
import { Container, PageTitle } from '@/components'
import { Constants } from '@/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import cl from './page.module.scss'

export const getServerSideProps: GetServerSideProps = async (context) => {
	try {
		const politics = await fetch(
			`${Constants.BASE_URL}/content/privacy-policy`,
			{
				method: 'GET'
			}
		).then((res) => res.json())

		return {
			props: {
				politics: JSON.stringify(politics)
			}
		}
	} catch (e) {
		console.log(e)

		return {
			props: {
				politics: []
			}
		}
	}
}

export default function Politics({ politics }: { politics: string }) {
	const politicsParsed = useMemo<{ title: string; text: string }>(
		() => JSON.parse(politics),
		[politics]
	)

	return (
		<>
			<Head>
				<title>Политика конфиденциальности</title>
			</Head>
			<Container>
				<div className={cl.title}>
					<PageTitle>{politicsParsed.title}</PageTitle>
				</div>

				<div
					dangerouslySetInnerHTML={{ __html: politicsParsed.text }}
					className={cl.content}
				/>
			</Container>
		</>
	)
}
