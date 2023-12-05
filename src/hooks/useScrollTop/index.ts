import { useState, useEffect } from 'react'

export const useScrollTop = () => {
	const [scrollTop, setScrollTop] = useState(0)

	useEffect(() => {
		function watchScrollTop(e: any) {
			setScrollTop(window.scrollY)
		}

		document.body.addEventListener('wheel', watchScrollTop)

		return () => {
			document.body.removeEventListener('wheel', watchScrollTop)
		}
	}, [])

	return scrollTop
}
