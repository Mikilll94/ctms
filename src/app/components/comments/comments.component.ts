import {Component, Input, OnInit} from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {Comment} from '../../models/comment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() comments: Comment[];
  commentAdded = false;

  constructor(private route: ActivatedRoute, private commentService: CommentService) {
  }

  ngOnInit() {
  }

  addNewComment(content) {
    this.commentAdded = true;
    const id = +this.route.snapshot.paramMap.get('id');
    this.commentService.addComment(new Comment('Gall Anonim', id, content, new Date(Date.now())))
      .subscribe(comment => {
        this.comments.unshift(comment);
      });
  }
}
