import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-books',
  templateUrl: './add-books.component.html',
})
export class AddBooksComponent implements OnInit {
  addBookForm!:FormGroup;
  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.addBookForm=this.fb.group({
    name:['',[Validators.required]],
    pages:['',[Validators.required]],
    image:['',[Validators.required]],
    author:['',[Validators.required]],
    })
  }
  
  onSubmit(event:any){

  }
  
  getName(){
    return this.addBookForm.get('name');
  }
  getPages(){
    return this.addBookForm.get('pages');
  }
  getImage(){
    return this.addBookForm.get('image');
  }
  getAuthor(){
    return this.addBookForm.get("author");
  }
 

}
