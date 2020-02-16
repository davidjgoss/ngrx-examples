import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {BlogService} from './blog.service';
import {map, mergeMap} from 'rxjs/operators';
import {editPost, loadPosts, postLoaded, postSaved, postsLoaded, savePost} from './blog.actions';

@Injectable()
export class BlogEffects {
  listPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts.type, postSaved.type),
      mergeMap(() => this.blogService.list()
        .pipe(
          map(posts => postsLoaded({posts})))
      ));
  });
  savePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(savePost.type),
      mergeMap(post => this.blogService.save(post)
        .pipe(
          map(() => postSaved(post)))
      ));
  });
  loadPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editPost.type),
      mergeMap(action => this.blogService.load(action)
        .pipe(
          map(post => postLoaded({post})))
      ));
  });

  constructor(private actions$: Actions, private blogService: BlogService) {
  }
}
