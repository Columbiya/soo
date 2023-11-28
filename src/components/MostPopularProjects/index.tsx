'use client'

import { FC, useState } from 'react'

import { ProjectItem } from '@/types/fetch/projects'
import { Swiper, SwiperSlide } from 'swiper/react'

import { BlockTitle, Button, Container } from '@/components'
import { ButtonKind, ButtonSize, ButtonType } from '@/types'
import { ProjectItemAsSquare } from '../project-page/ProjectsList/ProjectItemAsSquare'
import { useRouter } from 'next/router'
import { classNames } from '@/helpers'

import cl from './style.module.scss'
import { SwiperProgress } from './SwiperProgress'

type MostPopularProjectsProps = {
	items: ProjectItem[]
}

export const MostPopularProjects: FC<MostPopularProjectsProps> = ({
	items
}) => {
	const [currentSlide, setCurrentSlide] = useState(0)
	const router = useRouter()

	return (
		<section className={cl.mostViewedProjects}>
			<Container>
				<header className={cl.header}>
					<BlockTitle className={cl.white}>
						Самые обсуждаемые проекты
					</BlockTitle>
					<Button
						buttonKind={ButtonKind.SlightRounded}
						buttonSize={ButtonSize.Default}
						buttonType={ButtonType.White}
						className={cl.btn}
						onClick={() => router.push('/projects')}
					>
						Смотреть все проекты
					</Button>
				</header>

				<img
					src="/images/main/most-viewed-image.svg"
					alt=""
					className={cl.image}
				/>

				<div className={cl.scrollContainer}>
					<Swiper
						slidesPerView={3}
						breakpoints={{
							320: {
								slidesPerView: 1
							},
							720: {
								slidesPerView: 2
							},
							1280: {
								slidesPerView: 3
							}
						}}
						spaceBetween={25}
						className={cl.swiper}
						onSlideChange={(s) => setCurrentSlide(s.activeIndex)}
					>
						{items.map((item) => (
							<SwiperSlide key={item.id} className={cl.slide}>
								<ProjectItemAsSquare {...item} />
							</SwiperSlide>
						))}

						<SwiperProgress currentIndex={currentSlide} />
					</Swiper>
				</div>

				<Button
					buttonKind={ButtonKind.SlightRounded}
					buttonSize={ButtonSize.Default}
					buttonType={ButtonType.White}
					className={classNames(cl.btn, cl.mobile)}
					onClick={() => router.push('/projects')}
				>
					Смотреть все проекты
				</Button>
			</Container>
		</section>
	)
}
