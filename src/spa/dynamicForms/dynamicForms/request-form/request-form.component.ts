import {Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges} from '@angular/core';
import {Location} from '@angular/common';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {RequestFieldInput} from '../../request-field-interface';
import {fader, visibility, visibilityPopup} from '../../../services/animations.service';

@Component({
  selector: 'spa-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.sass'],
  animations: [visibility, visibilityPopup, fader]
})
export class RequestFormComponent implements OnInit, OnChanges {
  @Input() vm: any
  @Input() vmDefinition: Array<RequestFieldInput>
  // @Input() operation: string
  @Input() errorMessage: string
  @Input() successMessage: string
  @Output() create: EventEmitter<any> = new EventEmitter()

  form: FormGroup
  status: string
  submitted = false
  vmCopy: any

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) { }

  clearForm() {
    const group ={}
    this.vmCopy = Object.assign({}, this.vm)
    this.vmDefinition.forEach(field => {
      group[field.key] = field.required ?
        ((field.type === 'email') ? new FormControl(this.vmCopy[field.key], [Validators.required, Validators.email]) :
        (field.type === 'tel') ? new FormControl(this.vmCopy[field.key], [Validators.required, Validators.minLength(5), Validators.maxLength(12)]) :
        new FormControl(this.vmCopy[field.key], Validators.required)) :
        ((field.type === 'email') ? new FormControl(this.vmCopy[field.key], Validators.email) :
        (field.type === 'tel') ? new FormControl(this.vmCopy[field.key], [Validators.minLength(5), Validators.maxLength(12)]) :
        new FormControl(this.vmCopy[field.key]))
    });
    this.form = new FormGroup(group)
  }

  ngOnInit() {
    this.clearForm()
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.status === 'waiting') {
      this.status = '';
    }
  }

  onCreate() {
    this.submitted = true;
    if (this.form.valid) {
      this.status = 'waiting';
      this.create.emit(this.form.value);
    }
  }

}
