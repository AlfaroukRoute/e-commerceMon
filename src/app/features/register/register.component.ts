import { Component } from '@angular/core';

import {FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms"

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  // !!!!1- ReactiveFormsModule
  //! 2- build form at ts file
  //! 3-bind html ==> ts

  //! ts || html name input
  //! for group  formGroup(name , email , password, formArray phone++ , ++++address(country , city , street) ...)




  registerGroup : FormGroup = new FormGroup({
    name : new FormControl( '' , [   Validators.required , Validators.minLength(3) , Validators.maxLength(20)      ]  ),
    email : new FormControl( '' ,          [ Validators.required , Validators.email ]  ),
    password : new FormControl( '' , [     Validators.required  , Validators.pattern(/^[A-Z].{5,}/)    ]  ),
    // !!!! match ||||\ custom validation
    rePassword : new FormControl( '' , [  Validators.required  , Validators.pattern(/^[A-Z].{5,}/)       ]  ),
    phone : new FormControl( '' , [     Validators.required  , Validators.pattern(/^01[0125][0-9]{8}$/)    ]  ),

  });


  handleSubmit(){
    this.registerGroup.markAllAsTouched();
    if(this.registerGroup.invalid) return;


  

    // !!! 

    alert("call api[")

    
  }


 get nameController(){
    return this.registerGroup.get('name');
  }

  get emailController(){
    return this.registerGroup.get('email');
  }

  get passwordController(){
    return this.registerGroup.get('password');
  }

  get rePasswordController(){
    return this.registerGroup.get('rePassword');
  }

  get phoneController(){
    return this.registerGroup.get('phone');
  }

  get emailErrorMsg(){
    if(this.emailController?.touched && this.emailController?.errors){
      if(this.emailController?.getError('required')){
        return "email is required"
      }else if(this.emailController?.getError('email')) {
        return "email must be a valid email address"
      }
    }
    return "";
  }

  get passwordErrorMsg(){
    if(this.passwordController?.touched && this.passwordController?.errors){
      if(this.passwordController?.getError('required')){
        return "password is required"
      }else if(this.passwordController?.getError('pattern')) {
        return "password must start with a capital letter and be at least 6 characters long"
      }
    }
    return "";
  }

  get rePasswordErrorMsg(){
    if(this.rePasswordController?.touched && this.rePasswordController?.errors){
      if(this.rePasswordController?.getError('required')){
        return "rePassword is required"
      }else if(this.rePasswordController?.getError('pattern')) {
        return "rePassword must start with a capital letter and be at least 6 characters long"
      }
    }
    return "";
  }

  get phoneErrorMsg(){
    if(this.phoneController?.touched && this.phoneController?.errors){
      if(this.phoneController?.getError('required')){
        return "phone is required"
      }else if(this.phoneController?.getError('pattern')) {
        return "phone must be a valid Egyptian phone number"
      }
    }
    return "";
  }

  get nameErrorMsg(){
    if(this.nameController?.touched && this.nameController?.errors){
      if(this.nameController?.getError('required')){
        return "name is required"
      }else if(this.nameController?.getError('minlength')) {
        return "name must be at least 3 characters"
      }else if(this.nameController?.getError('maxlength')) {
        return "name cannot be more than 20 characters"
      }
    }
    return "";
  }






}
