import { useAtom } from 'jotai';
import { BookTypes } from '../types';
import emptyImage from './../assets/empty-image.jpg';
import { cartAtoms } from '../atoms';

interface BookProps {
	book: BookTypes;
}

const Book: React.FC<BookProps> = ({ book }) => {
	const [cart, setCart] = useAtom(cartAtoms);
	const addToCart = () => {
		setCart([...cart, book]);
	};

	return (
		<div className='card bg-white flex-1 p-4 rounded-lg flex flex-col gap-4'>
			<img src={emptyImage} alt='empty_image' />
			<h3 className='text-xl'>{book.title}</h3>
			<p>Price: ${book.price}</p>
			<button
				onClick={addToCart}
				className='bg-black text-white rounded-lg p-3 w-full'
			>
				Add to cart
			</button>
		</div>
	);
};

export default Book;
