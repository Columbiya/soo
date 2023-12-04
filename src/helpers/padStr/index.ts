export const padStr = (str: string, len: number) => {
	if (str.length > len) {
		return str.slice(0, len - 3) + '...'
	}

	return str
}
