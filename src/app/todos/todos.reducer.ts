import {createReducer, on} from '@ngrx/store';
import {Todos} from './todos';
import {add, remove, updateTitle} from './todos.actions';

export const initialState: Todos = {items: []};

const _todosReducer = createReducer(initialState,
  on(add, (state, action) => {
    return {...state, items: [...state.items, action]};
  }),
  on(remove, (state, action) => state),
  on(updateTitle, (state, action) => {
    return {...state, title: action.title};
  }),
);

export function todosReducer(state, action) {
  return _todosReducer(state, action);
}
