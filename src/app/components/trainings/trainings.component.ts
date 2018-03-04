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

  constructor(private trainingService: TrainingService) {
  }

  getTrainings(): void {
    this.trainingService.getTrainings()
      .subscribe(trainings => this.trainings = trainings);
  }

  ngOnInit() {
    this.getTrainings();
  }

  updateFilters(filteredTrainings: Training[]) {
    this.trainings = filteredTrainings;
  }
}
