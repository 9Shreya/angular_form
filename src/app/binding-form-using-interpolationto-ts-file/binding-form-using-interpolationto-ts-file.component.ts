import { Component, OnInit } from '@angular/core';
import {user} from './user'
@Component({
  selector: 'app-binding-form-using-interpolationto-ts-file',
  templateUrl: './binding-form-using-interpolationto-ts-file.component.html',
  styleUrls: ['./binding-form-using-interpolationto-ts-file.component.css']
})
export class BindingFormUsingInterpolationtoTsFileComponent implements OnInit {
topics=['angular','react','vui']
  constructor() { }

  ngOnInit(): void {
  }
 userM=new user("rob",'rob@hav',5418954,"",'moring',true)
}
