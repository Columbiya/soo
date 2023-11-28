import { BlockTitle, Container } from '@/components'
import cl from './style.module.scss'
import Image from 'next/image'
import { HowItem, HowThisWorksItem } from './Item'
import Link from 'next/link'

const items: HowThisWorksItem[] = [
	{
		children: (
			<p>
				<Link href="/sign-up">Зарегистрируйтесь</Link> на портале и заполните
				свой профиль
			</p>
		)
	},
	{
		children: 'Подтвердите право участия в общественных обсуждениях'
	},
	{
		children: 'Участвуйте в общественных обсуждениях'
	}
]

export const HowThisWorks = () => {
	return (
		<div className={cl.howThisWorks}>
			<Container>
				<div className={cl.inner}>
					<BlockTitle className={cl.title}>Как это работает?</BlockTitle>
					<div className={cl.items}>
						{items.map((item, i) => (
							<HowItem key={i} index={i}>
								{item.children}
							</HowItem>
						))}
					</div>
				</div>
				<Image
					src="/images/main/how-it-works-image.svg"
					alt=""
					width={230}
					height={377}
					className={cl.image}
				/>
			</Container>
		</div>
	)
}
