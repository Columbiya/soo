import { FC, ReactNode } from 'react'

import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
	typography: {
		fontFamily: 'inherit'
	}
})

type MuiThemeProviderProps = {
	children: ReactNode
}

export const MuiThemeProvider: FC<MuiThemeProviderProps> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
