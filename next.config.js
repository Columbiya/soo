/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'soo.u1780911.isp.regruhosting.ru',
				port: '',
				pathname: '/upload/**'
			}
		],
		unoptimized: true
	}
}

module.exports = nextConfig
