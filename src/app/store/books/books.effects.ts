import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { GoogleBooksService } from 'src/app/components/book-list/books.service';
import { BooksApiActions } from './books.actions';

@Injectable()
export class BookEffects {

  loadAllBooks$ = createEffect(() => this.actions$.pipe(
    ofType(BooksApiActions.loadAllBooks),
    switchMap(() => this.bookService.getBooks()
      .pipe(
        map(books => (BooksApiActions.retrievedBookList({ books }))),
        catchError(() => EMPTY)
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private bookService: GoogleBooksService
  ) { }
}
