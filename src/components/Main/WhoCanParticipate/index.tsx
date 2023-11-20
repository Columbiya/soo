import { TabsItem } from '@/components/Tabs/types'
import cl from './style.module.scss'
import { BlockTitle, Container, Tabs } from '@/components'
import { Tab } from './Tab'

const items: TabsItem[] = [
	{
		id: '1',
		children: <div>1 tab</div>,
		tab: (
			<Tab
				text="Правообладатели объектов капитального строительства"
				image="/images/main/1-st-tab-image.svg"
			/>
		)
	},
	{
		id: '2',
		children: <div>2 tab</div>,
		tab: (
			<Tab
				text="Правообладатели помещений"
				image="/images/main/2-nd-tab-image.svg"
			/>
		)
	},
	{
		id: '3',
		children: <div>3 tab</div>,
		tab: (
			<Tab
				text="Собственники земельных участков"
				image="/images/main/3-rd-tab-image.svg"
			/>
		)
	}
]

export const WhoCanParticipate = () => {
	return (
		<Container className={cl.whoCanParticipate}>
			<BlockTitle>Кто может принять участие в проекте</BlockTitle>
			<p className={cl.descr}>
				Участие в общественных обсуждениях доступно авторизованным
				пользователям, подтвердившим свое право на собственность.
			</p>

			<Tabs items={items} />
		</Container>
	)
}
