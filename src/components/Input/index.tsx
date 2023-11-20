import { FC } from 'react'
import { InputHTMLAttributes } from 'react'

import cl from './style.module.scss'
import { classNames } from '@/helpers'

type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
	label?: string
	onChange: (val: string) => void
}

export const Input: FC<InputProps> = ({
	onChange,
	value,
	required,
	label,
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
				required={required}
				onChange={(e) => onChange(e.target.value)}
				value={value}
			/>
		</label>
	)
}
