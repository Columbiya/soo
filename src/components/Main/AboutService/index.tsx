import Image from 'next/image'

import cl from './style.module.scss'
import { BlockTitle, Container } from '@/components'

export const AboutService = () => {
	return (
		<Container>
			<div className={cl.about} id="about">
				<div className={cl.image}>
					<video src="/about-service.mp4" autoPlay muted loop controls={false}>
						Sorry, your browser doesn&apos;t support embedded videos, but
						don&apos;t worry, you can
						<a href="/about-service.mp4">download it</a>
						and watch it with your favorite video player!
					</video>
				</div>

				<div className={cl.text}>
					<BlockTitle>о сервисе</BlockTitle>
					<p className={cl.firstText}>
						Общественные обсуждения и публичные слушания — это возможность для
						граждан узнать о начале общественных обсуждений / публичных слушаний
						и оставить свои замечания и предложения по вопросам, выносящимся на
						обсуждение.
					</p>

					<p>
						Общественные обсуждения и публичные слушания — это возможность для
						граждан узнать о начале общественных обсуждений / публичных слушаний
						и оставить свои замечания и предложения по вопросам, выносящимся на
						обсуждение.Общественные обсуждения и публичные слушания — это
						возможность для граждан узнать о начале общественных обсуждений /
						публичных слушаний и оставить свои замечания и предложения по
						вопросам, выносящимся на обсуждение.
					</p>
				</div>
			</div>
		</Container>
	)
}
