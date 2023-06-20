import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadAllUsersInit } from 'src/app/store/users/user.actions';
import { selectAllUsers } from 'src/app/store/users/users.selectors';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  users$ = this.store.select(selectAllUsers);
  constructor(private store: Store) {

  }

  ngOnInit() {
    this.store.dispatch(loadAllUsersInit())
  }
}
