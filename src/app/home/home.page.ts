import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  name = localStorage.getItem("name");

  constructor(
    private dataservice: DataService,
  ) { }

  ngOnInit() {
    console.log(localStorage.getItem("allergy"));
    
  }

}
