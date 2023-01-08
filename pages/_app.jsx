import NextNprogress from 'nextjs-progressbar'
import '../styles/global.sass'

export default function App({ Component, pageProps }) {
	return (
		<>
			<NextNprogress 
				color='#29D'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Component {...pageProps} />
		</>
	)
}