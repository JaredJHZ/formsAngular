import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  user = {
    password:'',
    email:'example@example.com'
  }
  constructor() { }

  ngOnInit() {
  }

  save(forma:NgForm):void{
    console.log(this.user);
    console.log(forma.value);
  }

}
