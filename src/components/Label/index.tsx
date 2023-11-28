import { FC, ReactNode } from 'react'

import cl from './style.module.scss'

type LabelProps = {
	children: ReactNode
}

export const Label: FC<LabelProps> = ({ children }) => {
	return <span className={cl.label}>{children}</span>
}
