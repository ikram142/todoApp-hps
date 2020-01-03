import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { Gender } from '../model/gender.model';
import { GenderService } from '../services/gender.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.styl']
})
export class ReactiveFormComponent implements OnInit {
  signupFrom: FormGroup; 
   
  genders: Gender [] = [];
  constructor(private genderService:GenderService,private formBuilder:FormBuilder) { }
  

  onSubmit(){ 
    console.log(this.signupFrom); 
  } 
  
  ngOnInit(){ 
    this.genders=this.genderService.getGenders();
    this.signupFrom= new FormGroup({ 
    'username': new FormControl(null,Validators.required), 
    'email': new FormControl(null,[Validators.required,Validators.email]), 
    'gender': new FormControl('male') ,
    'hobbies':new FormArray([]) ,
     'experiences':new FormArray([]) 
    }); 

   
   
}



getControls() {
   	return (<FormArray>this.signupFrom.get('hobbies')).controls;
  }
  getControlsEx() {
     	return (<FormArray>this.signupFrom.get('experiences')).controls;
    }  
  onAddHobby(){ 
    const control=new FormControl(null,Validators.required); 
    (<FormArray>this.signupFrom.get('hobbies')).push(control); 
  } 
  onAddEx(){ 
    const control=new FormControl(null,Validators.required); 
    (<FormArray>this.signupFrom.get('experiences')).push(this.formBuilder.group({
      profession:'',
      date:''
    })); 
  }  
  
  orderForm: FormGroup;
items: FormArray;



  
}
