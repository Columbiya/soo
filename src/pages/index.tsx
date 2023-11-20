import { useMemo } from 'react'
import { Container, MostPopularProjects } from '@/components'
import styles from './page.module.scss'
import {
	AboutService,
	Feedback,
	HowThisWorks,
	QNA,
	WhoCanParticipate
} from '@/components/Main'
import { Constants } from '@/types'
import { MainContentResponseType, MainMostViewedProjects } from '@/types/fetch'
import Head from 'next/head'
import { ProjectItem } from '@/types/fetch/projects'

type AchievmentType = { amount: string; text: string }

export async function getServerSideProps() {
	const content = (await fetch(`${Constants.BASE_URL}/content/main`).then(
		(res) => res.json()
	)) as MainContentResponseType

	const mostViewedProjects = (await fetch(
		`${Constants.BASE_URL}/project/get-list?${new URLSearchParams({
			limit: '3',
			main: 'true'
		})}`
	).then((res) => res.json())) as MainMostViewedProjects

	return {
		props: {
			...content,
			mostViewed: JSON.stringify(mostViewedProjects.data)
		}
	}
}

const achievments: AchievmentType[] = [
	{ amount: '800', text: 'Открытых обсуждений' },
	{ amount: '1700', text: 'Консультаций оказано' },
	{ amount: '402 000', text: 'Мнений жителей учтено' }
]

type HomeProps = MainContentResponseType & {
	mostViewed: string
}

export default function Home({
	header,
	questionsAndAnswers,
	whoInProject,
	seo: { description, keywords, title },
	mostViewed: mostViewedStringified
}: HomeProps) {
	const mostViewed = useMemo<ProjectItem[]>(
		() => JSON.parse(mostViewedStringified),
		[mostViewedStringified]
	)

	return (
		<>
			<Head>
				<title>{title}</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>
			<Container>
				<div className={styles.mainBlock}>
					<div className={styles.content}>
						<h1 className={styles.title}>
							Портал общественных обсуждений градостроительных проектов
							Республики Башкортостан
						</h1>
						<p className={styles.text}>
							Сервис, с помощью которого жители города могут ознакомиться с
							градостроительными проектами, задать вопросы архитекторам и
							разработчикам проектов и оставить свои предложения и замечания
						</p>
						<div className={styles.achievements}>
							{achievments.map((a) => (
								<div className={styles.achievement} key={a.text}>
									<span>{a.amount}+</span>
									<p className={styles.text}>{a.text}</p>
								</div>
							))}
						</div>
					</div>
					<video
						src="/main-video.mp4"
						autoPlay
						muted
						className={styles.video}
						loop
						controls={false}
					>
						Sorry, your browser doesn&apos;t support embedded videos, but
						don&apos;t worry, you can
						<a href="/main-video.mp4">download it</a>
						and watch it with your favorite video player!
					</video>
				</div>
			</Container>

			<HowThisWorks />
			<WhoCanParticipate whoInProject={whoInProject} />
			<MostPopularProjects items={mostViewed || []} />
			<AboutService />
			<QNA questionsAndAnswers={questionsAndAnswers} />

			<Feedback />
		</>
	)
}
