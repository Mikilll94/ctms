import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CommentService {

  private commentsUrl = 'api/comments';

  constructor(private http: HttpClient) { }

  addComment(comment: any): Observable<Comment> {
    console.log(comment);
    return this.http.post<Comment>(this.commentsUrl, comment);
  }

  getComments(trainingId: number): Observable<any> {
    return this.http.get(`${this.commentsUrl}?trainingId=${trainingId}`);
  }
}
