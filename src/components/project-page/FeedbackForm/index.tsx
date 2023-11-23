import { useForm } from '@/hooks'
import { isEmail, required } from '@/helpers/validation'
import { Button, DragAndDrop, FormControl, Input, Textarea } from '@/components'
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
				email: [required, isEmail],
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
			<div className={cl.formContainer}>
				<h2>Задать вопрос</h2>
				<FormControl error={errors.email}>
					<Input
						placeholder="Email для ответа"
						onChange={onChange('email')}
						value={state.email}
						label="Укажите свою почту"
						error={!!errors.email}
						required
					/>
				</FormControl>

				<FormControl error={errors.text}>
					<Textarea
						placeholder="Сообщение"
						onChange={onChange('text')}
						value={state.text}
						label="Подробно опишите проблему"
						required
						className={cl.textarea}
						error={!!errors.text}
					/>
				</FormControl>

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
					<Link href="/politics" className={cl.link}>
						политики защиты персональной информации
					</Link>
				</p>
			</div>
		</form>
	)
}
