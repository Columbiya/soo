import { FC } from 'react'
import { Button } from '@/components'
import { ButtonKind, ButtonSize, ButtonType } from '@/types'

import cl from './style.module.scss'
import { classNames } from '@/helpers'
import { useScrollTop } from '@/hooks'

type ScrollUpButtonProps = {}

export const ScrollUpButton: FC<ScrollUpButtonProps> = () => {
	const scrollTop = useScrollTop()
	const onScrollTop = () => window.scrollTo({ behavior: 'smooth', top: 0 })

	return (
		<Button
			onClick={onScrollTop}
			buttonKind={ButtonKind.Rounded}
			buttonSize={ButtonSize.Small}
			buttonType={ButtonType.Blue}
			className={classNames(cl.scrollUpButton, {
				[cl.shown]: scrollTop > 150
			})}
		>
			<svg
				width="30"
				height="15"
				viewBox="0 0 30 15"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M28.2763 13.0345L15.0005 1.77014L1.72461 13.0345"
					stroke="white"
					strokeWidth="2.41379"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</Button>
	)
}
