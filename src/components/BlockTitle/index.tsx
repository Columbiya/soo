import { ReactNode, FC } from 'react'
import { classNames } from '@/helpers'

import cl from './style.module.scss'

type BlockTitleProps = { children: ReactNode; className?: string }

export const BlockTitle: FC<BlockTitleProps> = ({ children, className }) => {
	return <h3 className={classNames(cl.title, className)}>{children}</h3>
}
