import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Todos} from '../todos';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {select, Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {add, markDone, remove, updateTitle} from '../todos.actions';
import {State} from '../../state';
import {featureName} from '../todos.reducer';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos$: Observable<Todos>;
  addForm = new FormGroup({
    name: new FormControl('', Validators.required)
  });

  constructor(private store: Store<State>) {
  }

  ngOnInit() {
    this.todos$ = this.store.pipe(select(featureName));
  }

  list() {
    return this.todos$.pipe(map(todos => todos.items.sort((a, b) => {
      if (a.done && !b.done) {
        return 1;
      }

      if (!a.done && b.done) {
        return -1;
      }

      return 0;
    })));
  }

  add() {
    this.store.dispatch(add({name: this.addForm.get('name').value, done: false}));
    this.addForm.reset();
  }

  markDone(index: number) {
    this.store.dispatch(markDone({index}));
  }

  remove(index: number) {
    this.store.dispatch(remove({index}));
  }

  updateTitle(value: string) {
    this.store.dispatch(updateTitle({title: value}));
  }

}
