import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TodoListComponent} from './todos/todo-list/todo-list.component';
import {TodosModule} from './todos/todos.module';
import {BlogComponent} from './blog/blog.component';
import {BlogModule} from './blog/blog.module';

@NgModule({
  declarations: [],
  imports: [
    TodosModule,
    BlogModule,
    RouterModule.forRoot(
      [
        {path: 'todos', component: TodoListComponent},
        {path: 'blog', component: BlogComponent}
      ]
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
