import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewStyleDirective } from './directives/new-style.directive';
import { ShotenPipe } from './pipes/shoten.pipe';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NavbarModule, CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsFreeModule } from 'angular-bootstrap-md'
import { TodoAddComponent } from './todo/todo-add/todo-add.component';
import { AddCategorieComponent } from './categories/add-categorie/add-categorie.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md'
const routes:Routes =[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'todo',component:TodoListComponent},
  {path:'addTodo',component:TodoAddComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'reactiveForm',component:ReactiveFormComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoListComponent,
    TodoDetailsComponent,
    CategoriesComponent,
    NewStyleDirective,
    ShotenPipe,
    HomeComponent,
    TodoAddComponent,
    AddCategorieComponent,
    ReactiveFormComponent
    
      ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
   // NavbarModule, WavesModule, ButtonsModule
   RouterModule.forRoot(routes),
   MDBBootstrapModule.forRoot(),
   NavbarModule, WavesModule, ButtonsModule 
   ,CheckboxModule, WavesModule, ButtonsModule, InputsModule, IconsModule, CardsFreeModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
