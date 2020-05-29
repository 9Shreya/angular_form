import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-normal-html-form',
  templateUrl: './normal-html-form.component.html',
  styleUrls: ['./normal-html-form.component.css']
})
export class NormalHtmlFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  topics=['Angular','React','Vue']
}
