import { ReactNode, FC } from 'react'
import { ToastContainer } from 'react-toastify'

import { Footer } from '@/components'
import { Manrope } from 'next/font/google'
import { classNames } from '@/helpers'

import 'react-toastify/dist/ReactToastify.css'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

const styles = Manrope({ subsets: ['cyrillic'] })

const Header = dynamic(() => import('@/components/Header'), { ssr: false })

type MainLayoutProps = {
	children: ReactNode
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const pathname = usePathname()

	return (
		<>
			<Header />
			<main
				className={classNames(
					{
						main: pathname !== '/'
					},
					styles.className
				)}
			>
				{children}
			</main>
			<Footer />

			<ToastContainer />
		</>
	)
}
