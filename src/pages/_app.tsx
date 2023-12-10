import '@/assets/index.scss'
import 'swiper/css'
import { MainLayout, ScrollUpButton } from '@/components'
import NextProgress from 'next-progress'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { MuiThemeProvider } from '@/contexts'
import { Manrope } from 'next/font/google'

const Cookie = dynamic(() => import('@/components/Cookie'), { ssr: false })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<MuiThemeProvider>
			<Head>
				<meta name="robots" content="noindex" />
			</Head>
			<NextProgress
				delay={500}
				options={{ showSpinner: false, color: '#3461c1' }}
			/>
			<ScrollUpButton />
			<Cookie />
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</MuiThemeProvider>
	)
}
