import Image from 'next/image'

import cl from './style.module.scss'
import { BlockTitle, Container } from '@/components'

export const AboutService = () => {
	return (
		<Container>
			<div className={cl.about}>
				<div className={cl.image}>
					<img src="/images/main/about-service-image.svg" alt="" />
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
