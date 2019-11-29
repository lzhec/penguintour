import { Component, OnInit } from '@angular/core';
import {MenuItem, MenuService} from '../services/menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'spa-footer',
  templateUrl: './spa-footer.component.html',
  styleUrls: ['./spa-footer.component.sass']
})
export class SpaFooterComponent implements OnInit {

  constructor(private menuService: MenuService, private router: Router) { }

  ngOnInit() {
  }

}
