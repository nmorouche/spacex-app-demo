import { Component, OnInit } from '@angular/core';
import { Launch } from '../../models/launch';
import { LaunchesService } from '../../services/launches.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-next',
  templateUrl: './next.page.html',
  styleUrls: ['./next.page.scss'],
})
export class NextPage implements OnInit {
  nextLaunch$: Observable<Launch>;

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.nextLaunch$ = this.launchesService.getNextLaunch();
  }

}
