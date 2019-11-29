import {Component, OnInit, Input} from '@angular/core';
import {SpaConfigService} from '../services/spa-config.service';

@Component({
  selector: 'icon-bar',
  templateUrl: './icon-bar.component.html',
  styleUrls: ['./icon-bar.component.sass']
})
export class IconBarComponent implements OnInit {
  showLoader: boolean
  @Input() showIcons
  userInfo: string

  constructor(private spaConfigService: SpaConfigService) {
  }

  ngOnInit() {
    this.showLoader = false
  }

}
