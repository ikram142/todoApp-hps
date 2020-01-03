export class Categorie {
    static _id :number=1 ;
    public id : any;
    public value: string;
    public description:string ;
    constructor(id:Number,value?: string,description?:string){
        this.id= Categorie._id++;
        this.value=value;
        this.description=description;
    }
  }