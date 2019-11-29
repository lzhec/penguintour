import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { MenuService } from '../services/menu.service';
// import {slider, transformer, fader, stepper} from '../services/animations.service';
import {fader, slider} from '../services/animations.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'spa-content',
  templateUrl: './spa-content.component.html',
  styleUrls: ['./spa-content.component.sass'],
  animations: [fader, slider]
})
export class SpaContentComponent implements OnInit {

  constructor(private screenService: ScreenService, private menuService: MenuService) { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }

}
