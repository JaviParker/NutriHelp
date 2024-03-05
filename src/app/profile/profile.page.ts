import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  email: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.email = this.dataservice.getGlobalVariable();
    this.dataservice.setGlobalVariable(this.email);
    console.log(this.email);
    
  }

}
