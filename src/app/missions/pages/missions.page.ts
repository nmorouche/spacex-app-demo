import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.page.html',
  styleUrls: ['./missions.page.scss'],
})
export class MissionsPage implements OnInit {
  missionId = 'F3364BF';

  constructor(private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
  }

  openLink(link: string) {
    this.inAppBrowser.create(link, '_system');
  }
}
