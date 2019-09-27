import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'input-box-field',
  templateUrl: './input-box-field.component.html',
  styleUrls: ['./input-box-field.component.css']
})
export class InputBoxFieldComponent implements OnInit, AfterViewInit, AfterViewInit {

  @Input()
  fieldConfig: Element;
  @Input()
  subSectionFormRef: FormGroup;
  shouldRender = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
}
