import { useFetch, useForm } from '@/hooks'
import { required } from '@/helpers/validation'
import { Button, DragAndDrop, Input, Textarea } from '@/components'
import { ButtonSize, ButtonType, Constants } from '@/types'
import { toast } from 'react-toastify'

import cl from './style.module.scss'
import Link from 'next/link'

type FeedbackFormValues = {
	email: string
	text: string
	file: File | undefined | null
}

export const FeedbackForm = () => {
	const { errors, handleSubmit, onChange, state, reset } =
		useForm<FeedbackFormValues>(
			{
				email: '',
				file: undefined,
				text: ''
			},
			{
				email: required,
				file: null,
				text: required
			}
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

	return (
		<form onSubmit={(e) => handleSubmit(e, sendForm)} className={cl.form}>
			<div>
				<h2>Задать вопрос</h2>
				<Input
					placeholder="Email для ответа"
					onChange={onChange('email')}
					value={state.email}
					label="Укажите свою почту"
					required
				/>

				<Textarea
					placeholder="Сообщение"
					onChange={onChange('text')}
					value={state.text}
					label="Подробно опишите проблему"
					required
					className={cl.textarea}
				/>

				<DragAndDrop
					name="image"
					onChange={onChange('file')}
					file={state.file!}
				/>

				<Button
					buttonSize={ButtonSize.Small}
					buttonType={ButtonType.Blue}
					className={cl.formButton}
				>
					Отправить
				</Button>

				<p className={cl.ps}>
					*Передавая информацию порталу, Вы принимаете условия{' '}
					<Link href="/politics">политики защиты персональной информации</Link>
				</p>
			</div>
		</form>
	)
}
