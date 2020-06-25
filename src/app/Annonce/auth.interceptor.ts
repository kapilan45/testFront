import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { AuthStorageService } from './auth-storage.service';

@Injectable({
	providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
	constructor(private authStorage: AuthStorageService) { }


	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("a http request deteceted")
	  if (!request || !request.url) {
      console.log("request dont have url");
			return next.handle(request);
		}

		console.dir(request);

		let authHeaders = this.authStorage.getAuthHeader();
		console.dir(authHeaders);
		if (authHeaders) {
			console.log('AuthInterceptor .. adding authHeader for user:', this.authStorage.user);
			request = request.clone({
				setHeaders: authHeaders
			});
		} else {
			console.log('AuthInterceptor .. NO authHeader');
		}
		return next.handle(request);
	}
}
