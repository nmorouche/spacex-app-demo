import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Launch } from '../../Models/Launch';
import { LaunchesService } from '../../services/launches.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.page.html',
  styleUrls: ['./upcoming.page.scss'],
})
export class UpcomingPage implements OnInit, AfterViewInit {
  upcomingLaunches$: Observable<Launch[]>;

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.upcomingLaunches$ = this.launchesService.getUpcomingLaunches();
  }
}
