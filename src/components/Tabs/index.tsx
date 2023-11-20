'use client'

import { FC, useState, ReactNode } from 'react'
import { TabsItem } from './types'

import cl from './style.module.scss'
import { classNames } from '@/helpers'

type TabsProps = {
	items: TabsItem[]
	activeClass?: string
	divider?: ReactNode
}

export const Tabs: FC<TabsProps> = ({ items, activeClass, divider }) => {
	const [currentTabId, setCurrentTabId] = useState(items[0]?.id)
	const [mouseOverId, setMouseOverId] = useState<string | null>(null)

	if (items.length === 0) return null

	return (
		<>
			<div className={cl.tabs}>
				{items.map((item) => (
					<div
						key={item.id}
						onClick={() => setCurrentTabId(item.id)}
						onMouseOver={() => setMouseOverId(item.id)}
						onMouseLeave={() => setMouseOverId(null)}
						className={classNames(cl.tab, {
							[cl.active]:
								!activeClass &&
								(currentTabId === item.id || mouseOverId === item.id),
							[activeClass as string]:
								!!activeClass &&
								(currentTabId === item.id || mouseOverId === item.id)
						})}
					>
						{item.tab}
					</div>
				))}
			</div>

			{divider}

			<div className={cl.content}>
				{items.find((it) => it.id === currentTabId)?.children}
			</div>
		</>
	)
}
