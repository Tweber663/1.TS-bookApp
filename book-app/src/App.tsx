import { FC, useState } from 'react'; 
import BookList from './components/BookList/BookList';
import AddBookForm from './components/BookList/AddBookForm/AddBookForm';
import { Book } from './interfaces/Book.interface';


  const App: FC = () => {
    return (
      <div className="container">
        <header>
           <h1>Books App</h1>
        </header>
        <BookList />
        <AddBookForm />
      </div>
    );
  }
  
  export default App;