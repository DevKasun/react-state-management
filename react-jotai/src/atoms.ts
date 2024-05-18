import { atom } from "jotai";
import { books } from "./data/data";
import { BookTypes } from "./types";

const booksAtoms = atom(books);
const cartAtoms = atom<BookTypes[]>([]);

export { booksAtoms, cartAtoms }

