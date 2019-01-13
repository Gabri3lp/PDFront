import { Component, Input } from '@angular/core';
import { Page } from './page';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inicio';
  @Input() searchQuery = '';
  result: Page[];
  resultLenght = 0;
  constructor(private searchService: SearchService){
  }
  
  public search() : void {
    this.searchService.search(this.searchQuery).subscribe(result =>
      {
         this.result = result;
         this.resultLenght = result.length;
      });
  }
}
