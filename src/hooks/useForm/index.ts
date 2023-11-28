import { useCallback, useRef, useState, BaseSyntheticEvent } from 'react'

import { toast } from 'react-toastify'

export const useForm = <T extends Record<string, any>>(
	defaultValues: T,
	validation: Record<keyof T, ((val: any) => boolean | string) | null>
) => {
	const { current: errors } = useRef(new Map<keyof T, string>())
	const [state, setState] = useState<T>(defaultValues)

	const onChange = useCallback(
		(name: keyof T) => (value: T[typeof name]) => {
			if (validation[name] === null) {
				setState((prev) => ({ ...prev, [name]: value }))
				return
			}

			const validationRes = validation[name]!(value)

			if (!validation[name] && !validationRes) {
				errors.delete(name)
			} else {
				errors.set(name, validationRes as string)
			}

			setState((prev) => ({ ...prev, [name]: value }))
		},
		[]
	)

	const reset = useCallback(() => {
		setState(defaultValues)
	}, [])

	const handleSubmit = useCallback((e: BaseSyntheticEvent, cb: Function) => {
		e.preventDefault()

		if (errors.size > 0) {
			toast(errors.get(Array.from(errors.values())[0]), { type: 'error' })
		}

		cb()
	}, [])

	return { state, onChange, errors, handleSubmit, reset }
}
