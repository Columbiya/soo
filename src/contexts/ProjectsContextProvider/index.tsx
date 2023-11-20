import { createContext, useState, useCallback, FC } from 'react'
import { ContextBaseProps } from '..'

type ProjectsContextType = {
	showAsList: boolean
	onChangeAsList: (next: boolean) => void
}

export const ProjectsContext = createContext<ProjectsContextType>({
	showAsList: false,
	onChangeAsList: () => {}
})

export const ProjectsContextProvider: FC<ContextBaseProps> = ({ children }) => {
	const onChangeAsList = useCallback(
		(next: boolean) => setValue((prev) => ({ ...prev, showAsList: next })),
		[]
	)

	const [value, setValue] = useState<ProjectsContextType>({
		showAsList: false,
		onChangeAsList
	})

	return (
		<ProjectsContext.Provider value={value}>
			{children}
		</ProjectsContext.Provider>
	)
}
