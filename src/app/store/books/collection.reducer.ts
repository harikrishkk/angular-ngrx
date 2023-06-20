
import { createFeature, createReducer, on } from '@ngrx/store';
import { BooksActions } from './books.actions';

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
});

export const {
  reducer,
  selectCollections
} = collectionFeature;
