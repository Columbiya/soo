import { FC, ReactNode } from 'react'
import Link, { LinkProps } from 'next/link'

type AppLinkProps = LinkProps & { children: ReactNode }

export const AppLink: FC<AppLinkProps> = ({ children, ...props }) => {
	return <Link {...props}>{children}</Link>
}
