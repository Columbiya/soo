import { FC } from 'react'

import { useSwiper } from 'swiper/react'

import cl from './style.module.scss'
import { breakpointsMap } from './utils'

type SwiperProgressProps = {
	currentIndex: number
}

export const SwiperProgress: FC<SwiperProgressProps> = ({ currentIndex }) => {
	const swiper = useSwiper()

	const currentSlide = breakpointsMap.get(+swiper.currentBreakpoint)

	return (
		<span className={cl.progressThumb}>
			<span
				className={cl.progress}
				style={{
					width: `${Math.ceil(currentIndex * (currentSlide || 1) * 33.5) + 33}%`
				}}
			/>
		</span>
	)
}
