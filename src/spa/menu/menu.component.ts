import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { ScreenService } from '../services/screen.service';
import {fader, visibility, visibilityPopup} from '../services/animations.service';

@Component({
  selector: 'spa-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
  animations: [visibility, visibilityPopup, fader]
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService, private screenService: ScreenService) { }

  ngOnInit() {
  }

}
