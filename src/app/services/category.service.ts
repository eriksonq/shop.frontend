




import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryM } from '../models/category-m';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  readonly url = `${environment.apiUrl}/Category`;
  constructor(private http: HttpClient) { }

  getCategories<T>(): Observable<T> {
    return this.http.get<T>(this.url, httpOptions);
  }

  addCategory<T>(category: any): Observable<T> {
    return this.http.post<T>(this.url + '/add', category, httpOptions);
  }

  updCategory<T>(category: CategoryM): Observable<T> {
    return this.http.put<T>(this.url + '/update', category, httpOptions);
  }

  delCategory<T>(id: number): Observable<T> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().set('categoryId', id.toString())
    };
    return this.http.delete<T>(this.url + '/delete', options);
  }

}
