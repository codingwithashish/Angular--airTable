import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { concatAll, from, map, toArray } from 'rxjs';
import { HttpServiceService } from 'src/appService/http-service.service';
import { ProposelComponent } from '../proposel/proposel.component';

@Component({
  selector: 'app-allproposedtalents',
  templateUrl: './allproposedtalents.component.html',
  styleUrls: ['./allproposedtalents.component.scss']
})
export class AllproposedtalentsComponent {
  userId: any;
  clientInfo: any;
  loader1 = false;
  errorMsg: any;
  dynamicData: any = [];
  loader2 = false;
  loader3 = false;
  proTalArr: any = [];
  PropasalTalentArrInfo: any = [];
  talentsIdArr: any = [];
  talentArrOfProp: any = [];
  modifyArr: any = [];
  constructor(private httpService: HttpServiceService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit() {
    this.route.params.subscribe((res: any) => {
      this.userId = res?.id;
    })
    if (this.userId) {
      this.loader1 = true
      this.httpService.getOneUser(this.userId).pipe(map(res => res?.fields)).subscribe(res => {
        this.clientInfo = res;
        this.loader1 = false;
        this.proTalArr = from(this.clientInfo?.Proposal_Talents);
        this.getProposalTalentData();
      }, error => {
        this.loader1 = false;
        this.errorMsg = 'Data Not Found'
      })
    }
    this.getTalentsData();
  }
  getProposalTalentData() {
    if (this.clientInfo) {
      this.loader3 = true
      this.proTalArr.pipe(map(res => this.httpService.getProposalsTalents(res)), concatAll(), map((res: any) => res.fields), toArray()).subscribe((res: any) => {
        this.loader3 = false
        this.PropasalTalentArrInfo = res;
        this.talentsIdArr = from(this.PropasalTalentArrInfo);
        this.talentsIdArr.pipe(map((res: any) => this.httpService.getTalentDataId(res.Talent[0])), concatAll(), map((res: any) => res.fields), toArray()).subscribe((res: any) => {
          this.talentArrOfProp = res;
        })
      })
    }
  }
  getTalentsData() {
    this.loader2 = true;
    this.httpService.getData().pipe(map((res: any) => res?.records.map((res: any) => res?.fields))).subscribe(res => {
      this.dynamicData = res;
      this.loader2 = false;
    })
  }
}
