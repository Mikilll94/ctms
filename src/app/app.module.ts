import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {TrainingDetailsComponent} from './components/training-details/training-details.component';
import {TrainingsComponent} from './components/trainings/trainings.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './helpers/in-memory-data-service';
import {AppRoutingModule} from './app-routing.module';
import {TrainingService} from './services/training.service';
import {CommentsComponent} from './components/comments/comments.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommentService} from './services/comment.service';
import {UserService} from './services/user.service';
import {EnrollmentService} from './services/enrollment.service';
import { TrainingRateComponent } from './components/training-rate/training-rate.component';
import { TrainingSearchComponent } from './components/training-search/training-search.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    TrainingDetailsComponent,
    TrainingsComponent,
    CommentsComponent,
    TrainingRateComponent,
    TrainingSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    NgbModule.forRoot()
  ],
  providers: [TrainingService, CommentService, UserService, EnrollmentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
