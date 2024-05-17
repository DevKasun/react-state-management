import { atom } from "jotai";
import { books } from "./data/data";

const booksAtoms = atom(books);

export { booksAtoms }

