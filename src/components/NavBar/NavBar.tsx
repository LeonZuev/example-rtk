// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';

export default function NavBar(): JSX.Element {
	return (
		<nav>
			<NavLink to="counter">Counter</NavLink>
			<NavLink to="products">Products</NavLink>
			<NavLink to="posts">Posts</NavLink>
			<NavLink to="/">Home</NavLink>
		</nav>
	);
}
