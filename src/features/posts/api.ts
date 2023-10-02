import Post from './types/Post';

// GET
export async function getAll(): Promise<{ posts: Post[] }> {
	const res = await fetch('https://dummyjson.com/posts');
	return res.json();
}
