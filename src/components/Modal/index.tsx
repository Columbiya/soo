import React, { FC, MouseEvent, useCallback, useRef, ReactNode } from 'react'

import { useDisableWindowScroll } from '@/hooks'

import { ModalHeight, ModalSize, ModalWidth } from './types'

import cl from './style.module.scss'
import { classNames } from '@/helpers'

interface ModalProps {
	title?: string
	isOpen: boolean
	styleTypes: (ModalHeight | ModalSize | ModalWidth)[]
	description?: string
	onClose?: () => void
	className?: string
	children: ReactNode
}

const Modal: FC<ModalProps> = ({
	title,
	isOpen,
	onClose,
	styleTypes = [],
	description,
	children,
	className
}) => {
	const modalContentRef = useRef(null)

	const modalClasses = classNames(
		cl.modal,
		...styleTypes.map((styleType) => cl[`modal${styleType}`]),
		{
			[cl.modalIsOpen]: isOpen
		}
	)

	const modalContentClasses = classNames(
		cl.modalContent,
		...styleTypes.map((styleType) => cl[`modalContent${styleType}`])
	)

	const onModalClose = useCallback(
		(e: MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation()

			if (onClose) {
				onClose()
			}
		},
		[onClose]
	)

	const modalBodyClasses = classNames(cl.modalBody, className)

	// const clickOutsideHandler = () => onClose?.()
	// useOnClickOutside<HTMLDivElement>(modalContentRef, clickOutsideHandler)

	useDisableWindowScroll(isOpen)

	return (
		<div className={modalClasses}>
			<div className={cl.modalContainer}>
				<div ref={modalContentRef} className={modalContentClasses}>
					<div>
						<div className={cl.modalHeader}>
							<h2>{title}</h2>
							{onClose && (
								<button
									type="button"
									className={cl.modalExit}
									aria-label="Закрыть модальное окно"
									onClick={onModalClose}
								/>
							)}
						</div>
						{description && (
							<div className={cl.modalDescription}>
								<p>{description}</p>
							</div>
						)}
					</div>
					<div className={modalBodyClasses}>{children}</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
