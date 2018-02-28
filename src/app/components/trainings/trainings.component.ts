import {Component, OnInit} from '@angular/core';
import {Training} from '../../models/training';
import {TrainingService} from '../../services/training.service';
import 'rxjs/add/operator/filter';

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
    console.log(this.nameFilter);
    this.trainingService.getTrainings({name: this.nameFilter})
      .subscribe(trainings => this.trainings = trainings);
  }
}
