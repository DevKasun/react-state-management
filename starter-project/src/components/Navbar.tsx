const Navbar = () => {
	return (
		<header className='p-4 bg-teal-700 flex items-center justify-center shadow-lg'>
			<menu className='container px-4 flex items-center justify-between'>
				<a href='' className='text-2xl text-slate-50'>
					DevK Book Store
				</a>
				<a href='' className='text-large text-slate-50 underline'>
					Cart(0)
				</a>
			</menu>
		</header>
	);
};

export default Navbar;
