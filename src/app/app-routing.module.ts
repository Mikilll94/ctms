import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TrainingDetailsComponent} from './components/training-details/training-details.component';
import {TrainingsComponent} from './components/trainings/trainings.component';

const routes: Routes = [
  {path: '', component: TrainingsComponent},
  {path: 'szkolenia', component: TrainingsComponent},
  {path: 'szczegoly/:id', component: TrainingDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
