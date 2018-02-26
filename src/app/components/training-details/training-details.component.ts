import {Component, OnInit, Input} from '@angular/core';
import {Training} from '../../models/training';
import {ActivatedRoute} from '@angular/router';
import {TrainingService} from '../../services/training.service';

@Component({
  selector: 'app-training-details',
  templateUrl: './training-details.component.html',
  styleUrls: ['./training-details.component.scss']
})
export class TrainingDetailsComponent implements OnInit {
  training: Training;

  constructor(private route: ActivatedRoute, private trainingService: TrainingService) {
  }

  ngOnInit() {
    this.getTraining();
  }

  getTraining(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.trainingService.getTraining(id)
      .subscribe(training =>  this.training = training);
  }

  addComment(content) {
    this.training.comments.push({
        author: 'Nieznany',
        content: content,
    });
  }
}
