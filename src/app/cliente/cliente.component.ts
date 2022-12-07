import { Component, Input} from '@angular/core';
import {clientes} from '../models/clientes'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent {
    @Input() clientestot: any;
    constructor(){}


}
