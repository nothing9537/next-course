import Link from 'next/link'
import Layout from '../../components/Layout'

export default function Post({ post }) {

	return (
		<Layout>
			<h1>{post.title}</h1>
			<hr />
			<p>{post.body}</p>
			<Link href='/posts'>
				Back to posts
			</Link>
		</Layout>
	)
}

export async function getServerSideProps({ params }) {
	const post = await fetch(`http://localhost:5000/posts/${params.id}`).then(response => response.json())
	return { props: { post } }
}