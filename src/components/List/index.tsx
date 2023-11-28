import { ReactNode, FC } from 'react'

import cl from './style.module.scss'
import { ListTypes } from './types'
import { Ol } from './Ol'
import { Ul, UlProps } from './Ul'

export type ListProps = {
	type: ListTypes
	items: ReactNode[]
	prefix?: ReactNode
}

export const List: FC<ListProps> = ({ items, type }) => {
	if (type === ListTypes.OL) {
		return <Ol items={items} />
	} else if (type === ListTypes.UL) {
		return <Ul items={items} />
	} else {
		return null
	}
}
