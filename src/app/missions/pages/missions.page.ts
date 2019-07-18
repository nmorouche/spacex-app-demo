import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Mission } from '../models/mission.model';
import { MissionsService } from '../services/missions.service';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage implements OnInit {
  missions: Mission[];

  constructor(private inAppBrowser: InAppBrowser, private missionServices: MissionsService) { }

  ngOnInit() {
    this.missionServices.getAllMissions().subscribe(result => {
      this.missions = result;
      console.log(this.missions);
    });
  }
  doRefresh(event: any) {
    this.missionServices.getAllMissions().subscribe(result => {
      this.missions = result;
      console.log(this.missions);
      event.target.complete();
    });
  }

  openLink(link: string) {
    this.inAppBrowser.create(link, '_system');
  }
}
