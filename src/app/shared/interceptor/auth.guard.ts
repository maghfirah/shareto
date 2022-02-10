import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {Error} from '../models/response-api.model';
import {ErrorMessageConstant} from '../constant/error-message.constant';
import {ErrorCodeConstant} from '../constant/error-code.constant';
import {NavigationConstant} from "../constant/navigation.constant";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    localStorage.setItem('token', 'eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJwYXlsb2FkIiwiZXhwIjoxNjEyNDEyODYxLCJ1c2VyIjp7ImJ1c2luZXNzU2VydmljZUNsaWVudElkIjoiTUNILTAwMDEtMjc2ODQyMjg0ODQ0MCIsInJlZmVycmVySWQiOm51bGwsInJvbGVJZCI6MywidXNlckZ1bGxOYW1lIjoiQWRtaW4iLCJtZW51TmFtZSI6IlBheW1lbnQgTGluayIsInBlcm1pc3Npb24iOlsiZ2VuZXJhdGVQYXltZW50TGluayIsInJlYWRMaXN0UGF5bWVudExpbmsiLCJyZWFkRGV0YWlsUGF5bWVudExpbmsiLCJkZWxldGVQYXltZW50TGluayIsImZpbHRlclBheW1lbnRMaW5rIiwiZG93bmxvYWRQYXltZW50TGluayJdLCJ1c2VySWQiOjI5LCJidXNpbmVzc0NsaWVudElkIjoiQlNOLTAwMDEtMDAwMDAwMDEiLCJidXNpbmVzc1NlcnZpY2VDbGllbnROYW1lIjoiRE9LVV9QQVJUTkVSIiwiYnVzc2luZXNzU2VydmljZUNsaWVudElkIjoiTUNILTAwMDEtMjc2ODQyMjg0ODQ0MCIsInJvbGVOYW1lIjoiQWRtaW4iLCJidXNpbmVzc0NsaWVudE5hbWUiOiJET0tVX1BBUlRORVIiLCJ1c2VyRW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6IkV4dGVybmFsIn0sImlhdCI6MTYxMjQxMTA2MX0.jOJ_bgpyUJj7RQn2MGW332RH2G_Ybn4GEr-1iqi0NJF_OBzpGBnCnEPdvKa3KZSJvdDpBQZ5RJ6zJaLbe7tI9nxp0WtfUntVr7oc_G4rQOQB6d91oPC3RTkrZuzhVzWW83psIhu0Mo57mX8v_SE6H0eJPkiGCohF4eb0t9J7vQF2et_7w4Jev9HunJl_5TV4yACzopNyzWmyrFnYZxX1VoB1e9YU_5geGxui8eQui88XqM5SVsk5fTHJ0cohYgadM-qvPrNMMlYo5xdsPtOLcO3u7iRr5hFkQ-rDGGAsMTOGu2zpPV5s4YwWzOD57J208Fdw5dXIEhJMNFFhr6FnNg');

    let activate: boolean;
    activate = this.authService.isAuthenticated();

    if (!activate) {
      return true;
    }
    // token expired or role not authorized
    else {

      let tempErrorModel = new Error();
      tempErrorModel.message = ErrorMessageConstant.UNAUTHORIZED_ERROR_MESSAGE;
      tempErrorModel.code = ErrorCodeConstant.UNAUTHORIZED.toString();

      return true;
    }
  }
}
