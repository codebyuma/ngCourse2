import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

@Component({
  selector: 'my-form',
  templateUrl: 'app/my-form.component.html',
  directives: [FORM_DIRECTIVES]
})
export class MyForm {
  
  formValue: any;
  
  onSubmit() {
    this.formValue = 'Form submitted!';
  }
}