import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class GoogleScrapperService {
  apiUrl = 'http://localhost:8000/api/google-scraper';

  constructor(private http:HttpClient) { }

  getData() {
    return this.http.get(this.apiUrl);
  }
}
