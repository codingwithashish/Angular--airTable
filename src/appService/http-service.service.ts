import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  url = 'https://api.airtable.com/v0/appxOuGZvte0xuK2S';
  keyId = 'keypBba27XUclxBwj';
  token = 'patWCvEMQdgUBJpZ7.916a579349935d751d2c7180c1e4c5d8777e44cc8a6459caebe4bac17b32d5d8'
  isLoginUser() {
    let userFind = sessionStorage.getItem('_0uxipzye');
    return userFind ? true : false
  }
  constructor(private httpClient: HttpClient) { }

  public getData(): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/Talents?api_key=${this.keyId}`);
  }
  public postData(userEmail: any): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/user?filterByFormula=Email%3D%22${userEmail}%22%20&api_key=${this.keyId}`);
  }
  public getOneUser(id: any): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/Proposals/${id}?api_key=${this.keyId}`);
  }
  public getProposalsTalents(Id: any) {
    return this.httpClient.get<any>(`${this.url}/Proposal_Talents/${Id}`, { headers: new HttpHeaders().append('Authorization', `Bearer ${this.token}`) });
  }
  public getPaticularData() {
    return this.httpClient.get<any>(`${this.url}/Talents`, { headers: new HttpHeaders().append('Authorization', `Bearer ${this.token}`) });
  }
  public getTalentDataId(Id: any) {
    return this.httpClient.get<any>(`${this.url}/Talents/${Id}`, { headers: new HttpHeaders().set('Authorization', `Bearer ${this.token}`) });
  }
  public postDataByBody(data: any) {
    return this.httpClient.post<any>(`${this.url}/Proposal_Talents`, data, { headers: new HttpHeaders().append('Authorization', `Bearer ${this.token}`) });
  }
  public deleteData(Id: any) {
    return this.httpClient.delete<any>(`${this.url}/Proposal_Talents/${Id}`, { headers: new HttpHeaders().append('Authorization', `Bearer ${this.token}`) });
  }
}
