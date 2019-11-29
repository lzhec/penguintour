import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { fader, visibility } from '../../spa/services/animations.service';

@Component({
  selector: 'app-search-tour',
  templateUrl: './search-tour.component.html',
  styleUrls: ['./search-tour.component.sass'],
  animations: [visibility, fader]
})
export class SearchTourComponent implements OnInit, AfterViewInit {

  constructor(private appDataService: AppDataService) { }

  public ngAfterViewInit(): void {
    this.appDataService.loadExternalResources('search-tour').subscribe(() => {
      console.log('Скрипт поиска туров загрузился')
    })
  }

  ngOnInit() {
  }

}
