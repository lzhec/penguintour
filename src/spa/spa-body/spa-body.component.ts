import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {AppDataService} from '../../app/services/app-data.service';
import {visibility, fader, slider} from '../services/animations.service';

@Component({
  selector: 'spa-body',
  templateUrl: './spa-body.component.html',
  styleUrls: ['./spa-body.component.sass'],
  animations: [visibility, fader, slider]
})
export class SpaBodyComponent implements OnInit, AfterViewInit {
  background: any

  constructor(private router: Router, private appDataService: AppDataService) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        switch(event.url) {
          case '/':
            this.background = 'url("../../assets/img/beach2.jpg")'
            break
          case '/home':
            this.background = 'url("../../assets/img/beach2.jpg")'
            break
          case '/aboutUs':
            this.background = 'url("../../assets/img/travel9.jpg")'
            break
          case '/triedTours':
            this.background = 'url("../../assets/img/beach3.jpg")'
            break
          case '/searchTour':
            this.background = 'url("../../assets/img/beach7.jpg")'
            break
          case '/hotTours':
            this.background = 'url(../../assets/img/egypt3.jpg)'
            break
          case '/contacts':
            this.background = 'url("../../assets/img/beach11.jpg")'
            break
        }
      }
    })
  }

  ngOnInit() {
  }

  public ngAfterViewInit(): void {
    this.appDataService.loadExternalResources('callback').subscribe(() => {
      console.log('Скрипт электронной почты загрузился')
    })
  }

}
