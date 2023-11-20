import { FC } from 'react'

import cl from './style.module.scss'

type HrProps = { color?: string }

export const Hr: FC<HrProps> = ({ color = '#ccc' }) => (
	<div className={cl.hr} style={{ borderColor: color }} />
)
