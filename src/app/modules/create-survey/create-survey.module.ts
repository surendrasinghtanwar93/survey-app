import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './component/create/create.component';
import { NewSurveyComponent } from './component/new-survey/new-survey.component';
import { UpdateSurveyComponent } from './component/update-survey/update-survey.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { QuestionComponent } from './component/question/question.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [CreateComponent, NewSurveyComponent, UpdateSurveyComponent, QuestionComponent]
})
export class CreateSurveyModule { }
