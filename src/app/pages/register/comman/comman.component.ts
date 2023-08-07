import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { HttpServiceService } from 'src/appService/http-service.service';

@Component({
  selector: 'app-comman',
  templateUrl: './comman.component.html',
  styleUrls: ['./comman.component.scss']
})
export class CommanComponent {
  title = 'lawflex';
  loaderShow: boolean = false
  PropasalArr: any = []
  dynamicData: any = [];
  constructor(private httpService: HttpServiceService, private router: Router) { }
  ngOnInit() {
    this.loaderShow = true
    this.httpService.getData().pipe(map((res: any) => res?.records.map((res: any) => res?.fields))).subscribe(res => {
      this.dynamicData = res;
      this.loaderShow = false
    })
  }

  addData(index: any) {
    let deleteArr = this.dynamicData.splice(index, 1);
    this.PropasalArr.push(deleteArr[0])
  }
  removeData(index: any) {
    let addArr = this.PropasalArr.splice(index, 1);
    this.dynamicData.push(addArr[0])
  }

  logOut() {
    sessionStorage.clear();
    this.router.navigate([''])
  }
}
