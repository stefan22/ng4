import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  @Input() jumbo;
  @Output() delete = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    this.delete.emit(this.jumbo);
  }

}
