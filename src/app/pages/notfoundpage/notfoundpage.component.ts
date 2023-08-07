import { Component } from '@angular/core';
import { HttpServiceService } from 'src/appService/http-service.service';

@Component({
  selector: 'app-notfoundpage',
  templateUrl: './notfoundpage.component.html',
  styleUrls: ['./notfoundpage.component.scss']
})
export class NotfoundpageComponent {


  constructor( private sums:HttpServiceService){

  }

  

}
