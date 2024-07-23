import { FC } from "react"
import { Book } from "../../interfaces/Book.interface"
import './BookItem.css'

type Props = {
    book: Book;
    removeBook: any;
}
const BookItem:FC<Props> = ({book, removeBook}) => {

    return (
        <li>${book.title} by ${book.author}, ${book.price}<button onClick={() => removeBook(book.id)} className="btnRemove">Remove</button></li>

    )
}

export default BookItem