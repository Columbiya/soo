import { FC } from 'react'
import { InputHTMLAttributes } from 'react'

import cl from './style.module.scss'
import { classNames } from '@/helpers'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
	label?: string
	onChange: (val: string) => void
	error?: boolean
}

export const Input: FC<InputProps> = ({
	onChange,
	value,
	required,
	label,
	error,
	...props
}) => {
	return (
		<label className={cl.label}>
			{label && (
				<span
					className={classNames({
						[cl.error]: !!required
					})}
				>
					{label}
				</span>
			)}
			<input
				{...props}
				onChange={(e) => onChange(e.target.value)}
				value={value}
				className={classNames({
					[cl.errored]: !!error
				})}
			/>
		</label>
	)
}
