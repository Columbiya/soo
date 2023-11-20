import { FC, useContext } from 'react'

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

const showEachItems = ['5', '10', '15', '20']

type ProjectFilterProps = {
	onFiltersChange: (next: Partial<ProjectFilterParams>) => void
}

interface ProjectFilterFormValues extends ProjectFilterParams {}

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

	const { handleSubmit, onChange, state } = useForm<ProjectFilterFormValues>(
		{
			documentType: documentType || '',
			limit: limit || '10',
			locality: locality || '',
			page: page || '1',
			period: period || '',
			search: search || '',
			stage: stage || ''
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
		if (nextStage === state.stage) {
			onChange('stage')('')
		} else {
			onChange('stage')(nextStage)
		}
	}

	return (
		<div className={cl.filter}>
			<form onSubmit={(e) => handleSubmit(e, onSubmit)}>
				<div className={cl.search}>
					<Select
						value={state.locality}
						onChange={(e) => onChange('locality')(e.target.value)}
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
						className={cl.input}
					/>
					<Button buttonSize={ButtonSize.Default} buttonType={ButtonType.Blue}>
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
										[cl.active]: s === state.stage
									})}
									onClick={() => onStageChange(s)}
								>
									{s}
								</span>
							))}
				</div>

				<div className={cl.typeFilters}>
					<div>
						<span>
							Вид документа:
							<Select
								onChange={(e) => onChange('documentType')(e.target.value)}
								value={state.documentType}
								className="plain-select"
							>
								{filters &&
									filters.documentTypes.map((t) => (
										<MenuItem value={t}>{t}</MenuItem>
									))}
							</Select>
						</span>
						<span>Период: </span>
					</div>
					<div>
						<span>
							Выводить по:
							<Select
								value={state.limit.toString()}
								onChange={(e) => onChange('limit')(e.target.value)}
								className="plain-select"
							>
								{showEachItems.map((each) => (
									<MenuItem key={each} value={each}>
										{each}
									</MenuItem>
								))}
							</Select>
						</span>
						<ShowAsToggle list={showAsList} onToggle={onChangeAsList} />
					</div>
				</div>
			</form>
		</div>
	)
}
