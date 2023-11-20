import { FC, ReactNode } from 'react'

import cl from './style.module.scss'

type PageTitleProps = {
	children: ReactNode
}

export const PageTitle: FC<PageTitleProps> = ({ children }) => {
	return <h1 className={cl.title}>{children}</h1>
}
