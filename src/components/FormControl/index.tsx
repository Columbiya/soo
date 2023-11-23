import { ReactNode, FC } from 'react'

import cl from './style.module.scss'

export type FormControlProps = {
	children: ReactNode
	error?: string | null
}

export const FormControl: FC<FormControlProps> = ({ children, error }) => {
	return (
		<div className={cl.formControl}>
			{children}

			{error && <span className={cl.error}>{error}</span>}
		</div>
	)
}
