import { FC } from 'react'

import cl from './style.module.scss'

type ContainerProps = {
	maxWidth?: number
	children: React.ReactNode
	className?: string
}

export const Container: FC<ContainerProps> = ({
	maxWidth,
	children,
	className
}) => {
	return (
		<div className={`${cl.container} ${className || ''}`} style={{ maxWidth }}>
			{children}
		</div>
	)
}
