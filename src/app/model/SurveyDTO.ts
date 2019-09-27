import { SurveyElementDTO } from './SurveyElementDTO';

export class SurveyDTO {
    code = '';
    name = '';
    description = '';
    surveyElements: SurveyElementDTO[] = [];
}
