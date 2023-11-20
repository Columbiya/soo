import { FC } from 'react'

import { ProjectItem } from '@/types/fetch/projects'

import cl from './style.module.scss'
import { BlockTitle, Button, Container } from '@/components'
import Link from 'next/link'
import { ButtonKind, ButtonSize, ButtonType } from '@/types'
import { ProjectItemAsSquare } from '../project-page/ProjectsList/ProjectItemAsSquare'
import { useRouter } from 'next/router'

type MostPopularProjectsProps = {
	items: ProjectItem[]
}

export const MostPopularProjects: FC<MostPopularProjectsProps> = ({
	items
}) => {
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

				<div className={cl.list}>
					{items.map((item) => (
						<ProjectItemAsSquare {...item} key={item.id} />
					))}
				</div>
			</Container>
		</section>
	)
}
