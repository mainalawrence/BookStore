import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Book } from '../interfaces/books';


@Injectable({
  providedIn: 'root'
})
export class BooksServiceService {

  books: Book[] = []

  constructor(private http: HttpClient) { }
  getBooks(): void {
    this.http.get<Book[]>("http://localhost:5500/api/books").subscribe(data => {
      console.log(data);
    })
  }
  Books(book:Book):any{
  return this.http.post<any>("http://localhost:5500/api/books",book).subscribe(data=>{
  console.log(data);
})
  }
}
