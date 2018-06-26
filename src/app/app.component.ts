import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstJumbo = {
    id:1,
    name:'some jumbo',
    category: 'some cat',
    isfav: 'no'
  }
  onJumboDelete(jumbo) {
    console.log(jumbo);
  }
}
