import {createAction, props} from '@ngrx/store';
import {BlogPostSummary, Post} from './blog';

export const loadPosts = createAction(
  '[Blog] Load Posts'
);

export const postsLoaded = createAction(
  '[Blog] Posts Loaded',
  props<{ posts: BlogPostSummary[] }>()
);

export const newPost = createAction(
  '[Blog] New Post'
);

export const editPost = createAction(
  '[Blog] Edit Post',
  props<{id: string}>()
);

export const postLoaded = createAction(
  '[Blog] Post Loaded',
  props<{post: Post}>()
);

export const savePost = createAction(
  '[Blog] Save Post',
  props<Post>()
);

export const postSaved = createAction(
  '[Blog] Post Saved',
  props<Post>()
);

export const postCancelled = createAction(
  '[Blog] Post Cancelled'
);
