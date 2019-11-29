import {Component, Input, OnInit} from '@angular/core';
import { DescItem } from '../services/about-us-desc.service';

@Component({
  selector: 'spa-about-us-desc-item',
  templateUrl: './about-us-desc-item.component.html',
  styleUrls: ['./about-us-desc-item.component.sass']
})
export class AboutUsDescItemComponent implements OnInit {
  @Input() item: DescItem

  constructor() { }

  ngOnInit() {
  }

}
