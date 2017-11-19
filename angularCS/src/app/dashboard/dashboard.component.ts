import { Component, OnInit } from '@angular/core'; 
import { Name } from './../name';
import { TriviaService } from './../trivia.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name: Name = new Name();
  constructor(private _triviaServices: TriviaService) { }

  ngOnInit() {
  }

  logName(){

    this._triviaServices.logName(this.name);
    this.name = new Name();

  }

}
