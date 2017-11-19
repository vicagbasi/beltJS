import { Component, OnInit } from '@angular/core';
import { TriviaService } from './../trivia.service';
import { Question } from './../question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  question: Question = new Question();
  constructor(private _triviaServices: TriviaService) { }

  ngOnInit() {
  }
  addQuestion(){
    this._triviaServices.addQuestion(this.question)
    this.question = new Question();

  }

}
