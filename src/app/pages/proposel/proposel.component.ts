import { Component, ElementRef, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { concatAll, from, fromEvent, map, mergeAll, Observable, take, toArray } from 'rxjs';
import { HttpServiceService } from 'src/appService/http-service.service';

@Component({
  selector: 'app-proposel',
  templateUrl: './proposel.component.html',
  styleUrls: ['./proposel.component.scss']
})
export class ProposelComponent {
  proposedId: any;
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
  modalRef?: BsModalRef;
  resStatus: any;
  resLoader = false;
  talentId: any;
  deleteId: any;
  config1 = {
    keyboard: true,
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-dialog',
    id: 1,
  }
  @ViewChild('statusModal')
  statusModal!: TemplateRef<any>;
  @ViewChild('removeBtn')
  removeBtn!: ElementRef<any>;
  constructor(private httpService: HttpServiceService, private router: Router, private route: ActivatedRoute, private bsModalService: BsModalService,) { }
  ngOnInit() {
    this.route.params.subscribe((res: any) => {
      this.proposedId = res?.id;
    })
    this.getProposalData()
    this.getTalentsData();
  }
  getProposalData() {
    if (this.proposedId) {
      this.loader1 = true
      this.httpService.getOneUser(this.proposedId).pipe(map(res => res?.fields)).subscribe(res => {
        this.clientInfo = res;
        this.loader1 = false;
        this.proTalArr = from(this.clientInfo?.Proposal_Talents);
        this.getProposalTalentData();
      }, error => {
        this.loader1 = false;
        this.errorMsg = 'Data Not Found'
      })
    }
  }
  getProposalTalentData() {
    if (this.clientInfo) {
      this.loader3 = true
      this.proTalArr.pipe(map(res => this.httpService.getProposalsTalents(res)), concatAll(), toArray()).subscribe((res: any) => {
        this.loader3 = false
        this.PropasalTalentArrInfo = res;
        this.talentsIdArr = from(this.PropasalTalentArrInfo);
        this.talentsIdArr.pipe(map((res: any) => this.httpService.getTalentDataId(res.fields.Talent[0])), concatAll(), map((res: any) => res.fields), toArray()).subscribe((res: any) => {
          this.talentArrOfProp = res;
          if (this.talentArrOfProp?.length != 0) this.filterArr();
        })
      })
    }
  }
  getTalentsData() {
    this.loader2 = true;
    this.httpService.getData().subscribe(res => {
      this.dynamicData = res?.records;
    })
  }
  filterArr() {
    this.talentArrOfProp.filter((ele: any) => {
      let indxValue = this.dynamicData.findIndex((ele1: any) => ele1?.fields?.Name == ele?.Name);
      this.dynamicData.splice(indxValue, 1);
    });
    this.modifyArr = [...this.dynamicData];
    this.loader2 = false;
  }

  addTalents(talentId: any) {
    this.talentId = talentId;
    this.resLoader = true;
    let infoData: any = {
      fields: {
        Proposal: [this.proposedId],
        Talent: [talentId],
        Status: "Offered"
      }
    }
    if (this.proposedId && talentId) {
      this.httpService.postDataByBody(infoData).subscribe(res => {
        this.refreshData(res, 'Successfully Store Data');
      }, error => {
        this.resStatus = 'Something Went Wrong! Please Try Again';
        this.resLoader = false;
        this.modalRef = this.bsModalService.show(this.statusModal, this.config1)
      })
    }
  }
  removeData(deleteId: any) {
    this.deleteId = deleteId
    this.resLoader = true
    // this.httpService.deleteData(deleteId).subscribe(res => {
    //   if (res?.deleted) this.refreshData(res, 'Successfully Data Delete')
    // }, error => {
    //   this.resLoader = false;
    //   this.resStatus = 'Something Went Wrong! Please Try Again';
    //   this.modalRef = this.bsModalService.show(this.statusModal, this.config1)
    // })
  }

  refreshData(res: any, statusMsg: any) {
    res ? this.modalRef = this.bsModalService.show(this.statusModal, this.config1) : ''
    this.getProposalData();
    this.getTalentsData();
    this.resLoader = false;
    this.resStatus = statusMsg
  }
  ngAfterViewInit() {
    // if (this.PropasalTalentArrInfo.length > 0) {
    //   console.log("kdkdkdkdkdkdkdk")
    //   fromEvent(this.removeBtn.nativeElement, 'click').subscribe((res: any) => {
    //     console.log(res, "==res==")
    //   })
    // }
  }

}
