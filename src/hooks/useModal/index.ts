import { useState, useCallback } from 'react'

export const useModal = () => {
	const [isOpen, setOpen] = useState(false)

	const onOpen = useCallback(() => setOpen(true), [])
	const onClose = useCallback(() => setOpen(false), [])

	return { isOpen, onOpen, onClose }
}
