import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MissionResolver implements Resolve<string> {
    constructor() { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
        console.log(route.paramMap.get('id'));
        return '12345';
    }
}
