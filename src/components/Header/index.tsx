import { useState } from 'react'
import { ButtonSize, ButtonType, Constants } from '@/types'
import { Button, Container, MobileMenu } from '@/components'
import { Manrope } from 'next/font/google'
import { classNames } from '@/helpers'
import { useMatchMedia } from '@/hooks'
import Link from 'next/link'

import cl from './style.module.scss'

const styles = Manrope({ subsets: ['cyrillic'] })

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false)
	const { isTablet } = useMatchMedia()

	return (
		<>
			<header className={classNames(cl.header, styles.className)}>
				<Container>
					<div className={cl.headerInner}>
						<Link href="/" className={cl.logo}>
							<span>{Constants.PROJECT_NAME_HIGHLIGHTED_PART}</span>
							{Constants.PROJECT_NAME_REST_PART}
						</Link>

						{!isTablet && (
							<>
								<nav className={cl.nav}>
									<Link href="/projects">Проекты</Link>
									<Link href="#about">О сервисе</Link>
									<Link href="#qna">Вопросы и ответы</Link>
									<Link href="#feedback">Обратная связь</Link>
								</nav>

								<Button
									buttonSize={ButtonSize.Default}
									buttonType={ButtonType.Blue}
									href="/login"
								>
									Войти
								</Button>
							</>
						)}

						{isTablet && (
							<Button
								onClick={() => setMenuOpen((prev) => !prev)}
								className={classNames(cl.burger, {
									[cl.open]: menuOpen
								})}
							>
								<span />
								<span />
							</Button>
						)}
					</div>
				</Container>
			</header>
			<div className={styles.className}>
				<MobileMenu open={menuOpen} setOpen={setMenuOpen} />
			</div>
		</>
	)
}
