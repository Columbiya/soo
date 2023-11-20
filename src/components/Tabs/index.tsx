'use client'

import { FC, useState, ReactNode, useRef } from 'react'
import { TabsItem } from './types'

import cl from './style.module.scss'
import { classNames } from '@/helpers'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NavigationButtons } from './NavigationButtons'

type TabsProps = {
	items: TabsItem[]
	activeClass?: string
	divider?: ReactNode
	contentContainerClass?: string
}

export const Tabs: FC<TabsProps> = ({
	items,
	activeClass,
	divider,
	contentContainerClass
}) => {
	const [currentTabId, setCurrentTabId] = useState(items[0]?.id)
	const [mouseOverId, setMouseOverId] = useState<string | null>(null)

	console.log({ currentTabId })

	if (items.length === 0) return null

	return (
		<>
			{
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
			}

			<div className={cl.tabsSlider}>
				<Swiper
					slidesPerView={1}
					onSlideChange={(swiper) =>
						setCurrentTabId(items[swiper.activeIndex].id)
					}
				>
					{items.map((item) => (
						<SwiperSlide key={item.id} className={cl.slide}>
							<div
								className={classNames(cl.tab, {
									[cl.active]:
										!activeClass &&
										(currentTabId === item.id || mouseOverId === item.id),
									[activeClass as string]:
										!!activeClass &&
										(currentTabId === item.id || mouseOverId === item.id)
								})}
							>
								<span>{item.tab}</span>
							</div>
						</SwiperSlide>
					))}
					<NavigationButtons />
				</Swiper>
			</div>

			{divider}

			<div className={classNames(cl.content, contentContainerClass)}>
				{items.find((it) => it.id === currentTabId)?.children}
			</div>
		</>
	)
}
