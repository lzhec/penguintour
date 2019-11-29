import { Component, OnInit } from '@angular/core';
import { AboutUsDescService } from '../services/about-us-desc.service';

@Component({
  selector: 'spa-about-us-desc',
  templateUrl: './about-us-desc.component.html',
  styleUrls: ['./about-us-desc.component.sass'],
})
export class AboutUsDescComponent implements OnInit {

  constructor(private aboutUsDescService: AboutUsDescService) { }

  ngOnInit() {
  }

}
