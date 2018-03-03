import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  private usersUrl = 'api/users';
  private enrollmentsUrl = 'api/enrollments';

  constructor(private http: HttpClient) {
  }

  getUsersEnrolled(trainingId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.enrollmentsUrl}?trainingId=${trainingId}`)
      .map(users => users.map(user => user.userId));
  }

  getUser(userId: number): Observable<any> {
    return this.http.get<any>(`${this.usersUrl}/${userId}`);
  }
}