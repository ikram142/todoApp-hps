export class Categorie {
    public id:Number;
    public value: string;
    public description:string ;
    constructor(id:Number,value?: string,description?:string){
        this.id=id;
        this.value=value;
        this.description=description;
    }
  }