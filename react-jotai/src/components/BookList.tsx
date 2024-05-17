import Book from './Book';
import { useAtom } from 'jotai';
import { booksAtoms } from '../atoms';
import { BookTypes } from '../types';

const BookList: React.FC = () => {
	const [books] = useAtom(booksAtoms);
	return (
		<div className='book-list flex items-center gap-4 py-8'>
			{books.map((book: BookTypes) => (
				<Book key={book.id} book={book} />
			))}
		</div>
	);
};

export default BookList;
