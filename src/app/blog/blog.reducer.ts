import {Blog} from './blog';
import {createReducer, on} from '@ngrx/store';
import {newPost, postCancelled, postLoaded, postSaved, postsLoaded} from './blog.actions';

export const featureName = 'blog';

export const initialState: Blog = {};

const _blogReducer = createReducer(initialState,
  on(postsLoaded, (state, action) => {
    return {...state, posts: action.posts};
  }),
  on(newPost, (state) => {
    return {...state, editing: {}};
  }),
  on(postSaved, postCancelled, (state) => {
    return {...state, editing: null};
  }),
  on(postLoaded, (state, action) => {
    return {...state, editing: action.post};
  })
);

export function blogReducer(state, action) {
  return _blogReducer(state, action);
}
