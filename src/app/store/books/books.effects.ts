import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { GoogleBooksService } from 'src/app/components/book-list/books.service';
import { BooksApiActions } from './books.actions';

export const loadAllBooksfromDB = createEffect(
  (action$ = inject(Actions),
    booksService = inject(GoogleBooksService)) => {
    return action$.pipe(
      ofType(BooksApiActions.loadAllBooks),
      switchMap(() => booksService.getBooks()
        .pipe(
          map(books => (BooksApiActions.retrievedBookList({ books }))),
          catchError(() => EMPTY)
        ))
    )
  },
  { functional: true }
)


