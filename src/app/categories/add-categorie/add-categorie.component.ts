import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Categorie } from 'src/app/model/categorie.model';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.styl']
})
export class AddCategorieComponent implements OnInit {

  constructor(private categorieService:CategorieService) { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){ 
    console.log(form.value); 
   // todo.name=form.value.name ;
   // todo.description=form.value.description
    const categorie= new Categorie(form.value.value,form.value.description);
     console.log(categorie);
     
    this.categorieService.addCategorie (categorie) ;
    } 

}
