import { CreateSurveyModule } from './create-survey.module';

describe('CreateSurveyModule', () => {
  let createSurveyModule: CreateSurveyModule;

  beforeEach(() => {
    createSurveyModule = new CreateSurveyModule();
  });

  it('should create an instance', () => {
    expect(createSurveyModule).toBeTruthy();
  });
});
