import { useEffect } from 'react'

export const useDisableWindowScroll = (disable: boolean) => {
	useEffect(() => {
		if (disable) {
			document.body.style.overflowY = 'hidden'
			return
		}

		document.body.style.overflowY = 'auto'

		return () => {
			document.body.style.overflowY = 'auto'
		}
	}, [disable])
}
