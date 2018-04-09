import { Component } from '@angular/core';
import { ChronologyService } from '../../services/chronology.service';

@Component({
  selector: 'chronology-list',
  templateUrl: './chronology-list.component.html',
  styleUrls: ['./chronology-list.component.scss'],
  providers: [ChronologyService]
})

export class ChronologyListComponent {
  private chronologies = [];

  constructor (private chronologyService: ChronologyService) {
    this.index();
  }

  index() {
    this.chronologyService.index().subscribe(
      result => {
        console.dir(result);
        if(!result.data) {
          this.chronologies = [];
        } else {
          this.chronologies = result.data;
          console.dir(result.data);
        }
      }, 
      error => {
        let errorMessage = <any>error;
        console.error(errorMessage);
      }
    );
  }
}
