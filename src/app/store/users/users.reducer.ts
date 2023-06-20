
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

export interface User {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UsersState extends EntityState<User> {

}

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: UsersState = adapter.getInitialState();

export const userReducer = createReducer(initialState,
  on(UserActions.loadAllUsers, (state, { users }) => {
    return adapter.addMany(users, state)
  }))








