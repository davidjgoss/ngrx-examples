import {createReducer, on} from '@ngrx/store';
import {Todos} from './todos';
import {add, markDone, remove, updateTitle} from './todos.actions';

export const featureName = 'todos';

export const initialState: Todos = {items: []};

const _todosReducer = createReducer(initialState,
  on(add, (state, action) => {
    return {...state, items: [...state.items, action]};
  }),
  on(markDone, (state, action) => {
    return {...state, items: state.items.map((item, i) => {
        if (i === action.index) {
          return {...item, done: true};
        }
        return item;
      })};
  }),
  on(remove, (state, action) => {
    return {...state, items: state.items.filter((item, i) => i !== action.index)};
  }),
  on(updateTitle, (state, action) => {
    return {...state, title: action.title};
  }),
);

export function todosReducer(state, action) {
  return _todosReducer(state, action);
}
