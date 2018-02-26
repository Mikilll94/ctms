import {Injectable} from '@angular/core';
import {Training} from '../models/training';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TrainingService {

  private trainingsUrl = 'api/trainings';

  constructor(private http: HttpClient) {
  }

  getTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(this.trainingsUrl);
  }

  getTraining(id: number): Observable<Training> {
    const url = `${this.trainingsUrl}/${id}`;
    return this.http.get<Training>(url);
  }
}
