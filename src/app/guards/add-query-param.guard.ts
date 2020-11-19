import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddQueryParamGuard implements CanActivate {
  REQUIRED_PARAMS: string[] = ['test', 'location', 'layout'];

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    routerState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const hasAllRequiredQueryParams = this.REQUIRED_PARAMS.every((param) =>
      route.queryParamMap.has(param)
    );
    if (!hasAllRequiredQueryParams) {
      const urlTree = this.router.parseUrl(routerState.url);
      const missingParams = this.REQUIRED_PARAMS.filter(
        (param) => !route.queryParamMap.has(param)
      );

      missingParams?.forEach(
        (param) => (urlTree.queryParams[param] = 'success')
      );

      return of(urlTree);
    }

    return of(true);
  }
}
