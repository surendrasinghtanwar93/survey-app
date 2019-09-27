import { Component, OnInit, AfterViewInit, ElementRef, AfterViewChecked, OnDestroy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'radio-button-field',
  templateUrl: './radio-button-field.component.html',
  styleUrls: ['./radio-button-field.component.css']
})
export class RadioButtonFieldComponent implements OnInit, AfterViewInit {

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
}
