import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TrainingService} from '../../services/training.service';

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

  constructor(private trainingService: TrainingService) {
  }

  ngOnInit() {
  }

  updateFilters() {
    this.trainingService.getTrainings({name: this.nameFilter})
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
      .subscribe(trainings => this.filtersUpdated.emit(trainings));
  }
}
