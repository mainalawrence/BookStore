import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  registerForm!:FormGroup;

  constructor(private fb:FormBuilder,private auth:AuthService) { }
  ngOnInit(): void {
    this.registerForm=this.fb.group({
      name:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.min(4)]],
    })
  }
  onSubmit(event:any){
     console.log(this.registerForm.value);

   this.auth.registerUser(this.registerForm.value).subscribe(res=>{
     console.log(res);
   },(err)=>{
     console.log(err);
     
   })

  }
  getName(){
    return this.registerForm.get('name')
  }
  getEmail(){
    return this.registerForm.get('email');
  }
  getPassword(){
    return this.registerForm.get('password');
  }

}
