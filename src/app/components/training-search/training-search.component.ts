import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TrainingService} from '../../services/training.service';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-training-search',
  templateUrl: './training-search.component.html',
  styleUrls: ['./training-search.component.scss']
})
export class TrainingSearchComponent implements OnInit {

  @Input() trainings;
  @Output() filtersUpdated = new EventEmitter();
  isCollapsed = true;
  nameFilter;
  dateFromFilter;
  dateToFilter;
  loadingTrainings = false;
  private nameFilterSubject = new Subject<string>();


  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.nameFilterSubject
      .debounceTime(300)
      .switchMap((nameFilter: string) => this.trainingService.getTrainings(nameFilter))
      .map(trainings => trainings.filter(training => {
        if (this.dateFromFilter && this.dateToFilter) {
          return training.date >= this.dateFromFilter && training.date <= this.dateToFilter;
        } else if (this.dateFromFilter) {
          return training.date >= this.dateFromFilter;
        } else if (this.dateToFilter) {
          return training.date <= this.dateToFilter;
        } else {
          return true;
        }
      }))
      .subscribe(trainings => {
        this.filtersUpdated.emit(trainings);
        this.loadingTrainings = false;
      });
  }

  updateFilters() {
    this.loadingTrainings = true;
    this.nameFilterSubject.next(this.nameFilter);
  }
}
