import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.css']
})
export class CheckboxFieldComponent implements OnInit, AfterViewInit {
  @Input()
  fieldConfig: Element;
  @Input()
  subSectionFormRef: FormGroup;

  listOptions: { value: any; label: any }[] = [];
  shouldRender = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  get checkboxControl() {
    return this.subSectionFormRef.controls[''] as FormControl;
  }

  onSelect(value: string) {
    if (this.checkboxControl.value.includes(value)) {
      this.checkboxControl.value.splice(this.checkboxControl.value.indexOf(value), 1);
    } else {
      this.checkboxControl.value.push(value);
    }
  }
}
