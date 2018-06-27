import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  @Input() eventItem;
  @Output() click = new EventEmitter();
  
  items:any[];
  

  constructor(private dataService: DataService) { }

  ngOnInit(item) {
    this.items = this.dataService.get();
  }




}// MediaComponent class
