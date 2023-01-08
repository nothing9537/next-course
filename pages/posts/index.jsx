import Link from "next/link";
import Layout from "../../components/Layout";

export default function Posts({ posts }) {

	return (
		<Layout headParams={{ title: 'Posts Page' }}>
			<div>
				<h1>Posts Page</h1>
			</div>
			<ul>
				{posts.map(post =>
					<li key={post.id}>
						<Link href={`/posts/${post.id}`}>
							{post.title}
						</Link>
					</li>
				)}
			</ul>
		</Layout>
	)
}

export async function getServerSideProps() {
	const posts = await fetch('http://localhost:5000/posts').then(response => response.json())
	return { props: { posts } }
}