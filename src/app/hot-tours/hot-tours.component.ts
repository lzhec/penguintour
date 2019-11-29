import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppDataService } from '../services/app-data.service';
import { visibility, fader } from '../../spa/services/animations.service';

@Component({
  selector: 'app-hot-tours',
  templateUrl: './hot-tours.component.html',
  styleUrls: ['./hot-tours.component.sass'],
  animations: [visibility, fader]
})
export class HotToursComponent implements OnInit, AfterViewInit {

  constructor(private appDataService: AppDataService) { }

  public ngAfterViewInit(): void {
    this.appDataService.loadExternalResources('hot-tours').subscribe(() => {
      console.log('Скрипт горящих туров загрузился')
    })
  }

  ngOnInit() {
  }

}
