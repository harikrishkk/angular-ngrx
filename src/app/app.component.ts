import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BooksActions, BooksApiActions } from './store/books/books.actions';
import { selectBooks, selectLoading } from './store/books/books.reducer';
import { selectBookCollection } from './store/books/collection.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
