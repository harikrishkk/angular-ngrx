import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { PhotoService } from 'src/app/components/photo.service';
import { loadAllUsersInit } from 'src/app/store/users/user.actions';
import { selectAllUsers } from 'src/app/store/users/users.selectors';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  users$ = this.store.select(selectAllUsers);
  photos$ = this.photoService.entities$;

  constructor(private store: Store, private photoService: PhotoService) {
    this.photoService.getAll();
  }

  ngOnInit() {
    this.store.dispatch(loadAllUsersInit())
  }
}
