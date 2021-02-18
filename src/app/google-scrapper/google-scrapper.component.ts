import { Component, OnInit } from '@angular/core';
import { GoogleScrapperService } from '../google-scrapper.service';

@Component({
  selector: 'app-google-scrapper',
  templateUrl: './google-scrapper.component.html',
  styleUrls: ['./google-scrapper.component.css']
})

export class GoogleScrapperComponent {
  title = 'Results';
  resultCount: number;
  searchEngine: string;
  searchUrl: string;
  dataSource: any;
  displayedColumns: string[] = ['position', 'title', 'link'];

  constructor(private googleScrapperService: GoogleScrapperService) {
    this.googleScrapperService.getData().subscribe(
      data => {
        this.resultCount = data['results']['result_count']; 
        this.searchEngine = data['results']['search_engine']; 
        this.searchUrl = data['results']['search_url']; 
        this.dataSource = data['results']['organic_results'];
      }
    )
  }
}
