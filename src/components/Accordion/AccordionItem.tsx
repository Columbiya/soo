import {
	Dispatch,
	FC,
	SetStateAction,
	useRef,
	useState,
	useEffect
} from 'react'
import { AccordionItem as AccordionItemType } from './types'

import cl from './style.module.scss'
import { classNames } from '@/helpers'
import Image from 'next/image'

type AccordionItemProps = AccordionItemType & {
	isOpen: boolean
	onOpen: Dispatch<SetStateAction<string>>
	className?: string
}

export const AccordionItem: FC<AccordionItemProps> = ({
	children,
	header,
	id,
	isOpen,
	className,
	onOpen
}) => {
	const ref = useRef<HTMLDivElement>(null)
	const [height, setHeight] = useState<number | null>(null)

	useEffect(() => {
		if (!ref || !ref.current) return

		setHeight(ref.current.clientHeight)

		ref.current.style.height = 'auto'
	}, [ref])

	useEffect(() => {
		if (!ref?.current) return

		if (!isOpen && height !== null) {
			// if the height has not been set yet
			ref.current.style.height = '0'
		} else if (!isOpen && height == null) {
			return
		} else if (isOpen) {
			ref.current.style.height = `${height}px`
		}
	}, [isOpen, height])

	return (
		<div
			className={classNames(cl.item, className, {
				[cl.open]: isOpen
			})}
		>
			<header onClick={() => onOpen(isOpen ? '' : id)} className={cl.header}>
				<span>{header}</span>

				<Image
					src="/images/common/accordion/open-image.svg"
					width={33}
					height={33}
					alt=""
					className={classNames(cl.postfix, {
						[cl.open]: isOpen
					})}
				/>
			</header>

			<div
				ref={ref}
				className={classNames(cl.content, className, {
					[cl.open]: isOpen
				})}
			>
				{children}
			</div>
		</div>
	)
}
