import { create } from 'zustand';
import { BookTypes } from '../types';
import { Books } from '../data/data';

interface BookStoreState {
    books: BookTypes[];
}

const useBookStore = create<BookStoreState>(() => ({
    books: Books,
}));

export default useBookStore;