
export class Page {
    constructor(){
        this.Title = '';
        this.Snippet = '';
        this.Link = '';
        this.IsHighlighted = false;
        this.Id = -1
    }
    Id: number;
    Title: string;
    Snippet: string;
    Link: string;
    IsHighlighted: boolean;
}
