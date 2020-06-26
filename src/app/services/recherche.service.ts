import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RechercheService {

  private url: any = 'https://prod-14.francecentral.logic.azure.com:443/workflows/4c1533f33a374f38940651130ff7ea12/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=J5cEPoUChDS0uUabDAbgrisfhYwnByKtHMMClR1zIX0';

  constructor(private http: HttpClient) {
  }

  getRechercheCommune(body): Observable<any> {
    const myheader = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.url, body, {headers: myheader});
  }

}
