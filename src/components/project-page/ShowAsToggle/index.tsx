import { Button } from '@/components'
import Image from 'next/image'
import { FC } from 'react'

type ShowAsToggleProps = {
	list: boolean
	onToggle: (next: boolean) => void
}

export const ShowAsToggle: FC<ShowAsToggleProps> = ({ list, onToggle }) => {
	const currentImg = list ? 'show-squares.svg' : 'show-list.svg'

	return (
		<Button onClick={() => onToggle(!list)} type="button">
			<img src={'/images/project/filter/' + currentImg} alt="" />
		</Button>
	)
}
