import { QNA } from '@/components/Main'
import { Constants } from '@/types'
import { MainContentResponseType } from '@/types/fetch'
import Head from 'next/head'

export async function getServerSideProps() {
	const content = (await fetch(`${Constants.BASE_URL}/content/main`).then(
		(res) => res.json()
	)) as MainContentResponseType

	return {
		props: {
			...content
		}
	}
}

type QnaProps = MainContentResponseType

export default function QnaPage({ questionsAndAnswers }: QnaProps) {
	return (
		<>
			<Head>
				<title>Вопросы и ответы</title>
			</Head>

			<QNA questionsAndAnswers={questionsAndAnswers} />
		</>
	)
}
