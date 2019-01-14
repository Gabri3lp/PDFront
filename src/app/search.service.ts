import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Page } from './page';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const BACKEND_API_URL = "http://localhost:8080";
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  currentSearch = "";
  searchType = "web";
  constructor(private http: HttpClient) { }

  highlight(page: Page) : void{
    
    let params = new HttpParams();
    if(page.IsHighlighted){
      params = params.append("Id", "" + page.Id)
    }else{
      params = params.append("Id", "" + (-1))
      params = params.append("IsHighlighted", "false")
      params = params.append('Title', page.Title);
      params = params.append('Snippet', page.Snippet);
      params = params.append('Link', page.Link);
      params = params.append('Query', this.currentSearch);
    }
  
    this.http.get(BACKEND_API_URL+"/highlight", {params: params}).subscribe(result =>{if(result) page.IsHighlighted = !page.IsHighlighted;});
  } 
  search(query: string): Observable<Page[]>{
    if(query == "")
      return of([]);
      this.currentSearch = query;
    return this.http.get<Page[]>(BACKEND_API_URL + "/" + this.searchType + "/" + query)// or any other operator

  }
}
