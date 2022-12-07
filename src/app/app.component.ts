import { Component} from '@angular/core';
import {clientes} from './models/clientes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dms-angular-basic-T35';
  nombre='';
  CIF='';
  direccion='';
  grupo="";
  listaclientes: clientes[] = [];

  guardarCliente(): void{
    const cliente : clientes = {
      nombre: this.nombre,
      CIF: this.CIF,
      direccion: this.direccion,
      grupo : this.grupo
    }
    this.listaclientes.push(cliente);
    this.nombre='';
    this.CIF='';
    this.direccion='';
    this.grupo='';
  }
}

