import { Constants } from '@/types'
import { Container } from '@/components'
import Link from 'next/link'

import cl from './style.module.scss'
import { Manrope } from 'next/font/google'
import { classNames } from '@/helpers'

const styles = Manrope({ subsets: ['cyrillic'] })

export const Footer = () => {
	return (
		<footer className={classNames(cl.footer, styles.className)}>
			<Container className={cl.footerInner}>
				<div className={cl.row}>
					<Link className={cl.projectName} href="/">
						{Constants.PROJECT_NAME}
					</Link>
					<nav className={cl.footerNav}>
						<Link href="/projects">Проекты</Link>
						<Link href="/#about">О сервисе</Link>
						<Link href="/#qna">Вопросы и ответы</Link>
						<Link href="/#feedback">Обратная связь</Link>
					</nav>
				</div>

				<div className={cl.content}>
					<div>
						<span>
							© 2023 «Портал общественных обсуждений градостроительных проектов
							Республики Башкортостан» <br />
							Все права защищены
						</span>
						<span className={cl.withImage}>
							<img
								src="/images/common/footer/rb.svg"
								className={cl.rbIcon}
								alt=""
							/>
							При поддержке Правительства Республики Башкортостан
						</span>
						<span className={cl.withImage}>
							<img
								src="/images/common/footer/rb.svg"
								className={cl.rbIcon}
								alt=""
							/>
							Министерство строительства и архитектуры Республики Башкортостан
						</span>
						<Link href="/feedback">Обратная связь</Link>
					</div>
					<nav className={cl.footerSubNav}>
						<Link href="/politics">Политика конфиденциальности</Link>
					</nav>
				</div>
			</Container>
		</footer>
	)
}
