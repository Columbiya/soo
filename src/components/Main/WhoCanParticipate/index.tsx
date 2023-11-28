import { FC, useMemo } from 'react'

import { TabsItem } from '@/components/Tabs/types'
import cl from './style.module.scss'
import { BlockTitle, Container, Tabs } from '@/components'
import { Tab } from './Tab'
import { WhoInProjectItem } from '@/types/fetch'
import { TabItem } from './TabItem'

const items: TabsItem[] = [
	{
		id: '1',
		children: <div>1 tab</div>,
		tab: '/images/main/1-st-tab-image.svg'
	},
	{
		id: '2',
		children: <div>2 tab</div>,
		tab: '/images/main/2-nd-tab-image.svg'
	},
	{
		id: '3',
		children: <div>3 tab</div>,
		tab: '/images/main/3-rd-tab-image.svg'
	}
]

type WhoCanParticipateProps = {
	whoInProject: WhoInProjectItem[]
}

export const WhoCanParticipate: FC<WhoCanParticipateProps> = ({
	whoInProject
}) => {
	const tabItems = useMemo<TabsItem[]>(
		() =>
			whoInProject?.map((w, i) => ({
				id: w.id.toString(),
				tab: <Tab text={w.title} image={items[i].tab as string} />,
				children: <TabItem {...w} />
			})),
		[whoInProject]
	)

	return (
		<Container className={cl.whoCanParticipate}>
			<BlockTitle>Кто может принять участие в проекте</BlockTitle>
			<p className={cl.descr}>
				Участие в общественных обсуждениях доступно авторизованным
				пользователям, подтвердившим свое право на собственность.
			</p>

			<Tabs items={tabItems || []} contentContainerClass={cl.content} />
		</Container>
	)
}
