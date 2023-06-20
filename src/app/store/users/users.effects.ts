
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UsersService } from 'src/app/components/users.service';
import * as UserActions from './user.actions';

@Injectable()
export class UsersEffects {

  loadAllBooks$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loadAllUsersInit),
    switchMap(() => this.usersService.getAllUsers()
      .pipe(
        map(users => {
          return UserActions.loadAllUsers({ users })
        }),
        catchError(() => EMPTY)
      ))
  )
  );

  constructor(
    private actions$: Actions,
    private usersService: UsersService
  ) { }
}
