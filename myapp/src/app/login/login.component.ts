import { Component, OnInit } from '@angular/core';
import {RestoService} from '../resto.service';
import {FormGroup,  FormControl} from '@angular/forms'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(private resto: RestoService) { }
  login =new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
  }
  userLog()
  {
// console.warn(this.login.value)
  }

}
