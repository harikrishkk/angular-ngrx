import { createSelector } from '@ngrx/store';
import { selectBooks } from './books.reducer';
import { selectCollections } from './collection.reducer';

export const selectBookCollection = createSelector(
  selectBooks,
  selectCollections,
  (books, collection) => {
    return collection.map((id) => books.find((book) => book.id === id)!);
  }
);


