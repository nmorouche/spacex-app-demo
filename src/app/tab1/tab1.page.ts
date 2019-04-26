import { Component, OnInit } from '@angular/core';
import { RocketService } from '../services/rocket.service';
import { Rocket } from '../Models/rocket.model';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  rockets: Rocket[];

  constructor(private rocketService: RocketService) { }

  ngOnInit() {
    this.rocketService.getRockets().subscribe(result => {
      this.rockets = result;
    });
  }

}
