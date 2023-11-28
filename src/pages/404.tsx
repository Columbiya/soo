import { NotFound } from '@/components'
import Head from 'next/head'

export default function NotFoundPage() {
	return (
		<>
			<Head>
				<title>404</title>
			</Head>

			<NotFound />
		</>
	)
}
