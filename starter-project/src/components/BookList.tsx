import Book from './Book';

const BookList: React.FC = () => {
	return (
		<div className='book-list flex items-center gap-4 py-8'>
			<Book />
			<Book />
			<Book />
			<Book />
		</div>
	);
};

export default BookList;
