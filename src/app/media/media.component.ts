import { Component } from '@angular/core';
import { AppdataService } from '../appdata.service';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  users:any
  
  constructor(private appdataService: AppdataService) { }

  ngOnInit() {
    this.appdataService.get().subscribe(users => {
        var users = this.users = users;
        console.log(users);
      });
  }

  




}// MediaComponent class
