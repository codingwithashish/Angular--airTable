import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 getBaseUrl() {
    return 'https://v1.nocodeapi.com/ashish000/airtable/lEdToIXCniawssLf?tableName=test'
}
  constructor(private httpClient: HttpClient) { }

  getdata() {
    return this.httpClient.get(`${this.getBaseUrl()}`);
  }
  savedata(url:any,data:any) {
    return this.httpClient.get(url,data);
  }
}
