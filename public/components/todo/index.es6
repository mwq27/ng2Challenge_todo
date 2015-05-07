import {
    Component,
    View,
    For,
    If,
    bootstrap,
    } from 'angular2/angular2';
import {FormBuilder, Validators, FormDirectives, ControlGroup, Control} from 'angular2/forms';
import {TodoStore} from 'components/todo/TodoStore';
@Component({
    selector: 'todoList',
    injectables: [TodoStore, FormBuilder]
})
@View({
    directives: [For, FormDirectives, If],
    templateUrl: 'components/todo/templates/todoList.html'
})
export class TodoList {
    todoForm: ControlGroup;
    builder: FormBuilder;
    store: TodoStore;
    remainingCount: number;
    completedCount: number;
    constructor(store: TodoStore, builder: FormBuilder) {
        this.todos = store.getAllTodos();
        this.builder = builder;
        this.store = store;
        this.todoForm = this.builder.group({
            todoItem: ["", Validators.required]
        });
    }

    updateCounts(): void {
        this.remainingCount = this.todos.filter(val => {
            return !val.completed;
        }).length;

        this.completedCount = this.todos.filter(val => {
            return val.completed;
        }).length;
    }

    addTodo(event): void {
        event.preventDefault();
        if (this.todoForm.controls.todoItem.valid) {
            this.store.save({title: this.todoForm.controls.todoItem.value, completed: false});
            this.todoForm = this.builder.group({
                todoItem: [null, Validators.required]
            });
            console.debug(this.todoForm.controls.todoItem.value)
        }
        this.updateCounts();
    }

    completeTodo(todo): void {
        todo.completed = !todo.completed;
        this.store.put(todo);
        this.todos = this.store.getAllTodos();
        this.updateCounts();
    }

    showCompletedTodos(): void {
        this.todos = this.store.getCompletedTodos();
    }

    showActiveTodos(): void {
        this.todos = this.store.getActiveTodos();
    }

    showAllTodos(): void {
        this.todos = this.store.getAllTodos();
    }

    clearCompletedTodos(): void {
        this.todos = this.store.clearCompletedTodos();
        this.updateCounts();
    }

    removeTodo(todo: object) {
        this.store.delete(todo);
    }
}

bootstrap(TodoList);
