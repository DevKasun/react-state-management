import useBookStore from "../store/bookStore";
import Book from "./Book";

const BookList: React.FC = () => {
  const books = useBookStore((state) => state.books);

  return (
    <div className="book-list flex items-center gap-4 py-8">
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
