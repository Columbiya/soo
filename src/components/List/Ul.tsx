import { FC, ReactNode } from 'react'
import { ListProps } from '.'

import cl from './style.module.scss'
import { classNames } from '@/helpers'

export type UlProps = Omit<ListProps, 'type'> & { prefix?: ReactNode }

export const Ul: FC<UlProps> = ({ items, prefix }) => {
	return (
		<ul className={classNames(cl.list, cl.ul)}>
			{items.map((it, i) => (
				<li key={i}>{it}</li>
			))}
		</ul>
	)
}
