import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class OficinaService {
    constructor(
        private httpClient: HttpClient
    ){}
    public insert(formData: FormData): Observable<any>{
        return this.httpClient.post('http://localhost:8080/pais/insert',formData).pipe(retry(3));
    }

    public getAll(): Observable<any>{
        return this.httpClient.get<any[]>('http://localhost:8080/pais/getall').pipe(retry(3));
    }

    public delete(codigoOficina: String): Observable<any>{
        return this.httpClient.delete<any>(`http://localhost:8080/pais/delete/${codigoOficina}`).pipe(retry(3));
    }

    public update(formData: FormData): Observable<any> {
		return this.httpClient.put('http://localhost:8080/pais/update', formData).pipe(retry(3));
	}

    public search(descripcion: string): Observable<any>{
        return this.httpClient.get(`http://localhost:8080/pais/search?descripcion=${descripcion}`).pipe(retry(3));
    }
}