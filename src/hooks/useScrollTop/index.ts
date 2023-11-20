import { useState, useEffect } from 'react'

export const useScrollTop = () => {
	const [scrollTop, setScrollTop] = useState(0)

	useEffect(() => {
		function watchScrollTop(e: any) {
			setScrollTop(window.scrollY)
		}

		document.body.addEventListener('mousewheel', watchScrollTop)

		return () => {
			document.body.removeEventListener('mousewheel', watchScrollTop)
		}
	}, [])

	return scrollTop
}
