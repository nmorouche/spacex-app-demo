import { Component, OnInit } from '@angular/core';
import { RocketService } from '../services/rocket.service';
import { Rocket } from '../Models/rocket.model';
import { Observable } from 'rxjs';
import { NgProgress } from '@ngx-progressbar/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
  animations: [
    trigger('fadeIn', [
      // route 'enter' transition
      transition(':enter', [
          // css styles at start of transition
          style({ opacity: 0 }),
          // animation and styles at end of transition
          animate('.4s', style({ opacity: 1 }))
      ]),
  ])
  ]
})
export class Tab1Page implements OnInit {
  rockets: Rocket[];
  observableRockets: Observable<Rocket[]>;

  constructor(private rocketService: RocketService) { }

  ngOnInit() {
    this.rocketService.getRockets().subscribe(result => {
      this.rockets = result;
    });

    setTimeout(() => {
      this.observableRockets = this.rocketService.getRockets();
    },
      2000);
  }

  buttonClick(rocketId: string) {
    console.log(rocketId);
  }
}
