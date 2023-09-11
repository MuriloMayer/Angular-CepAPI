
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {


  constructor(private http: HttpClient) { }

  chamarAPI( cep: string) {
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    return this.http.get(apiUrl);
  }
  
}
