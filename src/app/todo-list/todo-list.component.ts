import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.styl']
})
export class TodoListComponent implements OnInit {

  constructor() { }

 
  todoTask = new Todo ();

    categorie: Categorie [] = [
      new Categorie(1, 'Personal', 'Personal category'),
      new Categorie(2, 'Professional', 'Professional category'),
    ]

  ngOnInit() {
  }

  todos: Todo[] = [
    new Todo('Learn Angular', 'Must Learn angular In 4 days', 'In Progress',this.categorie[0]),
    new Todo('Learn Spring Cloud', 'Learn the spring cloud framework', 'Not Started', this.categorie[1]),
    new Todo('Learn Java', 'Learn Java', 'Completed', this.categorie[1]),
  ];
  AddNewTask()
  {
    this.todos.push({name:this.todoTask.name ,description:this.todoTask.description,category:this.todoTask.category,status:this.todoTask.status }) ;
      
  }

}
