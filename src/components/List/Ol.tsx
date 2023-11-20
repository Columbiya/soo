import { FC } from 'react'
import { ListProps } from '.'

import cl from './style.module.scss'

type OlProps = Omit<ListProps, 'type'>

export const Ol: FC<OlProps> = ({ items }) => {
	return (
		<ol className={cl.list}>
			{items.map((it, i) => (
				<li key={i}>
					{it}
					<span className={cl.label}>{i + 1}</span>
				</li>
			))}
		</ol>
	)
}
