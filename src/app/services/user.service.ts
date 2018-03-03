import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  private usersUrl = 'api/users';

  constructor(private http: HttpClient) {
  }

  getUser(userId: number): Observable<any> {
    return this.http.get<any>(`${this.usersUrl}/${userId}`);
  }
}
