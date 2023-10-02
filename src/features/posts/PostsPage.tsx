import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { loadPosts } from './postsSlice';

export default function PostsPage(): JSX.Element {
	const posts = useAppSelector((state: RootState) => state.posts.posts);
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(loadPosts());
	}, []);
	return (
		<div>
			<ul>
				{posts.map((post) => (
					<li key={post.id}>
						<p>{post.title}</p>
						<p>{post.body}</p>
					</li>
				))}
			</ul>
		</div>
	);
}
