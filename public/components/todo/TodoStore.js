export class TodoStore {
  constructor() {
    this.todos = [];
  }

  getAllTodos() {
    return this.todos;
  }

  getCompletedTodos(): any {
    return this.todos.filter(item => {
      return item.completed;
    });
  }

  getActiveTodos(): any {
    return this.todos.filter(item => {
      return !item.completed;
    });
  }

  clearCompletedTodos(): any {
    return this.todos.map(item => {
      item.completed = false;
      return item;
    });
  }

  markAllCompleted(): any {

  }

  save(todo): any {
    this.todos.push(todo);
    return this.todos;
  }

  put(todo): void {
    this.todos.forEach((t) => {
      if (t.title === todo.title) {
        t.completed = todo.completed;
      }
    });
  }

  delete(todo) {
    this.todos.splice(this.todos.indexOf(todo), 1);
    return this.todos;
  }
}
