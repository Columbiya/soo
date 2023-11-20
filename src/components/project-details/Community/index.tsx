import { FC } from 'react'

import { BlockTitle, Button } from '@/components'
import { ButtonKind, ButtonSize, ButtonType } from '@/types'

import cl from '../style.module.scss'

export const Community: FC = () => {
	return (
		<>
			<BlockTitle className={cl.blockTitle}>Обсуждение</BlockTitle>

			<div className={cl.communityBlock}>
				<div className={cl.community}>
					<h4 className={cl.communityTitle}>
						Оставить свое мнение по этому объекту
					</h4>

					<p>
						Направить мнения, в том числе возражения, могут только пользователи,
						авторизованные на портале посредством ЕСИА и предоставлением
						соответствующих документов. Пожалуйста, войдите через портал, чтобы
						мы смогли проверить возможность вашего участия
					</p>

					<Button
						buttonKind={ButtonKind.SlightRounded}
						buttonType={ButtonType.Green}
						buttonSize={ButtonSize.Default}
					>
						Авторизоваться
					</Button>
				</div>
			</div>
		</>
	)
}
