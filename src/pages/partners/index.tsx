import { Container, PageTitle } from '@/components'
import { Constants } from '@/types'
import { GetServerSideProps } from 'next'
import Head from 'next/head'

import cl from '../politics/page.module.scss'

export const getServerSideProps: GetServerSideProps = async () => {
	try {
		const { title, text } = await fetch(
			`${Constants.BASE_URL}/content/boarding`
		).then((res) => res.json())

		return {
			props: {
				title,
				text
			}
		}
	} catch (err) {
		return {
			notFound: true
		}
	}
}

type PartnersPageProps = {
	title: string
	text: string
}

export default function PartnersPage({ text, title }: PartnersPageProps) {
	return (
		<>
			<Head>
				<title>Политика конфиденциальности</title>
			</Head>
			<Container>
				<div className={cl.title}>
					<PageTitle>{title}</PageTitle>
				</div>

				<div
					dangerouslySetInnerHTML={{ __html: text }}
					className={cl.content}
				/>
			</Container>
		</>
	)
}
