import { FC, useState, FormEvent } from 'react';
import { randomID } from '../../../utils/randomID';
import { Book } from '../../../interfaces/Book.interface';
import './AddBookForm.css'
import { addBook } from '../../../redux/booksRedux';
import { useAppDispatch } from '../../../utils/redux';
import { useAppSelector } from '../../../utils/redux';

const AddBookForm: FC = () => {

  const dispatch = useAppDispatch();
  const books = useAppSelector(state => state.books); 

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState(0);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {  
        e.preventDefault()
        dispatch(addBook({
          id: randomID(10),
          title,
          author,
          price
        }))
      }

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      Title: <input className="add-book-form" value={title} onChange={e => setTitle(e.target.value)} type="text" />
      Author: <input value={author} onChange={e => setAuthor(e.target.value)} type="text" />
      Price: <input value={price} onChange={e => setPrice(parseInt(e.target.value))} type="number" />
      <button>Add book</button>
    </form>
  );
};

export default AddBookForm;