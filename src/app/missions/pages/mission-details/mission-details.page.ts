import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.page.html',
  styleUrls: ['./mission-details.page.scss'],
})
export class MissionDetailsPage implements OnInit {
  value: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.value =  this.route.snapshot.data.mission;
  }

  goBack() {
    this.location.back();
  }
}
