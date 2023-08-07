import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { HttpServiceService } from 'src/appService/http-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorCheck: any;
  loderShow = false;
  constructor(private fb: FormBuilder, private httpService: HttpServiceService, private router: Router) {
    this.registerForm = this.fb.group({
      // userName: ['', [Validators.required, Validators.pattern(/[\S]/g)]],
      userEmail: ['', [Validators.required, Validators.pattern(/[\S]/g)]],
      userPswd: ['', [Validators.required, Validators.pattern(/[\S]/g)]],
    })
  }
  ngOnInit() {
  }

  sendData(formValue: any) {
    this.loderShow = true
    let userInfo = {
      email: this.registerForm.get('userEmail')?.value,
      password: this.registerForm.get('userPswd')?.value
    }
    this.httpService.postData(userInfo?.email).pipe(map((res: any) => res?.records.map((res: any) => res))).subscribe(res => {
      res.length == 0 ? (this.errorCheck = "Invalid credentials") && (this.loderShow = false) : ''
      if (res.length != 0) {
        this.loderShow = false;
        sessionStorage.setItem('_0uxipzye', res[0]?.id)
        res[0]?.fields?.Password == userInfo?.password ? this.router.navigate(['/talent']) : this.errorCheck = "Password Incorrect";
      }
    })
  }
}
