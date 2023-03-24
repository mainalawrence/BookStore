import { Component, OnInit } from '@angular/core';
import { BooksServiceService } from 'src/app/services/books-service.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html'
})
export class ViewBooksComponent implements OnInit {

  constructor(private booksService: BooksServiceService) { }

  ngOnInit(): void {
    this.booksService.getBooks()
  }

}
