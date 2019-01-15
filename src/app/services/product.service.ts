




import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly url = `${environment.apiUrl}/Product`;
  constructor(private http: HttpClient) { }

  getProducts<T>(filter: any): Observable<T> {
    return this.http.post<T>(this.url, filter, httpOptions);
  }

  addProduct<T>(product: any): Observable<T> {
    return this.http.post<T>(this.url + '/add', product, httpOptions);
  }

  updProduct<T>(product: any): Observable<T> {
    return this.http.put<T>(this.url, product, httpOptions);
  }

  delProduct<T>(id: number): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().set('id', id.toString())
    };
    return this.http.delete<T>(this.url, options);
  }
}
