type classNamesArgs = string | Record<string, boolean> | undefined

export const classNames = (...args: classNamesArgs[]): string => {
	return args.reduce((acc, curr) => {
		if (typeof curr === 'object') {
			const arr: string[] = []

			for (let key in curr) {
				if (!curr[key]) continue

				arr.push(key)
			}

			return acc + ' ' + arr.join(' ')
		}

		if (typeof curr === 'string') {
			return acc + ' ' + curr
		}

		return acc
	}, '') as string
}
