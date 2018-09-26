import { combineReducers } from 'redux';
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // any key you provide to combinReducers will be a key on our global state
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
