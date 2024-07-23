import { FC } from "react";
import { useAppSelector, useAppDispatch } from './../../utils/redux';
import { Book } from "../../interfaces/Book.interface";
import './BookList.css';
import { removeBook } from "../../redux/booksRedux";
import BookItem from "./BookItem";

const BookList: FC = () => {
    const books = useAppSelector(state => state.books);
    const dispatch = useAppDispatch();
  
    return (
      <ul className="books-list">
        {books.map((book: Book) => <BookItem key={book.id} book={book} removeBook={(id: string) => dispatch(removeBook(id))} />)}
      </ul>
    );
  };
  

export default BookList; 