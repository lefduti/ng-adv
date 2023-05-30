import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first, mergeMap } from 'rxjs/operators';
import { AuthState } from './state/auth.reducer';
import { getToken } from './state/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class FBAuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<AuthState>) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return this.store.select(getToken).pipe(
      first(),
      mergeMap((token) => {
        const authReq = !!token
          ? req.clone({
              setHeaders: { Authorization: 'Bearer ' + token },
            })
          : req;
        return next.handle(authReq);
      })
    );
  }
}
