import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {UserService} from './user.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class EnrollmentService {

  private enrollmentsUrl = 'api/enrollments';

  constructor(private http: HttpClient, private userService: UserService) { }

  getUsersEnrolled(trainingId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.enrollmentsUrl}?trainingId=${trainingId}`)
      .flatMap(enrollments => {
        return Observable.forkJoin(
          enrollments.map(enrollment => {
            return this.userService.getUser(enrollment.userId);
          })
        );
      });
  }
}
