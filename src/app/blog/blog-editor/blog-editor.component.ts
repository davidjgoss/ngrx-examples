import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {State} from '../../state';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {BlogPostSummary, Post} from '../blog';
import {featureName} from '../blog.reducer';
import {filter, map} from 'rxjs/operators';
import {newPost, postCancelled, savePost} from '../blog.actions';

@Component({
  selector: 'app-blog-editor',
  templateUrl: './blog-editor.component.html',
  styleUrls: ['./blog-editor.component.css']
})
export class BlogEditorComponent implements OnInit {
  editing$: Observable<Post> = this.store.pipe(select(featureName)).pipe(map(blog => blog.editing));
  form = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl('')
  });

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.editing$.pipe(filter(post => !!post))
      .subscribe(value => this.form.setValue(value));
  }

  newPost() {
    this.store.dispatch(newPost());
  }

  save() {
    this.store.dispatch(savePost(this.form.value));
  }

  cancel() {
    this.store.dispatch(postCancelled());
  }

}
