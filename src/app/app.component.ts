import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstproj';

  firstname :string ="Rahul";
  Role:string ="Dot net Trainee";
  Today:Date = new Date();
  Roll_No : number = 456; 
}
