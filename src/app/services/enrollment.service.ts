import {Injectable} from '@angular/core';
import {UserService} from './user.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class EnrollmentService {

  private enrollmentsUrl = 'api/enrollments';

  constructor(private http: HttpClient, private userService: UserService) {
  }

  getUsersEnrolled(trainingId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.enrollmentsUrl}?trainingId=${trainingId}`)
      .flatMap(enrollments => {
        if (!enrollments.length) return Observable.of([]);
        return Observable.forkJoin(
          enrollments.map(enrollment => {
            return this.userService.getUser(enrollment.userId);
          })
        );
      });
  }
}
