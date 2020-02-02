import {Todos} from './todos/todos';
import {Blog} from './blog/blog';

export interface State {
  todos?: Todos;
  blog?: Blog;
}
