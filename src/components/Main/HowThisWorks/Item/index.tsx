import { FC } from 'react'

import cl from './style.module.scss'

export type HowThisWorksItem = { children: React.ReactNode }
type HowThisWorksItemProps = HowThisWorksItem & { index: number }

export const HowItem: FC<HowThisWorksItemProps> = ({ children, index }) => {
	return (
		<div className={cl.item}>
			<span>0{index + 1}</span>
			<div className={cl.text}>{children}</div>
		</div>
	)
}
