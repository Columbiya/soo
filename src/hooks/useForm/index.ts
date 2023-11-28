import { useCallback, useState, BaseSyntheticEvent } from 'react'

type ValidateFunction = (val: any) => boolean | string

export const useForm = <T extends Record<string, any>>(
	defaultValues: T,
	validation: Record<keyof T, ValidateFunction | null | ValidateFunction[]>
) => {
	type ErrorType = Record<keyof T, string>

	const [errors, setErrors] = useState<ErrorType>({} as ErrorType)
	const [state, setState] = useState<T>(defaultValues)

	const invalidField = (validationRes: string | boolean) => {
		return typeof validationRes === 'string' && validationRes
	}

	const validateFields = () => {
		const errors = {} as ErrorType

		for (const validationKey of Object.keys(validation)) {
			if (!validation[validationKey]) continue

			const res = validate(validationKey)

			if (invalidField(res)) {
				errors[validationKey as keyof T] = res as string
			}
		}

		setErrors(errors)

		return Object.keys(errors).every(
			(k) => (typeof errors[k] !== 'string' && errors[k]) || errors[k] === ''
		)
	}

	const validate = (key: keyof T): boolean | string => {
		if (Array.isArray(validation[key])) {
			const arr = validation[key] as ValidateFunction[]

			for (const func of arr) {
				const validationResult = func(state[key])

				if (typeof validationResult === 'string' && validationResult) {
					return validationResult
				}
			}

			return ''
		} else {
			const func = validation[key] as ValidateFunction
			const validationResult = func(state[key])

			return validationResult
		}
	}

	const onChange = useCallback(
		(name: keyof T) => (value: T[typeof name]) => {
			if (validation[name] === null) {
				setState((prev) => ({ ...prev, [name]: value }))
				return
			}

			const validationRes = validate(name)

			if (!validation[name] && !validationRes) {
				setErrors((prev) => ({ ...prev, [name]: '' }))
			} else {
				setErrors((prev) => ({ ...prev, [name]: validationRes as string }))
			}

			setState((prev) => ({ ...prev, [name]: value }))
		},
		[state]
	)

	const reset = useCallback(() => {
		setState(defaultValues)
	}, [])

	const handleSubmit = useCallback(
		(e: BaseSyntheticEvent, cb: Function) => {
			e.preventDefault()

			if (!validateFields()) {
				return
			}

			cb()
		},
		[state]
	)

	return { state, onChange, errors, handleSubmit, reset }
}
