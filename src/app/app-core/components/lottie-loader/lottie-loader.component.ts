import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lottie-loader',
  templateUrl: './lottie-loader.component.html',
  styleUrls: ['./lottie-loader.component.scss'],
})
export class LottieLoaderComponent implements OnInit {
  public lottieConfig: any;
  private anim: any;

  constructor() {
    this.lottieConfig = {
      path: 'assets/lottie-files/loading.json',
      autoplay: true,
      loop: true,
      renderer: 'canvas'
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
    this.anim.play();
  }

  ngOnInit() { }

}
