import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-modules',
  templateUrl: './forms-modules.component.html',
  styleUrls: ['./forms-modules.component.css'],
})
export class FormsModulesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  topic = ['angular', 'react', 'vue'];
}
