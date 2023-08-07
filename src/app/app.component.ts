import { Component } from '@angular/core';
import { map, take, toArray } from 'rxjs';
import { HttpServiceService } from 'src/appService/http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lawflex';
  constructor(private httpService: HttpServiceService) { }
  ngOnInit() {
  }
}
