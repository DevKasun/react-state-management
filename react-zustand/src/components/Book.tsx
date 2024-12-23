import useCartStore from "../store/cartStore";
import { BookTypes } from "../types";
import emptyImage from "./../assets/empty-image.jpg";

interface BookProps {
  book: BookTypes;
}

const Book: React.FC<BookProps> = ({ book }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="card bg-white flex-1 p-4 rounded-lg flex flex-col gap-4">
      <img src={emptyImage} alt="empty_image" />
      <h3 className="text-xl">{book.title}</h3>
      <p>Price: ${book.price}</p>
      <button
        onClick={() => {
          addToCart(book);
        }}
        className="bg-black text-white rounded-lg p-3 w-full"
      >
        Add to cart
      </button>
    </div>
  );
};

export default Book;
