import { ValidationError } from '@/types'

export const required = (val: string) => !!val || ValidationError.REQUIRED

export const isEmail = (val: string) => {
	const regexp =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (val && regexp.test(val)) {
		return false
	}

	return ValidationError.WRONG_FORMAT
}
