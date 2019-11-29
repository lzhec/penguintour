import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RequestFieldInput } from '../../spa/dynamicForms/request-field-interface';
import { Request } from '../services/request-interface';
import { AppDataService } from '../services/app-data.service';
import {visibility} from '../../spa/services/animations.service';

@Component({
  selector: 'app-request-tour',
  templateUrl: './request-tour.component.html',
  styleUrls: ['./request-tour.component.sass'],
  animations: [visibility]
})
export class RequestTourComponent implements OnInit {
  request: Request
  errorMessage: string
  isHide = true
  successMessage: string
  requestDefinitionInput: Array<RequestFieldInput> = [
    {
      key: 'name',
      type: 'string',
      label: 'Ваше имя',
      required: true
    },
    {
      key: 'email',
      type: 'email',
      label: 'E-mail',
      required: true
    },
    {
      key: 'tel',
      type: 'tel',
      label: 'Телефон',
      required: true
    },
    {
      key: 'comments',
      type: 'string',
      label: 'Ваши пожелания',
      required: false
    }
  ]

  constructor(private appDataService: AppDataService) { }

  toggleVisibility() {
    this.errorMessage = null
    if (this.isHide) {
      this.isHide = false
    } else this.isHide = true
  }

  ngOnInit() {
  }

  createRequest(event) {
    this.errorMessage = null
    this.appDataService.createRequest(event).subscribe(
      data => {
        this.errorMessage = null
        this.successMessage = 'Спасибо. Ваш запрос принят. Очень скоро мы свяжемся с вами.'
      },
      error => {
        this.successMessage = null
        this.errorMessage = ''
        for (let key in error.error) {
          if (key === 'email') error.error[key] = ['Введите валидный Email']
          this.errorMessage += error.error[key][0] + '. '
        }
      }
    )
  }
}
