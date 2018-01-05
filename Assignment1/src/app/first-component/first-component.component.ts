// component created with cmd ng generate component [name]
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
 /**Public variable */
  title : string;
  name: string;

  constructor() { 
  }

  ngOnInit() {
    /** Assign values to the variable after OnInit */
    this.title = "And the Winner is ...";
    this.name = "Sreelatha";
  }

}
