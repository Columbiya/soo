import React, { FC, SelectHTMLAttributes, useRef, useState } from 'react'
import { useOnClickOutside } from '@/hooks'

import Option from './Option'
import { IOption, SelectBorderStyles, SelectSizeStyles } from './types'

import cl from './style.module.scss'
import { ButtonSize } from '@/types/index'
import { classNames } from '@/helpers'

interface SelectProps
	extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
	styleTypes?: (SelectSizeStyles | SelectBorderStyles)[]
	optionsList: IOption[]
	placeholder?: string
	onChange: (value: IOption['value']) => void
	name: string
	value: IOption['value']
}

const Select: FC<SelectProps> = ({
	optionsList,
	styleTypes: styleTypesProps = [],
	placeholder = 'Не выбрано',
	className,
	onChange,
	value,
	name
}) => {
	const styleTypes = [ButtonSize.Small, ...styleTypesProps]
	const [isOpen, setIsOpen] = useState(false)

	const selectContainerRef = useRef(null)

	const selectedTextStyles = classNames(cl.selectedText, {
		[cl.selectedTextActive]: isOpen
	})
	const selectOptionsStyles = classNames(cl.selectOptions, {
		[cl.selectOptionsShow]: isOpen
	})

	const changeHandler = async (optionValue: IOption['value']) => {
		onChange(optionValue)

		setIsOpen(false)
	}

	const toggleHandler = setIsOpen.bind(null, (prev) => !prev)

	useOnClickOutside<HTMLDivElement>(
		selectContainerRef,
		setIsOpen.bind(null, false)
	)

	return (
		<div
			ref={selectContainerRef}
			className={classNames(
				cl.selectContainer,
				className,
				...styleTypes.map((styleType) => cl[`selectContainer${styleType}`])
			)}
		>
			<div tabIndex={0} onClick={toggleHandler} className={selectedTextStyles}>
				{optionsList.find((option) => option.value === value)?.text ||
					placeholder}
			</div>
			<ul className={selectOptionsStyles}>
				{optionsList.map((option) => (
					<Option
						value={value}
						onChange={changeHandler}
						key={option.value}
						optionItem={option}
					/>
				))}
			</ul>
		</div>
	)
}

export default Select
