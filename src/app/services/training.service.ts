import {Injectable} from '@angular/core';
import {Training} from '../models/training';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TrainingService {

  private trainingsUrl = 'api/trainings';

  constructor(private http: HttpClient) {
  }

  getTrainings(filters?): Observable<Training[]> {
    let params = new HttpParams();
    if (filters !== undefined) {
      params = filters.name ? params.append('name', filters.name) : params;
    }
    return this.http.get<Training[]>(this.trainingsUrl, {params: params});
  }

  getTraining(id: number): Observable<Training> {
    const url = `${this.trainingsUrl}/${id}`;
    return this.http.get<Training>(url);
  }
}
