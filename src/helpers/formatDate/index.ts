import { Months } from '@/types'

export const formatDate = (d: Date) => {
	const date = d.getDate()
	const year = d.getFullYear()
	const month = d.getMonth()

	const months = Object.values(Months)

	return `${date} ${months[month]} ${year}`
}
