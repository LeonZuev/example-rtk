import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { createPost } from './postsSlice';

export default function PostForm(): JSX.Element {
	const dispatch = useAppDispatch();
	const [title, setTitle] = useState<string>('');
	const [body, setBody] = useState<string>('');
	const [message, setMessage] = useState<string>('');

	function validateInputs(): boolean {
		if (title.trim().length > 0 && body.trim().length > 0) {
			setMessage(''); // если валидация прошла успешно - убераем сообщение об ошибке
			return true;
		}
		setMessage('Title and text should not be empty');
		return false;
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		// TODO add validation
		if (validateInputs()) {
			dispatch(createPost({ title, body })); // обратите внимание, чтобы импорт был из слайс, а не из api
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<span>{message}</span>
				<input
					type="text"
					placeholder="title"
					value={title}
					// required - // очищает форму
					onChange={(e) => setTitle(e.target.value)}
				/>
				<input
					type="text"
					placeholder="text"
					value={body}
					onChange={(e) => setBody(e.target.value)}
				/>
				<button type="submit">Create</button>
			</form>
		</div>
	);
}
