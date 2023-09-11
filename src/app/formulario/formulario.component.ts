import { Component } from '@angular/core';
import { FormularioService } from './formulario.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  resultadoAPI: any;
  cep: string= '';
  constructor(private FormularioService : FormularioService) {}

  
  async chamarAPI() {
    try {
       const data = await this.FormularioService.chamarAPI(this.cep).toPromise();
      console.log(data);
      this.resultadoAPI = data;
  
      if (this.resultadoAPI.erro === true) {
        window.alert("CEP Inválido")
      }
    } catch (error) {
      window.alert("CEP Inválido")
    }
  }
    
      
  }
  
