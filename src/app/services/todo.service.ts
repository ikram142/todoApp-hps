import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../model/todo.model';
import { CategorieService } from './categorie.service';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService  {
 /* private categories :Categorie [];
  ngOnInit(){
   this.categories=this.categorieService.getCategoires();
  };*/
  constructor(private categorieService:CategorieService) { }
  todos: Todo[] = [
    new Todo('Learn Angular', 'Must Learn angular In 4 days', 'In Progress',this.categorieService.getCategoires()[0]),
    new Todo('Learn Spring Cloud', 'Learn the spring cloud framework', 'Not Started', this.categorieService.getCategoires()[0]),
    new Todo('Learn Java', 'Learn Java', 'Completed', this.categorieService.getCategoires()[1]),
  ];
   
  getodos(){
    return this.todos;
  }
  addTodo(todo:Todo){
    return this.todos.push(todo);
  }
}
