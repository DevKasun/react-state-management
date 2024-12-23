import emptyImage from './../assets/empty-image.jpg';

const Book: React.FC = () => {
	return (
		<div className='card bg-white flex-1 p-4 rounded-lg flex flex-col gap-4'>
			<img src={emptyImage} alt='empty_image' />
			<h3 className='text-xl'>Book Name</h3>
			<p>Price: $29</p>
			<button className='bg-black text-white rounded-lg p-3 w-full'>
				Add to cart
			</button>
		</div>
	);
};

export default Book;
