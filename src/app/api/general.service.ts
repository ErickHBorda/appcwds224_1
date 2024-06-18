import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(
    private httpClient: HttpClient //Esto inyecta una instancia de HttpClient en el servicio, 
                                  //lo que permite que el servicio utilice HttpClient para hacer solicitudes HTTP.
  ) { }

  public indexGet(): Observable<any> {
		return this.httpClient.get('http://localhost:8080'); //utiliza httpClient para hacer una solicitud HTTP GET a la URL
	}
}
