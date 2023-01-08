import Layout from "../components/Layout";

export default function About() {
	return (
		<Layout headParams={{ title: 'About Page' }}>
			<div>
				<h1>About page</h1>
				<p>It is small application, written on Next.JS, which show all basic functionallity.</p>
			</div>
		</Layout>
	)
}
