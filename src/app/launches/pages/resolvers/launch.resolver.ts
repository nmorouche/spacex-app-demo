import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Launch } from '../../Models/Launch';
import { LaunchesService } from '../../services/launches.service';

@Injectable({
    providedIn: 'root',
})
export class LaunchResolver implements Resolve<Launch> {
    constructor(private launchesService: LaunchesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Launch> {
        return this.launchesService.getLaunch(route.paramMap.get('id'));
    }
}