import { ReactNode } from 'react'

export const enum ListTypes {
	UL,
	OL
}

export type ListItem = {
	text: ReactNode
}
