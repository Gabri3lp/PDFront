import { Component, OnInit, Input } from '@angular/core';
import { query } from '@angular/core/src/render3/query';
import { Page } from '../page';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent implements OnInit {
  @Input() result: Page[];
  @Input() resultLenght = 0;
  constructor(private searchService: SearchService) { 
  }

  ngOnInit() {
    this.result = [new Page()];
  }

   highlight(page: Page){
    this.searchService.highlight(page);
  }
}
