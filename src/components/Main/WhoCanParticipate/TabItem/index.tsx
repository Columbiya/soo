import { FC, useMemo } from 'react'

import { WhoInProjectItem } from '@/types/fetch'
import { Accordion, Alert, List } from '@/components'
import { AlertTypes } from '@/components/Alert/type'
import Link from 'next/link'
import { AccordionItem } from '@/components/Accordion/types'
import { ListTypes } from '@/components/List/types'

import cl from './style.module.scss'

type TabItemProps = WhoInProjectItem

export const TabItem: FC<TabItemProps> = ({
	id,
	img,
	manual,
	nonResidential,
	residential,
	title
}) => {
	const accordionItems = useMemo<AccordionItem[]>(() => {
		const items: AccordionItem[] = []

		if (residential) {
			items.push({
				id: '1',
				header: 'Жилое помещение',
				children: <List items={residential} type={ListTypes.OL} />
			})
		}

		if (nonResidential) {
			items.push({
				id: '2',
				header: 'Нежилое помещение',
				children: <List items={nonResidential} type={ListTypes.OL} />
			})
		}

		return items
	}, [nonResidential, residential])
	return (
		<section className={cl.tab}>
			<h3 className={cl.title}>Инструкция</h3>
			{manual && (
				<Alert type={AlertTypes.INFO} className={cl.alert}>
					<strong>
						<Link href="/login" className={cl.link}>
							Авторизуйтесь
						</Link>{' '}
						на портале через госуслуги
					</strong>
					<p>
						После авторизации вам станет доступен раздел «Мои адреса»,
						необходимый для добавления адреса регистрации
					</p>
				</Alert>
			)}

			<h5 className={cl.subtitle}>Подтвердите свое право на собственность</h5>

			<Accordion items={accordionItems} className={cl.accordion} />
		</section>
	)
}
