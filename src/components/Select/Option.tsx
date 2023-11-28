import React, { FC } from 'react'

import { IOption } from './types'

import cl from './style.module.scss'
import { classNames } from '@/helpers'

interface OptionProps {
	optionItem: IOption
	onChange: (optionValue: IOption['value']) => void
	value: IOption['value']
}

const Option: FC<OptionProps> = ({ optionItem, onChange, value }) => (
	<li
		className={classNames(cl.option, {
			[cl.optionActive]: value === optionItem.value,
			[cl.optionHidden]: !!optionItem.hidden
		})}
		onClick={onChange.bind(null, optionItem.value)}
	>
		{optionItem.text}
	</li>
)

export default Option
