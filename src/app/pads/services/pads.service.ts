import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LaunchPad } from '../models/launch-pad.model';
import { LandPad } from '../models/land-pad.model';

@Injectable({
  providedIn: 'root'
})
export class PadsService {
  private apiBaseUrl: string;

  constructor(private http: HttpClient) {
    this.apiBaseUrl = 'https://api.spacexdata.com/v3';
  }

  getLaunchPads(): Observable<LaunchPad[]> {
    const requestEndpoint = `${this.apiBaseUrl}/launchpads`;
    return this.http.get<LaunchPad[]>(requestEndpoint).pipe(
      map((pads: LaunchPad[]) => {
        return pads;
      })
    );
  }

  getLandPads(): Observable<LandPad[]> {
    const requestEndpoint = `${this.apiBaseUrl}/landpads`;
    return this.http.get<LandPad[]>(requestEndpoint).pipe(
      map((pads: LandPad[]) => {
        return pads;
      })
    );
  }
}
