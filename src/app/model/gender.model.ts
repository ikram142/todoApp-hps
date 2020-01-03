export class Gender {
    static _id :number=0 ;
    public id : number;
    public value: string;
    
    constructor(id?:Number,value?: string){
        this.id= Gender._id++;
        this.value=value;
        
    }
  }