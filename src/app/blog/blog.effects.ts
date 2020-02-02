import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {BlogService} from './blog.service';
import {map, mergeMap} from 'rxjs/operators';
import {postsLoaded} from './blog.actions';

@Injectable()
export class BlogEffects {
  listPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Blog] Load Posts'),
      mergeMap(() => this.blogService.list()
        .pipe(
          map(posts => postsLoaded({posts})))
        ));
  });

  constructor(private actions$: Actions, private blogService: BlogService) {
  }
}
