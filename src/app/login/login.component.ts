import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [ `
  body{
    backgound:rgba(0,0,0,1)
  }
  .login-form {
    max-width: 300px;
    width: 300px;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
  }

  .login-form-forgot {
    float: right;
  }

  .login-form-button {
    width: 100%;
  }
`
]
})
export class LoginComponent implements OnInit {
  validateForm:FormGroup
  constructor(
    private router:Router,
    private fb:FormBuilder
  ) { }

  ngOnInit() {
    this.formInit();
  }

  formInit():void{
    this.validateForm = this.fb.group({
      userName:[null,[Validators.required]],
      password:[null,[Validators.required]],
      remember:[true]
    })
  }

  submitForm(value):void{
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[ i ].markAsDirty();
      this.validateForm.controls[ i ].updateValueAndValidity();
    }
    if(this.validateForm.invalid) return ;
    this.router.navigate(["/index"])
  }
}
