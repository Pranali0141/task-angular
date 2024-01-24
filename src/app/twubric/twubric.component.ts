import { Component } from '@angular/core';
import { TwubricService } from '../twubric.service';

@Component({
  selector: 'app-twubric',
  templateUrl: './twubric.component.html',
  styleUrls: ['./twubric.component.css']
})
export class TwubricComponent {

  twubricData: any; // Define the structure according to the API response

  constructor(private twubricService: TwubricService) { }

  ngOnInit(): void {
    this.twubricService.getTwubricData().subscribe(data => {
      this.twubricData = data;
    });
  }
}
