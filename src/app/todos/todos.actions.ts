import {createAction, props} from '@ngrx/store';
import {Item} from './todos';

export const add = createAction(
  '[Todo List] Add',
  props<Item>()
);

export const markDone = createAction(
  '[Todo List] Mark Done',
  props<{ index: number }>()
);

export const remove = createAction(
  '[Todo List] Remove',
  props<{ index: number }>()
);

export const updateTitle = createAction(
  '[Todo List] Update Title',
  props<{ title: string }>()
);
