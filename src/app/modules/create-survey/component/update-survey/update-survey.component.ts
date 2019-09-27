import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-survey',
  templateUrl: './update-survey.component.html',
  styleUrls: ['./update-survey.component.scss']
})
export class UpdateSurveyComponent implements OnInit {
  surveyFormRef;

  constructor() { }

  ngOnInit() {
    this.surveyFormRef = new FormGroup({
      name: new FormControl()
    });
  }

}
