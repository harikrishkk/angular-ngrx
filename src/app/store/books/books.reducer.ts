import { createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/components/book-list/books.model';
import { BooksApiActions } from './books.actions';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);
