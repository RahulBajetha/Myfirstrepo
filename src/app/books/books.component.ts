import { Component, OnInit } from '@angular/core';
import { BookData } from '../Models/BookData';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : BookData[] = [{bookId:101 , bookName:"Harry Potter and philosopher's stone" , price :450 , image:"/assets/Images/Harry_Potter.jpg"},
  {bookId:102 , bookName:"Gone Girl" , price :600 , image:"/assets/Images/Gone_Girl.jpg"},
  {bookId:103 , bookName:"The Alchemist" , price :250 , image:"/assets/Images/The Alchemist.jpg"}]
  
  constructor() { }

  ngOnInit(): void {
  }

}
