'use client'

import React, { DragEventHandler, FC, useCallback, useState } from 'react'

import { DragAndDropProps, DragAndDropSingleProps } from './types'
import DragAndDropSingle from '@/components/DragAndDrop/kinds/Single'

export const DragAndDrop: FC<DragAndDropProps> = ({
	multiple: isMultiple = false,
	accept,
	size,
	onChange,
	id,
	name,
	file,
	restrictFileLength,
	disabled
}) => {
	// TODO Добавить зашитую валидацию
	const [isDrag, setIsDrag] = useState(false)

	const dragEnterHandler: DragEventHandler<HTMLDivElement> = useCallback(
		(event) => {
			event.preventDefault()
			setIsDrag(true)
		},
		[]
	)
	const dragLeaveHandler: DragEventHandler<HTMLDivElement> = useCallback(
		(event) => {
			event.preventDefault()
			setIsDrag(false)
		},
		[]
	)

	return (
		<>
			<DragAndDropSingle
				id={id}
				name={name}
				accept={accept?.toString()}
				size={size}
				file={file}
				onChange={onChange as DragAndDropSingleProps['onChange']}
				isDrag={isDrag}
				onDragEnter={dragEnterHandler}
				onDragLeave={dragLeaveHandler}
				disabled={disabled}
				restrictFileLength={restrictFileLength}
			/>
		</>
	)
}
