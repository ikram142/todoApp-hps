import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoDetailsComponent,
    CategoriesComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
