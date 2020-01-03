import { Injectable } from '@angular/core';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor() { }
  private categories: Categorie [] = [
    new Categorie(1, 'Personal', 'Personal category'),
    new Categorie(2, 'Professional', 'Professional category'),
  ]
  getCategoires()
{
  return this.categories ;
}
addCategorie(categorie:Categorie){
 
  return this.categories.push(categorie);
}
}
