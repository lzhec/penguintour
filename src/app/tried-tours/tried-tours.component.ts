import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { fader, visibility } from '../../spa/services/animations.service';

@Component({
  selector: 'app-tried-tours',
  templateUrl: './tried-tours.component.html',
  styleUrls: ['./tried-tours.component.sass'],
  animations: [visibility, fader]
})
export class TriedToursComponent implements OnInit, AfterViewInit {

  constructor(private appDataService: AppDataService) { }

  public ngAfterViewInit(): void {
    this.appDataService.loadExternalResources('tried-tours').subscribe(() => {
      console.log('Скрипт проверенных туров загрузился')
    })
  }

  ngOnInit() {
    // document.body.classList.remove('background-home', 'background-aboutUs', 'background-searchTour', 'background-hotTours', 'background-contacts')
    // document.body.classList.add('background-triedTours')
  }

}
