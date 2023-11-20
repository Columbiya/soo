import { Alert, Button } from '@/components'
import { AlertTypes } from '@/components/Alert/type'
import { ButtonKind, ButtonSize, ButtonType } from '@/types'

import { useModal } from '@/hooks'
import { Modal } from '@mui/material'

import cl from '../style.module.scss'

export const YouCantParticipate = () => {
	const { isOpen, onClose, onOpen } = useModal()

	return (
		<>
			<Alert type={AlertTypes.DANGER} className={cl.alert}>
				<h4 className={cl.title}>Вы не можете принять участие</h4>

				<p>
					Направить мнения, в том числе возражения, могут только пользователи,
					авторизованные на портале посредством ЕСИА и предоставлением
					соответствующих документов. Пожалуйста, подтвердите свой адрес, чтобы
					мы смогли проверить возможность вашего участия
				</p>

				<div className={cl.buttons}>
					<Button
						buttonType={ButtonType.Blue}
						buttonKind={ButtonKind.Rounded}
						buttonSize={ButtonSize.Default}
						onClick={onOpen}
					>
						Подтвердить адрес
					</Button>
				</div>
			</Alert>

			<Modal
				aria-labelledby="modal-title"
				aria-describedby="modal-description"
				open={isOpen}
				onClose={onClose}
			>
				<div className={cl.confirmAddressModal}>
					<h3 id="modal-title">Подтверждение адреса</h3>
					<div>(ПОКА ОТСУТСТВУЕТ)</div>
				</div>
			</Modal>
		</>
	)
}
