import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CommentService {

  private commentsUrl = 'api/comments';

  constructor(private http: HttpClient) {
  }

  addComment(comment: any): Observable<Comment> {
    return this.http.post<Comment>(this.commentsUrl, comment);
  }

  getComments(trainingId: number): Observable<any> {
    return this.http.get<Comment[]>(`${this.commentsUrl}?trainingId=${trainingId}`)
      .map(comments => {
        comments.sort((a, b) => {
          return Date.parse(a.postingDate) < Date.parse(b.postingDate) ? -1 : 1;
        });
        return comments;
      });
  }

);
}
