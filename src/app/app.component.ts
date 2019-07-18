import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';
import { LaunchesService } from './launches/services/launches.service';
import { Launch } from './launches/models/launch.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  launch: Launch;
  selectedPath: string;
  text: any = {
    Year: 'Y',
    Month: 'M',
    Weeks: 'W',
    Days: 'D',
    Hours: 'H',
    Minutes: 'M',
    Seconds: 'S',
    MilliSeconds: 'MilliSeconds'
  };
  public pages = [
    {
      title: 'Launches',
      url: '/launches/next',
    },
    {
      title: 'Missions',
      url: '/missions',
    },
    {
      title: 'Rockets',
      url: '/rockets',
    },
    {
      title: 'Payloads',
      url: '/payloads',
    },
    {
      title: 'Cores',
      url: '/cores',
    },
    {
      title: 'Pads',
      url: '/pads',
    },
    {
      title: 'History',
      url: '/history',
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private launchesService: LaunchesService
  ) {
    this.initializeApp();
  }

  private initializeApp() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.launchesService.getNextLaunch().subscribe(result => {
      this.launch = result;
    });
  }

  setTimer(time: string) {
    let countDownDate = new Date(time).getTime();
    // Update the count down every 1 second
    let x = setInterval(function () {
      // Get todays date and time
      let now = new Date().getTime();
      // Find the distance between now and the count down date
      let distance = countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    }, 1000);
  }
}
