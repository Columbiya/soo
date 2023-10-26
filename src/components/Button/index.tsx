import { ButtonSize, ButtonType } from '@/types'
import { ButtonHTMLAttributes, FC } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	buttonType: ButtonType
	buttonSize: ButtonSize
}

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
	return <button {...props}>{children}</button>
}
