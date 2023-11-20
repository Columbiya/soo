type GetUniqueId = (factor?: string | number) => string

export const getUniqueId: GetUniqueId = () =>
	`${Math.random()}`.split('.').pop()!
