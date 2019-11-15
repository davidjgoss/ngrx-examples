import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TodoListComponent} from './todos/todo-list/todo-list.component';
import {TodosModule} from './todos/todos.module';

@NgModule({
  declarations: [],
  imports: [
    TodosModule,
    RouterModule.forRoot(
      [
        {path: 'todos', component: TodoListComponent}
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
