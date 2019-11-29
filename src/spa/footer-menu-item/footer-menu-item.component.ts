import {Component, Input, OnInit} from '@angular/core';
import {MenuItem, MenuService} from '../services/menu.service';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'spa-footer-menu-item',
  templateUrl: './footer-menu-item.component.html',
  styleUrls: ['./footer-menu-item.component.sass']
})
export class FooterMenuItemComponent implements OnInit {
  @Input() item: MenuItem
  isActiveRoute = false

  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit() {
    this.checkingActiveRoute(this.router.url)
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkingActiveRoute(event.url)
      }
    })
  }

  checkingActiveRoute(route: string): void {
    this.isActiveRoute = (route === this.item.route)
  }

}
