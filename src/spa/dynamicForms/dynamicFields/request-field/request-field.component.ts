import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { RequestFieldInput } from '../../request-field-interface';

@Component({
  selector: 'spa-request-field',
  templateUrl: './request-field.component.html',
  styleUrls: ['./request-field.component.sass']
})
export class RequestFieldComponent implements OnInit {
  @Input() field: RequestFieldInput
  @Input() form: FormGroup
  @Input() submitted: boolean
  requiredErrorMessage: string
  emailErrorMessage: string
  numberErrorMessage: string
  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

  constructor() { }

  ngOnInit() {
  }

  checkError() {
    this.requiredErrorMessage = null
    this.emailErrorMessage = null
    this.numberErrorMessage = null

    if (this.form.get(this.field.key).hasError('required') && (this.submitted || this.form.get(this.field.key).touched))
      this.requiredErrorMessage = this.field.label + ' обязательно для заполнения'

    if (this.form.get(this.field.key).hasError('email') && (this.submitted || this.form.get(this.field.key).touched))
      this.emailErrorMessage = this.field.label + ' указан неверно'

    if ((this.form.get(this.field.key).hasError('minlength') || this.form.get(this.field.key).hasError('maxlength')) && (this.submitted || this.form.get(this.field.key).touched))
      this.numberErrorMessage = this.field.label + ' должен быть от 5 до 11 цифр'
  }

}
