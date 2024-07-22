import { FC } from "react";
import { Book } from "../../interfaces/Book.interface";
import './BookList.css';
interface Params {
readonly bookList: Book[]; 
funcDeleteBook: (book: Book) => void;
}

const BookList:FC<Params> = ({bookList, funcDeleteBook}) => {

    const removeHandler = () => {
        funcDeleteBook({
            title: bookList[0].title,
            author: bookList[0].author,
            price: bookList[0].price,
            id: bookList[0].id
        })
    }
    return (
        <div>
            <ul className="books-list">
                <li className="book-item">{bookList[0].title} by {bookList[0].author}, cost: ${bookList[0].price}</li>
                <button className="btnRemove" onClick={removeHandler}>Remove</button>
            </ul>
        </div>
    )
}


export default BookList; 