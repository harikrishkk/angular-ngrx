import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from 'src/app/components/book-list/books.model';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Add Book': props<{ bookId: string }>(),
    'Remove Book': props<{ bookId: string }>(),
  },
});

export const BooksApiActions = createActionGroup({
  source: 'Books API',
  events: {
    'Load All Books': emptyProps(),
    'Retrieved Book List': props<{ books: Array<Book> }>(),
  },
});
