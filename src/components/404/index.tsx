import { Button } from '@/components'
import cl from './style.module.scss'
import { ButtonKind, ButtonSize, ButtonType } from '@/types'

export const NotFound = () => {
	return (
		<section className={cl.notFound}>
			<h1 className={cl.title}>404</h1>

			<p className={cl.description}>
				Запрашиваемая страница не существует, была удалена или навсегда
				перенесена на другой адрес
			</p>

			<div className={cl.button}>
				<Button
					buttonKind={ButtonKind.Rounded}
					buttonSize={ButtonSize.Default}
					buttonType={ButtonType.Blue}
					href="/"
				>
					Вернуться на главную
				</Button>
			</div>
		</section>
	)
}
