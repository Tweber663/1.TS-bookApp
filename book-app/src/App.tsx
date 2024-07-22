import { FC, useState } from 'react'; 
import BookList from './components/BookList/BookList';
import AddBookForm from './components/BookList/AddBookForm/AddBookForm';
import { Book } from './interfaces/Book.interface';

const booksData = [
  { id: 'te1314derw', title: 'Of Mice and Men', author: 'John Steinbeck', price: 25 },
  { id: 't32s14dzdw', title: 'East of Eden', author: 'John Steinbeck', price: 30 }
];


const App: FC = () => {

  const [books, setBooks] = useState<Book[]>(booksData);

  const addBook = (newBook: Book) => {
    setBooks([...books, newBook])
  }

  const removeBook = (deletedBook: Book) => {
    console.log(deletedBook)
    setBooks(books.filter((book) => deletedBook.id !== book.id))
  }

  return (
    <div className="container">
      <header>
         <h1>Books App</h1>
      </header>
      {books.map((book) => <BookList funcDeleteBook={removeBook} bookList={[book]}/>)}
      <AddBookForm funcAddBook={addBook}/>
    </div>
  );
}

export default App;