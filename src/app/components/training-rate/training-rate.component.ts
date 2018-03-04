import {Component, Input, OnInit} from '@angular/core';
import {TrainingService} from '../../services/training.service';

@Component({
  selector: 'app-training-rate',
  templateUrl: './training-rate.component.html',
  styleUrls: ['./training-rate.component.scss']
})
export class TrainingRateComponent implements OnInit {

  @Input() training;

  rateMapping = {
    1: 'rateOne',
    2: 'rateTwo',
    3: 'rateThree',
    4: 'rateFour',
    5: 'rateFive',
  };
  editMode = false;
  total: number;
  rateSubmitted = false;
  submittedRate: number;

  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.total = this.training.rateOne + this.training.rateTwo +
      this.training.rateThree + this.training.rateFour + this.training.rateFive;
  }

  giveRate() {
    this.editMode = true;
  }

  submitRate() {
    this.rateSubmitted = true;
    this.training[this.rateMapping[this.submittedRate]]++;
    this.trainingService.updateTraining(this.training).subscribe();
  }
}
