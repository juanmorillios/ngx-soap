import { Injectable } from '@angular/core';
import { createClient } from './soap/soap';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from './soap/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NgxSoapService {

  constructor(private http: HttpClient) {
    console.log('ngx-soap service');
  }

  createClient(wsdlUrl: string, options: any = {}, endpoint?: string): Observable<Client> {
    options.httpClient = this.http;
    return createClient(wsdlUrl, options, endpoint) ;
  }
}
