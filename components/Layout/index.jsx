import Head from "next/head";
import Link from "next/link";
import s from './Layout.module.sass'

export default function Layout({ children, headParams = { title: 'Next.JS base app', description: '', keywords: '' } }) {

	const items = [
		{ href: '/', text: 'Home' },
		{ href: '/about', text: 'About' },
		{ href: '/posts', text: 'Posts' },
	]

	return (
		<>
			<Head>
				<title>{headParams.title} | Next Course</title>
				<meta name='description' content={'It is Next.JS basic course ' + headParams.description} />
				<meta name='keywords' content={'React,Next,Next.JS ' + headParams.keywords} />
				<meta name='robots' content='index, follow' />
				<meta name='viewport' content="width=device-width, initial-scale=1.0" />
			</Head>
			<nav className={s.nav}>
				{items.map(({ href, text }) =>
					<Link
						className={s.link}
						href={href}
						key={href}
					>
						{text}
					</Link>
				)}
			</nav>
			<main className={s.main}>
				{children}
			</main>
		</>
	)
}
