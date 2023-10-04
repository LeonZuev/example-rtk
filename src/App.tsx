import { Counter } from './features/counter/Counter';
import './App.css';
import Products from './features/products/Products';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import PostsPage from './features/posts/PostsPage';
import PostsForm from './features/posts/PostForm';

function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/counter" element={<Counter />} />
				<Route path="/products" element={<Products />} />
				<Route path="/posts" element={<PostsPage />} />
				<Route path="/posts/create" element={<PostsForm />} />
			</Route>
		</Routes>
	);
}

export default App;
