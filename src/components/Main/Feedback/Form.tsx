import { Button, DragAndDrop, Input, Textarea } from '@/components'
import { required } from '@/helpers/validation'
import { useForm } from '@/hooks'
import { ButtonSize, ButtonType, Constants } from '@/types'

import cl from './style.module.scss'
import Link from 'next/link'
import { toast } from 'react-toastify'

type FeedbackFormValues = {
	email: string
	text: string
	file: File | undefined | null
}

export const Form = () => {
	const { errors, handleSubmit, onChange, state, reset } =
		useForm<FeedbackFormValues>(
			{ email: '', file: undefined, text: '' },
			{ email: required, file: null, text: null }
		)

	const sendForm = async () => {
		try {
			await fetch(`${Constants.BASE_URL}/form/questions`, {
				method: 'POST',
				body: JSON.stringify(state)
			})

			toast('Форма успешно отправлена', { type: 'success' })
			reset()
		} catch (e) {
			console.log(e)
			if (e instanceof Error) {
				toast(e.message, { type: 'error' })
			}
		}
	}

	const onSubmit = () => sendForm()

	return (
		<form onSubmit={(e) => handleSubmit(e, onSubmit)} className={cl.container}>
			<Input
				onChange={onChange('email')}
				name="email"
				value={state.email}
				required
				label="Укажите свою электронную почту"
				placeholder="Email для ответа"
			/>

			<Textarea
				onChange={onChange('text')}
				name="text"
				value={state.text}
				label="Подробно опишите проблему"
				placeholder="Сообщение"
				className={cl.textarea}
			/>

			<DragAndDrop
				name="image"
				onChange={onChange('file')}
				file={state.file!}
			/>

			<div className={cl.form}>
				<p>
					*Передавая информацию порталу,{' '}
					<Link href="/politics">
						Вы принимаете условия политики защиты персональной информации
					</Link>
				</p>
				<Button buttonSize={ButtonSize.Default} buttonType={ButtonType.Blue}>
					Отправить
				</Button>
			</div>
		</form>
	)
}
