
import { createFeature, createReducer, on } from '@ngrx/store';
import { Book } from 'src/app/components/book-list/books.model';
import { BooksApiActions } from './books.actions';

interface State {
  books: Book[];
  loading: boolean;
}

const initialState: State = {
  books: [],
  loading: false,
};

export const booksFeature = createFeature({
  name: 'books',
  reducer: createReducer(
    initialState,
    on(BooksApiActions.loadAllBooks, (state, action) => ({
      ...state,
      loading: true
    })),
    on(BooksApiActions.retrievedBookList, (state, action) => ({
      ...state,
      books: action.books,
      loading: false
    }))
  ),
});

export const {
  reducer,
  selectBooksState,
  selectBooks,
  selectLoading
} = booksFeature;
