import '@/assets/index.scss'
import 'swiper/css'
import { MainLayout, ScrollUpButton } from '@/components'
import { useScrollTop } from '@/hooks'
import NextProgress from 'next-progress'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	const scrollTop = useScrollTop()

	return (
		<>
			<NextProgress
				delay={500}
				options={{ showSpinner: false, color: '#3461c1' }}
			/>
			<ScrollUpButton scrollTop={scrollTop} />
			<MainLayout>
				<Component {...pageProps} />
			</MainLayout>
		</>
	)
}
