import { Component, OnInit } from '@angular/core';
import { Categorie } from '../model/categorie.model';
import { Todo } from '../model/todo.model';
import { TodoService } from '../services/todo.service';
import { CategorieService } from '../services/categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.styl']
})
export class TodoListComponent implements OnInit {

  constructor(private todoService:TodoService,private categorieService:CategorieService,private router :Router) { }

 
  todoTask = new Todo ();

    categories: Categorie [] = [];

  ngOnInit() {
    this.getTodos(); 
    this.getCategories();  
     }

  todos: Todo[] = [];
  AddNewTask()
  {
   // this.todos.push({name:this.todoTask.name ,description:this.todoTask.description,category:this.todoTask.category,status:this.todoTask.status }) ;
    this.todoService.addTodo(this.todoTask)  ;
  }

  getTodos(){
    this.todos=this.todoService.getodos();
  }
  getCategories(){
    this.categories=this.categorieService.getCategoires();
  };
  onLoadServer(){
    this.router.navigate(['/addTodo']);
    }

}
