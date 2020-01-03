import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { Todo } from 'src/app/model/todo.model';
import { Categorie } from 'src/app/model/categorie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.styl']
})
export class TodoAddComponent implements OnInit {

  constructor(private todoService:TodoService,private categorieService:CategorieService) { }
 
  categories: Categorie [] = [];

  ngOnInit() {
    this.getCategories();  
     }

  onSubmit(form:NgForm){ 
    console.log(form.value); 
       const todo= new Todo(form.value.name,form.value.description);
     console.log(todo);
    this.todoService.addTodo(todo)  ;
    } 
    getCategories(){
      this.categories=this.categorieService.getCategoires();
    };
 
    
    
    
}
