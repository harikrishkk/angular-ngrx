import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksActions, BooksApiActions } from 'src/app/store/books/books.actions';
import { selectBooks, selectLoading } from 'src/app/store/books/books.reducer';
import { selectBookCollection } from 'src/app/store/books/collection.reducer';

@Component({
  selector: 'app-book-pages',
  templateUrl: './book-pages.component.html',
  styleUrls: ['./book-pages.component.css']
})
export class BookPagesComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);
  loading$ = this.store.select(selectLoading);

  onAdd(bookId: string) {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId }));
  }

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(BooksApiActions.loadAllBooks())
  }
}
