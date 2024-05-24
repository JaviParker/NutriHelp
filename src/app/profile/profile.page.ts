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
  name: any | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.email = this.dataservice.getGlobalVariable();
    this.dataservice.setGlobalVariable(this.email);
    localStorage.setItem('selectedGoal', 'lose');
  }

  saveGoal(goal: string) {
    localStorage.setItem('selectedGoal', goal);
  }

  saveAllergies(checked: boolean, allergy: string) {
    if (checked) {
      // Si el checkbox está activado, guardar la alergia en localStorage
      localStorage.setItem("allergy", "libre de gluten");
    } else {
      // Si el checkbox está desactivado, eliminar la alergia de localStorage
      localStorage.removeItem("allergy");
    }
  }

  saveName(){
    localStorage.setItem("name",this.name);
  }
}
