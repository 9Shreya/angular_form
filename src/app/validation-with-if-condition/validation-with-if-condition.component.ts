import { Component, OnInit } from '@angular/core';
import { userIfMsg } from './userIfMsg';

@Component({
  selector: 'app-validation-with-if-condition',
  templateUrl: './validation-with-if-condition.component.html',
  styleUrls: ['./validation-with-if-condition.component.css'],
})
export class ValidationWithIfConditionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  ifMsg = new userIfMsg('', '', '', '');
  topHasError = true;
  valitap(value) {
    if (value == 'default') {
      this.topHasError = true;
    } else {
      this.topHasError = false;
    }
  }
}
