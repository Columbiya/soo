import { FC } from 'react'

import cl from './style.module.scss'

type TabProps = { text: string }

export const Tab: FC<TabProps> = ({ text }) => {
	return (
		<span className={cl.tab}>
			<span>{text}</span>
		</span>
	)
}
