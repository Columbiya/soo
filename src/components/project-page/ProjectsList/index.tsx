import {
	ChangeEvent,
	FC,
	useContext,
	ReactNode,
	useMemo,
	SyntheticEvent
} from 'react'
import { ProjectFilterParams, ProjectItem } from '@/types/fetch/projects'
import { useRouter } from 'next/router'

import cl from './style.module.scss'
import { Pagination } from '@mui/material'
import { ProjectFilter } from '..'
import { ProjectsContext } from '@/contexts'
import { ProjectItemAsListItem } from './ProjectItemAsListItem'
import { ProjectItemAsSquare } from './ProjectItemAsSquare'
import { classNames } from '@/helpers'
import { Button } from '@/components'
import { ButtonKind, ButtonSize, ButtonType } from '@/types'

type ProjectsListProps = {
	items: ProjectItem[]
	totalCount: number
}

export const ProjectsList: FC<ProjectsListProps> = ({ items, totalCount }) => {
	const { showAsList } = useContext(ProjectsContext)

	const router = useRouter()
	const limit = parseInt(router.query.limit as string) || 5
	const page = parseInt(router.query.page as string) || 1
	const pagesCount = Math.ceil(totalCount / limit)

	const onPageChange = (event: SyntheticEvent<unknown>, next: number) => {
		router.push(
			{ pathname: router.pathname, query: { ...router.query, page: next } },
			undefined,
			{
				scroll: true
			}
		)
	}

	const onFiltersChange = (query: Partial<ProjectFilterParams>) => {
		router.push({ pathname: router.pathname, query }, undefined, {
			scroll: true
		})
	}

	const itemsList = useMemo(() => {
		if (showAsList) {
			return items.map((item) => (
				<ProjectItemAsListItem key={item.id} {...item} />
			))
		} else {
			return items.map((item) => (
				<ProjectItemAsSquare key={item.id} {...item} />
			))
		}
	}, [items, showAsList])

	return (
		<div className={cl.list}>
			<ProjectFilter onFiltersChange={onFiltersChange} />
			{itemsList.length > 0 && (
				<section
					className={classNames(cl.projects, {
						[cl.squares]: !showAsList
					})}
				>
					{itemsList}
				</section>
			)}
			{totalCount > 0 && totalCount > limit && (
				<div className={cl.pagination}>
					<Pagination
						count={pagesCount}
						page={page}
						onChange={onPageChange}
						hidePrevButton={page === 1}
						hideNextButton={page === pagesCount}
						color="primary"
					/>
				</div>
			)}
			{page < totalCount && (
				<div className={cl.showMoreButton}>
					<Button
						buttonKind={ButtonKind.Rounded}
						buttonSize={ButtonSize.Default}
						buttonType={ButtonType.Blue}
						onClick={(e) => onPageChange(e, page + 1)}
						className={cl.btn}
					>
						Показать еще
					</Button>
				</div>
			)}
			{totalCount === 0 && (
				<div className={cl.notFound}>
					<h3>Проектов с заданным фильтром не нашлось</h3>
				</div>
			)}
		</div>
	)
}
