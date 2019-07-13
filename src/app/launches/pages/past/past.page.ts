import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LaunchesService } from '../../services/launches.service';
import { Launch } from '../../models/launch';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-past',
  templateUrl: './past.page.html',
  styleUrls: ['./past.page.scss'],
})
export class PastPage implements OnInit, AfterViewInit {
  pastLaunches$: Observable<Launch[]>;

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.pastLaunches$ = this.launchesService.getPastLaunches()
  }
}
