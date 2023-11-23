import { useMemo, useState } from 'react'
import { Button } from '@/components'
import cl from './style.module.scss'
import { ButtonKind, ButtonSize, ButtonType, STORAGE_KEYS } from '@/types'
import { classNames } from '@/helpers'
import { Exo_2 } from 'next/font/google'
import Link from 'next/link'

const exo = Exo_2({ subsets: ['cyrillic'] })

export const Cookie = () => {
	const [closed, setClosed] = useState(false)

	const open = useMemo(
		() => !localStorage.getItem(STORAGE_KEYS.COOKIE_POPUP),
		[]
	)

	const onClose = () => {
		localStorage.setItem(STORAGE_KEYS.COOKIE_POPUP, 'shown')
		setClosed(true)
	}

	return (
		<div
			className={classNames(cl.cookie, exo.className, {
				[cl.hidden]: !open || closed
			})}
		>
			<div>
				Мы используем cookie. Это позволяет нам анализировать взаимодействие
				посетителей с сайтом и делать его лучше. Продолжая пользоваться сайтом,
				вы соглашаетесь с использованием файлов cookie. Подробнее о{' '}
				<Link href="/politics">политике</Link>
			</div>
			<Button
				buttonKind={ButtonKind.Rounded}
				buttonSize={ButtonSize.Default}
				buttonType={ButtonType.Blue}
				onClick={onClose}
			>
				Согласиться и продолжить
			</Button>
		</div>
	)
}

export default Cookie
