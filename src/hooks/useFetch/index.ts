import { useEffect, useState, useCallback } from 'react'

export const useFetch = <R>(
	url: string,
	options?: RequestInit & { lazy?: boolean }
) => {
	const [result, setResult] = useState<R>()
	const [error, setError] = useState<Error | null>(null)

	const makeRequest = useCallback(() => {
		fetch(url, options)
			.then((res) => res.json())
			.then(setResult)
			.catch((e) => {
				setError(e)
				console.log(e)
			})
	}, [url, options])

	useEffect(() => {
		if (options?.lazy) {
			return
		}

		makeRequest()
	}, [url])

	if (options?.lazy) {
		return [makeRequest, result, error] as const
	} else {
		return [result, error] as const
	}
}
