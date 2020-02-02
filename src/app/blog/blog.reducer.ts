import {Blog} from './blog';
import {createReducer, on} from '@ngrx/store';
import {postsLoaded} from './blog.actions';

export const featureName = 'blog';

export const initialState: Blog = {};

const _blogReducer = createReducer(initialState,
  on(postsLoaded, (state, action) => {
    return {...state, posts: action.posts};
  })
);

export function blogReducer(state, action) {
  return _blogReducer(state, action);
}
