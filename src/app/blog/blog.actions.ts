import {createAction, props} from '@ngrx/store';
import {BlogPostSummary} from './blog';

export const loadPosts = createAction(
  '[Blog] Load Posts'
);

export const postsLoaded = createAction(
  '[Blog] Posts Loaded',
  props<{ posts: BlogPostSummary[] }>()
);
