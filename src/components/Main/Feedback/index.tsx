import { ReactNode } from 'react'

import { Alert, BlockTitle, Container, List } from '@/components'
import { ListTypes } from '@/components/List/types'

import { AlertTypes } from '@/components/Alert/type'
import { Form } from './Form'

import cl from './style.module.scss'

const items: ReactNode[] = [
	'Опишите вопрос, связанный с участием в общественных обсуждениях.Укажите в тексте как можно больше информации:',
	'Название общественного обсуждения или ссылку на него',
	'Опишите проблему или приложите текст ошибки',
	'Последовательность действий, которая приводит к проблеме или ошибке, приложите снимок экрана'
]

export const Feedback = () => {
	return (
		<section className={cl.feedback}>
			<Container className={cl.feedBackContainer}>
				<div>
					<BlockTitle>обратная связь</BlockTitle>

					<p className={cl.text}>
						Опишите вопрос, связанный с участием в общественных обсуждениях.
						Укажите в тексте как можно больше информации:
					</p>

					<List type={ListTypes.UL} items={items} />

					<Alert type={AlertTypes.DANGER} className={cl.alert}>
						<span className={cl.alertText}>
							Важно! Вопросы по содержанию и материалам проекта, вынесенного на
							обсуждение, не связанные с техническими проблемами, можно задать
							на странице интересующего вас проекта, выбрав блок «Консультация»
						</span>
					</Alert>
				</div>
				<div>
					<Form />
				</div>
			</Container>
		</section>
	)
}
