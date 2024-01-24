import { Component, Input } from '@angular/core';
import { TwubricService } from '../twubric.service';

@Component({
  selector: 'app-follower-list',
  templateUrl: './follower-list.component.html',
  styleUrls: ['./follower-list.component.css']
})
export class FollowerListComponent {
 
  @Input()
  followers: any[] = []; 

  removeFollower(id:any){

  }
}
