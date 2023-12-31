import { Button } from '@/components'
import { useSwiper } from 'swiper/react'

import cl from './style.module.scss'
import { classNames } from '@/helpers'
import { ButtonKind, ButtonSize, ButtonType } from '@/types'

export const NavigationButtons = () => {
	const swiper = useSwiper()

	return (
		<>
			<Button
				onClick={() => swiper.slidePrev()}
				className={classNames(cl.navBtn, cl.prev)}
				buttonKind={ButtonKind.Rounded}
				buttonSize={ButtonSize.Small}
				buttonType={ButtonType.Blue}
			>
				<svg
					width="7"
					height="11"
					viewBox="0 0 7 11"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1.04921 6.4642L5.28921 10.7042C5.38217 10.7979 5.49277 10.8723 5.61463 10.9231C5.73649 10.9739 5.8672 11 5.99921 11C6.13122 11 6.26193 10.9739 6.38378 10.9231C6.50564 10.8723 6.61624 10.7979 6.70921 10.7042C6.89546 10.5168 7 10.2634 7 9.9992C7 9.73502 6.89546 9.48156 6.70921 9.2942L3.16921 5.7542L6.70921 2.2142C6.89546 2.02684 7 1.77339 7 1.5092C7 1.24502 6.89546 0.991564 6.70921 0.804201C6.61577 0.71152 6.50495 0.638195 6.38311 0.58843C6.26128 0.538666 6.13082 0.513441 5.99921 0.514202C5.8676 0.513441 5.73714 0.538666 5.6153 0.58843C5.49346 0.638195 5.38265 0.71152 5.28921 0.804201L1.04921 5.0442C0.95548 5.13716 0.881086 5.24777 0.830317 5.36962C0.779548 5.49148 0.75341 5.62219 0.75341 5.7542C0.75341 5.88621 0.779548 6.01692 0.830317 6.13878C0.881086 6.26064 0.95548 6.37124 1.04921 6.4642Z"
						fill="white"
					/>
				</svg>
			</Button>
			<Button
				onClick={() => swiper.slideNext()}
				className={classNames(cl.navBtn, cl.next)}
				buttonKind={ButtonKind.Rounded}
				buttonSize={ButtonSize.Small}
				buttonType={ButtonType.Blue}
			>
				<svg
					width="7"
					height="11"
					viewBox="0 0 7 11"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M5.95079 4.5358L1.71079 0.295798C1.61783 0.20207 1.50723 0.127675 1.38537 0.0769067C1.26351 0.026138 1.1328 0 1.00079 0C0.868781 0 0.738075 0.026138 0.616216 0.0769067C0.494356 0.127675 0.383755 0.20207 0.290792 0.295798C0.104542 0.483161 0 0.736612 0 1.0008C0 1.26498 0.104542 1.51844 0.290792 1.7058L3.83079 5.2458L0.290792 8.7858C0.104542 8.97316 0 9.22661 0 9.4908C0 9.75498 0.104542 10.0084 0.290792 10.1958C0.384233 10.2885 0.495049 10.3618 0.616886 10.4116C0.738724 10.4613 0.869186 10.4866 1.00079 10.4858C1.1324 10.4866 1.26286 10.4613 1.3847 10.4116C1.50654 10.3618 1.61735 10.2885 1.71079 10.1958L5.95079 5.9558C6.04452 5.86283 6.11891 5.75223 6.16968 5.63037C6.22045 5.50852 6.24659 5.37781 6.24659 5.2458C6.24659 5.11379 6.22045 4.98308 6.16968 4.86122C6.11891 4.73936 6.04452 4.62876 5.95079 4.5358Z"
						fill="white"
					/>
				</svg>
			</Button>
		</>
	)
}
