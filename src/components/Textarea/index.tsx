import { FC } from 'react'
import { InputHTMLAttributes } from 'react'

import cl from '@/components/Input/style.module.scss'
import { classNames } from '@/helpers'

type InputProps = Omit<InputHTMLAttributes<HTMLTextAreaElement>, 'onChange'> & {
	label?: string
	onChange: (val: string) => void
	error?: boolean
	success?: boolean
}

export const Textarea: FC<InputProps> = ({
	onChange,
	value,
	required,
	label,
	error,
	success,
	...props
}) => {
	return (
		<label className={cl.label}>
			<span
				className={classNames({
					[cl.error]: !!required
				})}
			>
				{label}
			</span>
			<textarea
				{...props}
				onChange={(e) => onChange(e.target.value)}
				value={value}
				className={classNames({
					[cl.errored]: !!error,
					[cl.success]: !!success
				})}
			/>
		</label>
	)
}
