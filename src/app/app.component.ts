import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'friends-list';
  // create an array named "Friends" and populate with some friends
  friends = ["Greg", "Dana", "Emily","Nick"]; 
}
