import {Component, OnInit} from '@angular/core';
import {Training} from '../../models/training';
import {TrainingService} from '../../services/training.service';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  trainings: Training[];
  isCollapsed = true;
  nameFilter;
  dateFromFilter;
  dateToFilter;

  constructor(private trainingService: TrainingService) {
  }

  getTrainings(): void {
    this.trainingService.getTrainings()
      .subscribe(trainings => this.trainings = trainings);
  }

  ngOnInit() {
    this.getTrainings();
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
      .subscribe(trainings => this.trainings = trainings);
  }
}
