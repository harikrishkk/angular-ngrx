import {
  createSelector,
  createFeatureSelector,
} from '@ngrx/store';

import { adapter, UsersState } from './users.reducer'

export const userFeatureSelector = createFeatureSelector<UsersState>('users');

const { selectAll } = adapter.getSelectors();

export const selectAllUsers = createSelector(userFeatureSelector, selectAll);
