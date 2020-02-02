import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {State} from '../../state';
import {Observable} from 'rxjs';
import {BlogPostSummary} from '../blog';
import {featureName} from '../blog.reducer';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  posts$: Observable<BlogPostSummary[]> = this.store.pipe(select(featureName)).pipe(map(blog => blog.posts));

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.store.dispatch({type: '[Blog] Load Posts'});
  }

}
