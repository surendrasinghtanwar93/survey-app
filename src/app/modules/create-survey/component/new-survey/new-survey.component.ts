import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';
import { QuestionService } from 'src/app/service/question/question.service';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.scss']
})
export class NewSurveyComponent implements OnInit, OnDestroy {

  surveyFormRef;
  shouldRender = false;
  surveyElementsForm;
  isAddQue = false;

  questionSub;

  // name = 'namexyz';

  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionSub = this.questionService.questionSubject.subscribe(data => {
      this.isAddQue = false;
    });

    this.surveyElementsForm = new FormArray([]);
    this.surveyFormRef = new FormGroup({
      name: new FormControl(),
      description: new FormControl(),
      code: new FormControl(''),
      surveyElements: this.surveyElementsForm
    });
    this.shouldRender = true;
  }

  ngOnDestroy() {

  }

  checkFrom() {
    console.log(this.surveyFormRef);
  }

  onAddQuestion() {
    this.isAddQue = true;
  }

}
