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
  rateMapping = {
    1: 'rateOne',
    2: 'rateTwo',
    3: 'rateThree',
    4: 'rateFour',
    5: 'rateFive',
  };
  training: Training;
  editMode = false;
  rateSubmitted = false;
  total: number;
  submittedRate: number;

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
        this.total = training.rateOne + training.rateTwo +
          training.rateThree + training.rateFour + training.rateFive;
      });
  }

  giveRate() {
    this.editMode = true;
  }

  submitRate() {
    this.rateSubmitted = true;
    this.training[this.rateMapping[this.submittedRate]]++;
    this.trainingService.updateTraining(this.training).subscribe();
  }

  signForTraining(content) {
    this.modalService.open(content);
  }
}
