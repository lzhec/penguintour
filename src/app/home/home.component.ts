import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { visibility, fader } from '../../spa/services/animations.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [visibility, fader]
})
export class HomeComponent implements OnInit, AfterViewInit {
  visibilityTours = true
  visibilityExcursions = false

  constructor(private appDataService: AppDataService) { }

  public ngAfterViewInit(): void {
    this.appDataService.loadExternalResources('home').subscribe(() => {
      // const attr = 'height: 142px; border: 0px none !important; padding: 0px !important; display: block !important; width: 100% !important;max-width: 700px !important;'
      // const attr = 'padding: 0; !important'
      // console.log(document.getElementsByClassName('SLT-SearchForm-transparent__container')[0])
      // document.getElementsByClassName('SLT-SearchForm-transparent__container SLT-SearchForm-transparent__desktopView')[0].setAttribute('style', attr)
      console.log('Скрипты поиска туров и турмометра загрузились')
    })
  }

  ngOnInit() {
  }

  toggleInvisible(event) {
    event.target.id === 'home-tab' ? (
      this.visibilityTours = true,
      this.visibilityExcursions = false
    ) : (
      this.visibilityTours = false,
      this.visibilityExcursions = true
    )
  }
}
