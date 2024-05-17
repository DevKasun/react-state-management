import React from 'react';
import MainLayout from './layout/MainLayout';
import Navbar from './components/Navbar';
import BookList from './components/BookList';

const App: React.FC = () => {
	return (
		<MainLayout>
			<Navbar />
			<main className='flex justify-center h-screen bg-zinc-800'>
				<div className='container mx-auto px-4'>
					<BookList />
				</div>
			</main>
		</MainLayout>
	);
};

export default App;
