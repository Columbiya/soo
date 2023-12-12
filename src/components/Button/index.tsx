import { classNames, generateButtonMap } from '@/helpers'
import { ButtonKind, ButtonSize, ButtonType } from '@/types'
import { ButtonHTMLAttributes, FC, AnchorHTMLAttributes } from 'react'

import cl from './style.module.scss'
import Link, { LinkProps } from 'next/link'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	buttonType?: ButtonType
	buttonSize?: ButtonSize
	buttonKind?: ButtonKind
	target?: AnchorHTMLAttributes<HTMLAnchorElement>['target']
	href?: string
}

const classesMap = generateButtonMap()

export const Button: FC<ButtonProps> = ({
	children,
	buttonSize = ButtonSize.None,
	buttonType = ButtonType.None,
	buttonKind = ButtonKind.Rounded,
	className,
	href,
	target,
	...props
}) => {
	const classes = `${cl.button} ${className} ${classesMap.get(
		buttonType
	)} ${classesMap.get(buttonSize)} ${classesMap.get(buttonKind)}`

	if (href) {
		return (
			<Link
				href={href}
				className={classNames(classes, 'button')}
				target={target}
			>
				{children}
			</Link>
		)
	}

	return (
		<button {...props} className={classes}>
			{children}
		</button>
	)
}
