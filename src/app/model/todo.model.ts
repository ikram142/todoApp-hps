import { Categorie } from './categorie.model';

export class Todo {
     public name:string ;
     public description: string;
     public status:string ;
     public category:Categorie ;
     constructor (name?:string,description?: string,status?:string,category?:Categorie){
         this.name=name;
         this.description=description;
         this.status=status;
         this.category=category;
     }
    
  }