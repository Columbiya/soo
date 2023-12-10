import { ReactNode } from 'react'

export {
	ProjectsContextProvider,
	ProjectsContext
} from './ProjectsContextProvider'
export { MuiThemeProvider } from './MuiThemeProvider'

export type ContextBaseProps = {
	children: ReactNode
}
