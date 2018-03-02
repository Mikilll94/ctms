import {Component, OnInit, Input} from '@angular/core';
import {Training} from '../../models/training';
import {ActivatedRoute} from '@angular/router';
import {TrainingService} from '../../services/training.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {
  training: Training;
  editMode = false;
  rateSubmitted = false;
  totalRate: number;

  constructor(private route: ActivatedRoute, private trainingService: TrainingService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getTraining();
  }

  getTraining(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.trainingService.getTraining(id)
      .subscribe(training => {
        this.training = training;
        this.totalRate = Object.values(training.rate).reduce((p, c) => p + c, 0);
      });
  }

  giveRate() {
    this.editMode = true;
  }

  submitRate() {
    this.rateSubmitted = true;
  }

  signForTraining(content) {
    this.modalService.open(content);
  }
}
