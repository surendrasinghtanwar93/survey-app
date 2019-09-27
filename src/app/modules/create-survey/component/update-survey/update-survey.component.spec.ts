import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSurveyComponent } from './update-survey.component';

describe('UpdateSurveyComponent', () => {
  let component: UpdateSurveyComponent;
  let fixture: ComponentFixture<UpdateSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
