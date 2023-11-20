import { Button } from '@/components'
import Image from 'next/image'
import { FC } from 'react'

type ShowAsToggleProps = {
	list: boolean
	onToggle: (next: boolean) => void
	className?: string
}

export const ShowAsToggle: FC<ShowAsToggleProps> = ({
	list,
	onToggle,
	className
}) => {
	const currentImg = list ? 'show-squares.svg' : 'show-list.svg'

	return (
		<Button onClick={() => onToggle(!list)} type="button" className={className}>
			<img src={'/images/project/filter/' + currentImg} alt="" />
		</Button>
	)
}
