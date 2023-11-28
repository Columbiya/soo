import { FC, ReactNode } from 'react'
import { AlertTypes } from './type'

import cl from './style.module.scss'
import { classNames } from '@/helpers'
import { getAlertClassDependingOnType } from '@/helpers'

type AlertProps = {
	type: AlertTypes
	children: ReactNode
	className?: string
}

export const Alert: FC<AlertProps> = ({ type, className, children }) => {
	return (
		<div
			className={classNames(
				cl.alert,
				getAlertClassDependingOnType(type),
				className
			)}
		>
			{children}
		</div>
	)
}
