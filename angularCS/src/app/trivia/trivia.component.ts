import { Component, OnInit } from '@angular/core';
import { TriviaService } from './../trivia.service';
import { Result } from './../result';
import { Question } from './../question';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  questions: Array<Question>;
  constructor(private _triviaServices: TriviaService) { }

  ngOnInit() {
    this._triviaServices.questionsObservable.subscribe(
      (questions)=>{
        this.questions = questions;
      }
    )

  }

}
