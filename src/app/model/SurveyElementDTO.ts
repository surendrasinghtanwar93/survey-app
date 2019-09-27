import { SurveyOptionValueDTO } from './SurveyOptionValueDTO';
import { ElementTypeEnum } from '../enums/ElementTypeEnum';

export class SurveyElementDTO {
    id = 0;
    code = '';
    type: ElementTypeEnum = null;
    question = '';
    surveyCode = '';
    mandatory = '';
    ordering = 0;
    pageNumber = 0;
    surveyOptionValues: SurveyOptionValueDTO[] = [];
}
