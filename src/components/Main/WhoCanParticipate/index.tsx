import { FC, useMemo } from 'react'

import { TabsItem } from '@/components/Tabs/types'
import cl from './style.module.scss'
import { BlockTitle, Container, Tabs } from '@/components'
import { WhoInProjectItem } from '@/types/fetch'
import { TabItem } from './TabItem'
import dynamic from 'next/dynamic'

const Tab = dynamic(() => import('./Tab'), { ssr: false })

const items: TabsItem[] = [
	{
		id: '1',
		children: <div>1 tab</div>,
		tab: 'https://lottie.host/e540e8c9-b9a5-463b-b454-d8573857597e/nVhduIfV3X.json'
	},
	{
		id: '2',
		children: <div>2 tab</div>,
		tab: 'https://lottie.host/85bf0bfe-9f38-43d2-ba16-19ef3c03d661/Qonvci7Tz0.json'
	},
	{
		id: '3',
		children: <div>3 tab</div>,
		tab: 'https://lottie.host/8a8e04bc-d979-4731-8110-23d9ba0342ed/BDplhE6vUg.json'
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

export default WhoCanParticipate
