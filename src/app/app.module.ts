import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ActionReducer, MetaReducer, StoreModule } from '@ngrx/store';
import { CounterComponent } from './components/counter/counter.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { reducer as booksReducer } from './store/books/books.reducer';
import { reducer as collectionReducer } from './store/books/collection.reducer';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import * as bookEffects from './store/books/books.effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BookPagesComponent } from './pages/book-pages/book-pages.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';

// Higher order function
export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<any>[] = [debug];

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BookListComponent,
    BookCollectionComponent,
    HomePageComponent,
    BookPagesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
      router: routerReducer
    }, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot(bookEffects),
    StoreRouterConnectingModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
