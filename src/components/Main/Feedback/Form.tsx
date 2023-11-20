import { Button, DragAndDrop, Input, Textarea } from '@/components'
import { required } from '@/helpers/validation'
import { useForm } from '@/hooks'
import { ButtonSize, ButtonType } from '@/types'

import cl from './style.module.scss'
import Link from 'next/link'

type FeedbackFormValues = {
	email: string
	text: string
	file: File | undefined | null
}

export const Form = () => {
	const { errors, handleSubmit, onChange, state } = useForm<FeedbackFormValues>(
		{ email: '', file: undefined, text: '' },
		{ email: required, file: null, text: null }
	)

	const onSubmit = () => {
		console.log(state)
	}

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
