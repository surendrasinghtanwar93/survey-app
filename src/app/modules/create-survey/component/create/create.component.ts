import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  isNewSurvey = false;
  isOldSurvey = false;

  constructor() { }

  ngOnInit() {
  }

  onCreate() {
    this.isNewSurvey = true;
  }

  onUpdate() {
    this.isOldSurvey = true;
  }

}
