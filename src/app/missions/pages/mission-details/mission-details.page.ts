import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Mission } from '../../models/mission.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.page.html',
  styleUrls: ['./mission-details.page.scss'],
})
export class MissionDetailsPage implements OnInit {
  mission: Mission;

  constructor(
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.mission = this.route.snapshot.data.mission;
  }

  goBack() {
    this.location.back();
  }
}
