import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history-service.service';
import { Observable } from 'rxjs';
import { GroupedEvents } from '../../Models/event.model';
import { KeyValue } from '@angular/common';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-historical-events',
  templateUrl: './historical-events.page.html',
  styleUrls: ['./historical-events.page.scss'],
})
export class HistoricalEventsPage implements OnInit {
  groupedEvents$: Observable<GroupedEvents>;

  keyDescOrder = (a: KeyValue<number, string>, b: KeyValue<number, string>): number => {
    return a.key > b.key ? -1 : (b.key > a.key ? 1 : 0);
  }
  constructor(
    private historyService: HistoryService,
    private inAppBrowser: InAppBrowser) { }

  ngOnInit() {
    this.groupedEvents$ = this.historyService.getGroupedEvents();
  }

  openLink(link: string) {
    this.inAppBrowser.create(link, '_system');
  }

}
