import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AppDataService} from '../services/app-data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent implements OnInit, AfterViewInit {

  constructor(private appDataService: AppDataService) { }

  public ngAfterViewInit(): void {
    this.appDataService.loadExternalResources('comments').subscribe(() => {
      // const attr = 'height: 142px; border: 0px none !important; padding: 0px !important; display: block !important; width: 100% !important;max-width: 700px !important;'
      // const attr = 'padding: 0; !important'
      // console.log(document.getElementsByClassName('SLT-SearchForm-transparent__container')[0])
      // document.getElementsByClassName('SLT-SearchForm-transparent__container SLT-SearchForm-transparent__desktopView')[0].setAttribute('style', attr)
      console.log('Скрипт комментариев загрузился')
    })
  }

  ngOnInit() {
  }

}
