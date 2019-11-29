import { Component, OnInit } from '@angular/core';
import { visibility, fader } from '../../spa/services/animations.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass'],
  animations: [visibility, fader]
})
export class ContactsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
