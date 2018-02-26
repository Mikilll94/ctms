import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './components/homepage/homepage.component';
import {TrainingDetailsComponent} from './components/training-details/training-details.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'szkolenia', component: HomepageComponent },
  { path: 'szczegoly/:id', component: TrainingDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
