import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'airtable-angular';
  result: any;
  constructor(private HttpService: HttpService){
  }
  ngOnInit(){
    // this.HttpService.getdata().subscribe((res) => {
    //   this.result = res;
    //   console.log(this.result);
    // });
    const userData = {
      Name: "John Doe",
      Email: "johndoe@example.com",
      Password: "password123",
    };
    this.HttpService.savedata(`https://api.airtable.com/v0/appxOuGZvte0xuK2S/user/`,userData).subscribe((res) => {
      this.result = res;
      console.log(this.result,'======================');
    });
  }
 
}
