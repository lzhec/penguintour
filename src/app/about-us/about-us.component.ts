import { Component, OnInit } from '@angular/core';
import { visibility, fader } from '../../spa/services/animations.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass'],
  animations: [visibility, fader]
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
