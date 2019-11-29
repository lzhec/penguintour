import { Component, OnInit } from '@angular/core';
import { ScreenService } from '../services/screen.service';
import { MenuService } from '../services/menu.service';
import { Router, NavigationEnd } from '@angular/router';
import {fader, slider} from '../services/animations.service';

@Component({
  selector: 'spa-header',
  templateUrl: './spa-header.component.html',
  styleUrls: ['./spa-header.component.sass'],
  animations: [fader, slider]
})
export class SpaHeaderComponent implements OnInit {
  flagForIcons = true
  isFullWidth = false
  path: string

  constructor(private screenService: ScreenService, private menuService: MenuService, private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url !== '/' && event.url !== '/home') {
          this.isFullWidth = true
        } else {
          this.isFullWidth = false
        }
      }
    })
  }

  ngOnInit() {
  }

}
