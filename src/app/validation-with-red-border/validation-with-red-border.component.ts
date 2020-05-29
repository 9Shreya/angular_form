import { Component, OnInit } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-validation-with-red-border',
  templateUrl: './validation-with-red-border.component.html',
  styleUrls: ['./validation-with-red-border.component.css']
})
export class ValidationWithRedBorderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
usenamemode=new User("","","","")
}
