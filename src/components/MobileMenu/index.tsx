import { Dispatch, SetStateAction, FC, useEffect } from 'react'
import Link from 'next/link'
import { classNames } from '@/helpers'
import { Button } from '@/components'
import { ButtonKind, ButtonSize, ButtonType } from '@/types'
import { useDisableWindowScroll } from '@/hooks'
import { Router } from 'next/router'

import cl from './style.module.scss'

type MobileMenuProps = {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
}

export const MobileMenu: FC<MobileMenuProps> = ({ open, setOpen }) => {
	useDisableWindowScroll(open)

	useEffect(() => {
		function onRouteChange() {
			setOpen(false)
		}

		Router.events.on('routeChangeComplete', onRouteChange)

		return () => {
			Router.events.off('routeChangeComplete', onRouteChange)
		}
	}, [setOpen])

	return (
		<nav
			className={classNames(cl.menu, {
				[cl.open]: open
			})}
		>
			<div className={cl.navContainer}>
				<div>
					<Link href="/projects">Проекты</Link>
				</div>
				<div>
					<Link href="/#about" onClick={() => setOpen(false)}>
						О сервисе
					</Link>
				</div>
				<div>
					<Link href="/#qna" onClick={() => setOpen(false)}>
						Вопросы и ответы
					</Link>
				</div>
				<div>
					<Link href="/#feedback" onClick={() => setOpen(false)}>
						Обратная связь
					</Link>
				</div>
			</div>

			<div>
				<Button
					buttonType={ButtonType.Blue}
					buttonKind={ButtonKind.SlightRounded}
					buttonSize={ButtonSize.Default}
					className={cl.loginButton}
				>
					Войти
				</Button>
			</div>
		</nav>
	)
}
