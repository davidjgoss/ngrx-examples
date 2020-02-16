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

  load({id}: {id: string}): Observable<Post> {
    return new Observable(subscriber => {
      const found = this.data.find(item => item.id === id);
      subscriber.next(found);
      subscriber.complete();
    });
  }

  save(post: Post): Observable<void> {
    return new Observable(subscriber => {
      if (post.id) {
        const found = this.data.find(item => item.id === post.id);
        this.data.splice(this.data.indexOf(found), 1, {
          ...post
        });
      } else {
        this.data.push({
          ...post,
          id: uuid()
        });
      }
      subscriber.next();
      subscriber.complete();
    });
  }
}
