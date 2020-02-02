import {Injectable} from '@angular/core';
import uuid from 'uuid/v1';
import {Observable} from 'rxjs';
import {BlogPostSummary, Post} from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  // instead of implementing some server-side database
  data: Post[] = [
    {
      id: uuid(),
      title: 'First Post',
      content: 'Lorem ipsum'
    },
    {
      id: uuid(),
      title: 'Second Post',
      content: 'Lorem ipsum'
    }
  ];

  constructor() {
  }

  list(): Observable<BlogPostSummary[]> {
    return new Observable(subscriber => {
      subscriber.next(this.data.map(post => {
        return {
          id: post.id,
          title: post.title,
          summary: post.content.substr(0, 10)
        };
      }));
      subscriber.complete();
    });
  }
}
