import { Component, VERSION } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  loginForm = new FormGroup({
    user: new FormControl(''),
    password: new FormControl('')
  })

  loginUser(){
    console.warn(this.loginForm.value);
  }
}
