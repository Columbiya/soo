'use client'

import { FC, useState } from 'react'

import { AccordionItem as AccordionItemType } from './types'
import { AccordionItem } from './AccordionItem'

type AccordionProps = {
	items: AccordionItemType[]
}

export const Accordion: FC<AccordionProps> = ({ items }) => {
	const [currentActiveId, setCurrentActiveId] = useState(items[0]?.id)

	if (items.length === 0) return null

	return (
		<>
			{items.map((it) => (
				<AccordionItem
					{...it}
					key={it.id}
					onOpen={setCurrentActiveId}
					isOpen={it.id === currentActiveId}
				/>
			))}
		</>
	)
}
