import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { HttpServiceService } from 'src/appService/http-service.service';

@Component({
  selector: 'app-all-talents',
  templateUrl: './all-talents.component.html',
  styleUrls: ['./all-talents.component.scss']
})
export class AllTalentsComponent {
  loaderShow: boolean = false
  PropasalArr: any = []
  dynamicData: any = [];
  checkIndx: any;
  checkArr: any = []
  checkTrue: any;
  userInfoArr1 = [{ name: 'vishal', age: 23 }, { name: 'shyam', age: 20 }, { name: 'vishal6', age: 24 }];
  duplicatNo: any = [];
  duplicateObj: any = {}
  countryData: any = [{ name: 'India', value: 'IN', cities: ['dehli', 'mumbai'] }, { name: 'pakistan', value: 'PK', cities: ['Lahore', 'karachi'] }, { name: 'Bangladesh', value: 'BG', cities: ['dhaka', 'chittagong'] }];
  particularCountry: any = [];
  constructor(private httpService: HttpServiceService, private router: Router) { }
  ngOnInit() {
    // this.loaderShow = true
    // this.httpService.getData().pipe(map((res: any) => res?.records.map((res: any) => res?.fields))).subscribe(res => {
    //   this.dynamicData = res;
    //   this.loaderShow = false
    // })


    // this.userInfoArr1.forEach((ele) => { this.duplicatNo.push(ele.name) })
    // this.duplicatNo.forEach((ele: any) => { ele in this.duplicateObj ? this.duplicateObj[ele]++ : this.duplicateObj[ele] = 1 })
    // console.log(this.duplicateObj, "=====");



    // this.userInfoArr1.forEach((ele: any, indx) => {
    //    ele.name == 'shyam' ? ele.name = 'jerry' : ''
    // })
    // console.log(this.userInfoArr1, "==lele==");

    // this.userInfoArr1.forEach((ele: any) => {
    //   let x = this.userInfoArr1.findIndex(ele => {
    //     return ele.name == ele.name
    //   })
    //   console.log(x, "==djdjd==")

    // })




    // let x;

    // arr.forEach((ele: any, indx: any) => {
    //   let change = arr.indexOf(ele) == indx;
    //   console.log(change,"===");

    //   // arr.splice(indx, 1, `hello${change}`)
    //   // x = arr.indexOf(ele) == indx ? false : true;
    // });
    // console.log(arr, "==")

    let arr: any = [7, 1, 5, 3, 6, 4];
    let numberCheck = arr.length / 2;
    let incomeNo = [];
    let maxNo = 0
    if (arr.length % 2 == 0) {
      for (let i = 0; i < numberCheck; i++) {
        let substract = Math.abs(arr[i] - arr[i + numberCheck]);
        incomeNo.push(substract);
      }
      for (let i = 0; i < incomeNo.length; i++) {
        if (maxNo < incomeNo[i]) {
          maxNo = incomeNo[i]
        }
      }
    }
    else {
      incomeNo[0] = 0;
    }
    console.log(maxNo, "==maxNo==")



  }

  userInfoArr: any = ['shyam baba 1', 'shyam baba 2', 'shyam baba 3']

  // addData(index: any) {
  //   let deleteArr = this.dynamicData.splice(index, 1);
  //   this.PropasalArr.push(deleteArr[0])
  // }
  // removeData(index: any) {
  //   let addArr = this.PropasalArr.splice(index, 1);
  //   this.dynamicData.push(addArr[0])
  // }

  getCheckBox(event: any, index: any) {
    let checkObj: any = {}
    let checkValue = event.checked
    checkObj['conditonCheck'] = checkValue;
    checkObj['indeValue'] = index;
    this.deleteValue(checkValue, checkObj, index)
  }

  deleteItems(index: any) {
    let indexFind = this.userInfoArr.indexOf(index);
    this.userInfoArr.splice(indexFind, 1)
    this.deleteValue(false, 'i', index)
  }
  deleteValue(event: any, checkObj: any, index: any) {
    if (event && checkObj != 'i') {
      this.checkArr.push(checkObj);
    }
    else {
      let indexFind = this.checkArr.findIndex((ele: any) => ele?.indeValue == index);
      this.checkArr.splice(indexFind, 1)
    }
  }

  passData(countryName: any) {
    this.particularCountry = [];
    let uniqueCountry = this.countryData.find((ele: any) => ele.name == countryName.value)
    uniqueCountry != undefined ? this.particularCountry.push(uniqueCountry?.cities) : ''
    console.log(this.particularCountry[0], "====");

  }





}
