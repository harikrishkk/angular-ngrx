
import { createFeature, createReducer, createSelector, on } from '@ngrx/store';
import { BooksActions } from './books.actions';
import { selectBooks } from './books.reducer';


interface State {
  collections: string[];
}

const initialState: State = {
  collections: [],
};

export const collectionFeature = createFeature({
  name: 'collection',
  reducer: createReducer(
    initialState,
    on(BooksActions.addBook, (state, { bookId }) => {
      console.log(state, bookId)
      if (state.collections.indexOf(bookId) > - 1) {
        return {
          ...state,
          collections: [...state.collections]
        }
      }
      return {
        ...state,
        collections: [...state.collections, bookId]
      }
    }),
    on(BooksActions.removeBook, (state, { bookId }) => {
      return {
        ...state,
        collections: state.collections.filter((id) => id !== bookId)
      }
    }),
  ),
  extraSelectors: ({ selectCollections }) => ({
    selectBookCollection: createSelector(
      selectBooks,
      selectCollections,
      (books, collections) => {
        return collections.map((id) => books.find((book) => book.id === id)!);
      }
    )
  })
});

export const {
  reducer,
  selectCollections,
  selectBookCollection
} = collectionFeature;
