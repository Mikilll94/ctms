import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comments;
  commentAdded = false;

  constructor() { }

  ngOnInit() {
  }

  addNewComment(content) {
    this.comments.unshift({ author: 'Unknown', content: content, postingDate: Date.now() });
    this.commentAdded = true;
  }
}
