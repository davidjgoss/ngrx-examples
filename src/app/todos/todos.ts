export interface Todos {
  title?: string;
  items: Item[];
}

export interface Item {
  done: boolean;
  name: string;
}
