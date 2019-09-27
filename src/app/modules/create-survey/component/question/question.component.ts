import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  questionForm;
  shouldRender = false;

  constructor() { }

  ngOnInit() {
    this.questionForm = new FormGroup({});
  }

}
