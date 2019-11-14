import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './todo-list/todo-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store';
import {featureName, todosReducer} from './todos.reducer';
import {MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule} from '@angular/material';

@NgModule({
  declarations: [TodoListComponent],
  exports: [
    TodoListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(featureName, todosReducer),
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ]
})
export class TodosModule {
}
