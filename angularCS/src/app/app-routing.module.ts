import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { ResultsComponent } from './results/results.component';
import { TriviaComponent } from './trivia/trivia.component';


const routes: Routes = [

  { path: '', component: DashboardComponent, children: []},
  { path: 'newQuestion', pathMatch: 'full', component: NewQuestionComponent, children:[] },
  { path: 'triviaGame', pathMatch: 'full', component: TriviaComponent, children: []},

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
