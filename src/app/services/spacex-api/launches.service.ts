import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Launch } from 'src/app/models/mission.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LaunchesService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3/';
   }

  getAllLaunches(): Observable<Launch[]> {
    const requestEndpoint = this.apiBaseUrl + 'launches?order=desc';
    return this.http.get<Launch[]>(requestEndpoint).pipe(
      map(missions => {
        return missions;
      })
    );
  }
}
