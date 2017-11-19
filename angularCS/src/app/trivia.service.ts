import { Injectable } from '@angular/core';
import { Result } from './result';
import { User } from './user';
import { Question } from './question';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
import { Name } from './name';


@Injectable()
export class TriviaService {
  results: Array<Result>;
  resultsObservable = new BehaviorSubject(this.results);
  questions: Array<Question>;
  questionsObservable = new BehaviorSubject(this.questions);
  loggedName: Name;
  nameObservable = new BehaviorSubject(this.loggedName);

  constructor(private _http: Http) {  }

  logName(LoggedIn: Name) {
    console.log(`${LoggedIn.name} has logged in`);
    this._http.post('/logName', LoggedIn).subscribe()


    // .subscribe(
    //   (userCreated) => {
    //     this.users.push(userCreated.json());
    //     this.usersObservable.next(this.users);
    //   }
    // );
  }


  addQuestion(question: Question) {
    console.log("==============ADDING QUESTION====================")
    console.log(question)
    this._http.post('/newQuestion', question).subscribe(

    )
  }
  // submitTrivia(ques)
  triviaTime() {
    this._http.get('/trivia-time').subscribe(
      (questions) => {
        this.questions = questions.json();
        this.questionsObservable.next(this.questions);
      },
      (errors) => {
        console.log(errors)
      }
    )
  }



}
