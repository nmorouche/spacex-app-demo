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
  launch$: Observable<Launch>;
  missionName: string;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private launchesService: LaunchesService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const flightNumber = params.get('id');
      this.launch$ = this.launchesService.getLaunch(flightNumber);
      this.launch$.subscribe(launch => this.missionName = launch.mission_name);
    });
  }

  ngAfterViewInit(): void {
  }

  goBack() {
    this.location.back();
  }
}
