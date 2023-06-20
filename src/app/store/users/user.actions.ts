import { createAction, emptyProps, props } from '@ngrx/store';
import { Update, EntityMap, EntityMapOne, Predicate } from '@ngrx/entity';
import { User } from './users.reducer';

export const loadAllUsers = createAction('[Users API] Load All Users', props<{ users: User[] }>())
export const loadAllUsersInit = createAction('[Users API] Load All Users Init')
