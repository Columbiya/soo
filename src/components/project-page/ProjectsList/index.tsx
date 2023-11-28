import { ChangeEvent, FC, useContext, ReactNode, useMemo } from 'react'
import { ProjectFilterParams, ProjectItem } from '@/types/fetch/projects'
import { useRouter } from 'next/router'

import cl from './style.module.scss'
import { Pagination } from '@mui/material'
import { ProjectFilter } from '..'
import { ProjectsContext } from '@/contexts'
import { ProjectItemAsListItem } from './ProjectItemAsListItem'
import { ProjectItemAsSquare } from './ProjectItemAsSquare'
import { classNames } from '@/helpers'

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

	const onPageChange = (event: ChangeEvent<unknown>, next: number) => {
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
		<>
			<ProjectFilter onFiltersChange={onFiltersChange} />
			<section
				className={classNames(cl.projects, {
					[cl.squares]: !showAsList
				})}
			>
				{itemsList}
			</section>
			<div className={cl.pagination}>
				{totalCount > 0 && (
					<Pagination
						count={pagesCount}
						page={page}
						onChange={onPageChange}
						color="primary"
					/>
				)}

				{totalCount === 0 && <h3>Проектов с заданным фильтром не нашлось</h3>}
			</div>
		</>
	)
}
