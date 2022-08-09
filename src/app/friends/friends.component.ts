import { Component, OnInit } from '@angular/core';
import { FriendsData } from '../Models/FriendsData';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  Friends : string[]=["Rahul","Sagar","Kanisk"]

  a:number=88;
  b:number=78;

  friend :FriendsData[]=[ {name:"Rahul",email:"rahul@gmail.com",Contact_No:"7896541236",photo:"/assets/Images/Devang.jpg"},
  {name:"Sagar",email:"ul@gmail.com",Contact_No:"7896541236",photo:"/assets/Images/Sagar.jpeg"}]
  
  constructor() { }

  ngOnInit(): void {
  }

}
