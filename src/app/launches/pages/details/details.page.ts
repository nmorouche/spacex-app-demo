import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Launch } from '../../Models/Launch';
import { LaunchesService } from '../../services/launches.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit, AfterViewInit {
  launch: Launch;
  missionName: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location) {
  }

  ngOnInit() {
    console.log(this.route.snapshot);
    this.launch =  this.route.snapshot.data.launch;
  }

  ngAfterViewInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
