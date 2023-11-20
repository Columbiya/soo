import { ButtonKind, ButtonSize, ButtonType } from '@/types'

import cl from '@/components/Button/style.module.scss'

export const generateButtonMap = () => {
	const map = new Map<ButtonType | ButtonSize | ButtonKind, string>()

	map.set(ButtonType.Blue, cl.blue)
	map.set(ButtonType.Green, cl.green)
	map.set(ButtonType.OutlinedBlue, cl.outlinedBlue)
	map.set(ButtonType.White, cl.white)

	map.set(ButtonSize.Default, cl.sizeDefault)
	map.set(ButtonSize.Small, cl.sizeSmall)

	map.set(ButtonKind.SlightRounded, cl.slightRounded)

	return map
}
