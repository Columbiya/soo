// @ts-nocheck

import { FC, useContext, useEffect } from 'react'

import {
	ProjectFilterParams,
	ProjectFilterResponse
} from '@/types/fetch/projects'
import { useRouter } from 'next/router'

import cl from './style.module.scss'
import { Button, Input } from '@/components'
import { useFetch, useForm } from '@/hooks'
import { ButtonSize, ButtonType, Constants } from '@/types'
import { MenuItem, Select } from '@mui/material'
import { classNames } from '@/helpers'
import { ShowAsToggle } from '..'
import { ProjectsContext } from '@/contexts'

const showEachItems = ['10', '20', '50']

type ProjectFilterProps = {
	onFiltersChange: (next: Partial<ProjectFilterParams>) => void
}

interface ProjectFilterFormValues extends Omit<ProjectFilterParams, 'stage'> {
	stage: string[]
}

export const ProjectFilter: FC<ProjectFilterProps> = ({ onFiltersChange }) => {
	const { onChangeAsList, showAsList } = useContext(ProjectsContext)
	const router = useRouter()

	// TODO type the right way
	const [filters, error] = useFetch<ProjectFilterResponse>(
		`${Constants.BASE_URL}/project/get-filter`,
		{ lazy: false }
	)

	const { documentType, limit, locality, page, period, search, stage } =
		router.query as Partial<ProjectFilterParams>

	const getParsedStage = (s: string) => {
		try {
			return JSON.parse(s)
		} catch (e) {
			console.log(e)
			return []
		}
	}

	const { handleSubmit, onChange, state } = useForm<ProjectFilterFormValues>(
		{
			documentType: documentType || '',
			limit: limit || '10',
			locality: locality || '',
			page: page || '1',
			period: period || '',
			search: search || '',
			stage: stage ? getParsedStage(stage) : []
		},
		{
			documentType: null,
			limit: null,
			locality: null,
			page: null,
			period: null,
			search: null,
			stage: null
		}
	)

	const getQueryByState = () => {
		return Object.keys(state).reduce((acc, key) => {
			const k = key as keyof ProjectFilterParams

			if (state[k]) {
				acc[k] = state[k]
			}

			return acc
		}, {} as ProjectFilterParams)
	}

	const onSubmit = () => {
		const query = getQueryByState()
		onFiltersChange(query)
	}

	const onStageChange = (nextStage: string) => {
		let newStages: string[]

		if (state.stage.includes(nextStage)) {
			newStages = state.stage.filter((s) => s !== nextStage)
		} else {
			newStages = [...state.stage, nextStage]
		}

		onChange('stage')(newStages)
		onFiltersChange({ ...state, stage: JSON.stringify(newStages) })
	}

	const isStageActive = (stage: string) => {
		return state.stage.includes(stage)
	}

	useEffect(() => {
		if (!filters) return

		onChange('period')(filters.periods[0] || '')
		onChange('locality')(filters.localities[0] || '')
		onChange('documentType')(filters.documentTypes[0] || '')
	}, [filters])

	return (
		<div className={cl.filter}>
			<form onSubmit={(e) => handleSubmit(e, onSubmit)}>
				<div className={cl.search}>
					<Select
						value={state.locality}
						onChange={(e) => onChange('locality')(e.target.value)}
						className={cl.localitySelect}
						MenuProps={{
							anchorOrigin: {
								vertical: 'bottom',
								horizontal: 'left'
							},
							transformOrigin: {
								vertical: 'top',
								horizontal: 'left'
							},
							getContentAnchorEl: null,
							PaperProps: {
								sx: {
									maxHeight: 250
								}
							}
						}}
					>
						{filters &&
							filters.localities.map((l) => (
								<MenuItem value={l} key={l}>
									{l}
								</MenuItem>
							))}
					</Select>
					<Input
						onChange={onChange('search')}
						name="search"
						value={state.search}
						placeholder="Поиск проекта"
					/>
					<Button
						buttonSize={ButtonSize.Default}
						buttonType={ButtonType.Blue}
						className={cl.searchButton}
					>
						Найти
					</Button>
				</div>

				<div className={cl.stages}>
					{filters &&
						filters.stages
							.filter((s) => s !== 'все')
							.map((s) => (
								<span
									className={classNames(cl.stageToggle, {
										[cl.active]: isStageActive(s)
									})}
									onClick={() => onStageChange(s)}
									key={s}
								>
									{s}
								</span>
							))}
				</div>

				<div className={cl.typeFilters}>
					<div>
						<div className={cl.typeFilterItem}>
							Вид документа:
							<Select
								onChange={(e) => {
									onChange('documentType')(e.target.value)
									onFiltersChange({
										...state,
										stage: JSON.stringify(state.stage),
										documentType: e.target.value
									})
								}}
								MenuProps={{
									anchorOrigin: {
										vertical: 'bottom',
										horizontal: 'left'
									},
									transformOrigin: {
										vertical: 'top',
										horizontal: 'left'
									},
									getContentAnchorEl: null
								}}
								value={state.documentType}
								className="plain-select"
							>
								{filters &&
									filters.documentTypes.map((t) => (
										<MenuItem value={t} key={t}>
											{t}
										</MenuItem>
									))}
							</Select>
						</div>
						<div className={cl.typeFilterItem}>
							Период:
							<Select
								onChange={(e) => {
									onChange('period')(e.target.value)
									onFiltersChange({
										...state,
										stage: JSON.stringify(state.stage),
										period: e.target.value
									})
								}}
								MenuProps={{
									anchorOrigin: {
										vertical: 'bottom',
										horizontal: 'left'
									},
									transformOrigin: {
										vertical: 'top',
										horizontal: 'left'
									},
									getContentAnchorEl: null
								}}
								value={state.period}
								className="plain-select"
							>
								{filters &&
									filters.periods.map((p) => (
										<MenuItem key={p} value={p}>
											{p}
										</MenuItem>
									))}
							</Select>
						</div>
					</div>
					<div className={cl.showBy}>
						<div className={cl.typeFilterItem}>
							Выводить по:
							<Select
								value={state.limit.toString()}
								onChange={(e) => {
									onChange('limit')(e.target.value)
									onFiltersChange({
										...state,
										stage: JSON.stringify(state.stage),
										limit: e.target.value
									})
								}}
								MenuProps={{
									anchorOrigin: {
										vertical: 'bottom',
										horizontal: 'left'
									},
									transformOrigin: {
										vertical: 'top',
										horizontal: 'left'
									},
									getContentAnchorEl: null
								}}
								className="plain-select"
							>
								{showEachItems.map((each) => (
									<MenuItem key={each} value={each}>
										{each}
									</MenuItem>
								))}
							</Select>
						</div>
						<ShowAsToggle
							list={showAsList}
							onToggle={onChangeAsList}
							className={cl.showAs}
						/>
					</div>
				</div>
			</form>
		</div>
	)
}
