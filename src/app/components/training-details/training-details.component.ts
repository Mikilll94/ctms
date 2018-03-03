import {Component, OnInit} from '@angular/core';
import {Training} from '../../models/training';
import {Comment} from '../../models/comment';
import {ActivatedRoute} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TrainingService} from '../../services/training.service';
import {CommentService} from '../../services/comment.service';
import {EnrollmentService} from '../../services/enrollment.service';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/observable/forkJoin';

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
  trainingId =  +this.route.snapshot.paramMap.get('id');
  comments: Comment[];
  usersEnrolled;
  editMode = false;
  rateSubmitted = false;
  total: number;
  submittedRate: number;

  constructor(private route: ActivatedRoute, private modalService: NgbModal,
              private trainingService: TrainingService, private commentService: CommentService,
              private enrollmentService: EnrollmentService) {
  }

  ngOnInit() {
    this.getTraining();
    this.getComments();
    this.getUsersEnrolled();
  }

  getTraining(): void {
    this.trainingService.getTraining(this.trainingId)
      .subscribe(training => {
        this.training = training;
        this.total = training.rateOne + training.rateTwo +
          training.rateThree + training.rateFour + training.rateFive;
      });
  }

  getComments() {
    this.commentService.getComments(this.trainingId)
      .subscribe(comments => this.comments = comments);
  }

  getUsersEnrolled() {
    this.enrollmentService.getUsersEnrolled(this.trainingId)
      .subscribe(users => this.usersEnrolled = users);
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
