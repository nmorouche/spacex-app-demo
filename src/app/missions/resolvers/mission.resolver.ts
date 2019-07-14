import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { MissionsService } from '../services/missions.service';
import { Mission } from '../models/mission.model';

@Injectable({
    providedIn: 'root',
})
export class MissionResolver implements Resolve<Mission> {
    constructor(private missionsService: MissionsService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Mission> {
        return this.missionsService.getMission(route.paramMap.get('id'));
    }
}
