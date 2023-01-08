import Link from "next/link";
import Layout from "../components/Layout";

export default function Index() {
	return (
		<Layout headParams={{ title: 'Home Page' }}>
			<h1>Main page Next.JS</h1>
			<p>
				<Link href='/posts'>
					Posts
				</Link>
			</p>
			<p>
				<Link href='/about'>
					About
				</Link>
			</p>
		</Layout>
	)
}
