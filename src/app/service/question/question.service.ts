import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  questionSubject = new Subject();

  constructor() { }
}
