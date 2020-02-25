import {Blog, Post} from './blog';
import {createReducer, on} from '@ngrx/store';
import {newPost, postCancelled, postLoaded, postSaved, postsLoaded, postDeleted} from './blog.actions';

export const featureName = 'blog';

export const initialState: Blog = {};

function emptyPost(): Post {
  return {
    id: "",
    content: "",
    title: ""
  };
}

const _blogReducer = createReducer(initialState,
  on(postsLoaded, (state, action) => {
    return {...state, posts: action.posts};
  }),
  on(newPost, (state) => {
    return {...state, editing: emptyPost()};
  }),
  on(postSaved, postCancelled, (state) => {
    return {...state, editing: null};
  }),
  on(postLoaded, (state, action) => {
    return {...state, editing: action.post};
  }),
  on(postDeleted, (state, action) => {
    return {...state, editing: null, posts: state.posts.filter(post => post.id !== action.id)}
  })
);

export function blogReducer(state, action) {
  return _blogReducer(state, action);
}
