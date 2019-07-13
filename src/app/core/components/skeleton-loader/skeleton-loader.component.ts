import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent implements OnInit {
  @Input() items: number;
  @Input() text: number;
  @Input() animated: boolean;
  constructor() { }

  ngOnInit() {
  }

}
