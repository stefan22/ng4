import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  firstEventItem = {

    id:1,
    name: 'Source App.component',
    year: 2018,
    description: 'using input decorator in media component.',
    faqs: [
      {
        question: 'what is this?',
        answer: 'some random question'
      }
    ]


  };





}//AppComponent class
