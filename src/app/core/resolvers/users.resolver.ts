import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { inject } from '@angular/core';

export const usersResolver = (router: RouterStateSnapshot | ActivatedRouteSnapshot, state: undefined) => {
  return inject(DataService).getUsers();
};
