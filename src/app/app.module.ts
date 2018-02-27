import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {FooterComponent} from './components/footer/footer.component';
import {HomepageComponent} from './components/homepage/homepage.component';
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


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomepageComponent,
    NavbarComponent,
    TrainingDetailsComponent,
    TrainingsComponent,
    CommentsComponent,
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
  providers: [TrainingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
