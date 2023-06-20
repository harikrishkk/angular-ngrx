import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../store/users/users.reducer';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<Array<User>> {
    return this.http
      .get<{ users: any }>(
        'https://reqres.in/api/users'
      )
      .pipe(map((res: any) => res.data || []));
  }
}
