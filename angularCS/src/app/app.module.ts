import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TriviaService } from './trivia.service';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { ResultsComponent } from './results/results.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { TriviaComponent } from './trivia/trivia.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { QuestionComponent } from './question/question.component';


@NgModule({
  declarations: [
    AppComponent,
    ResultsComponent,
    NewQuestionComponent,
    TriviaComponent,
    DashboardComponent,
    UserComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [TriviaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
