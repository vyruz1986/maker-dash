import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Link } from '../interfaces/link';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
   providedIn: 'root'
})
export class DataService {
   constructor(
      private _http: HttpClient,
      @Inject('BASE_URL') private _baseUrl: string
   ) {}

   getLinks() {
      return this._http
         .get<Link[]>(this._baseUrl + 'api/links')
         .pipe(catchError(this.handleError));
   }

   updateLink(link: Link) {
      return this._http
         .put<Link[]>(this._baseUrl + 'api/links/' + link.id, link)
         .pipe(catchError(this.handleError));
   }

   deleteLink(id: number) {
      return this._http
         .delete(this._baseUrl + 'api/links/' + id)
         .pipe(catchError(this.handleError));
   }

   createLink(link: Link) {
      return this._http
         .post<Link>(this._baseUrl + 'api/links', link)
         .pipe(catchError(this.handleError));
   }

   private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
         // A client-side or network error occurred. Handle it accordingly.
         console.error('An error occurred:', error.error.message);
      } else {
         // The backend returned an unsuccessful response code.
         // The response body may contain clues as to what went wrong,
         console.error(
            `Backend returned code ${error.status}, ` +
               `body was: ${error.error}`
         );
      }
      // return an observable with a user-facing error message
      return throwError('Something bad happened; please try again later.');
   }
}
