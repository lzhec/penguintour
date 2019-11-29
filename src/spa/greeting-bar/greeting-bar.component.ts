import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {SpaConfigService} from '../services/spa-config.service';
import {visibility, fader} from '../services/animations.service';

@Component({
  selector: 'greeting-bar',
  templateUrl: './greeting-bar.component.html',
  styleUrls: ['./greeting-bar.component.sass'],
  animations: [visibility, fader]
})
export class GreetingBarComponent implements OnInit {

  constructor(private spaConfigService: SpaConfigService, private location: Location) {
  }

  ngOnInit() {
  }

}
