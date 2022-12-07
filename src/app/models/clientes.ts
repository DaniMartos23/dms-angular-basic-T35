export class clientes{
  nombre: string;
  CIF: string;
  direccion: string;
  grupo: string;

  constructor(nombre:string, CIF:string, direccion:string,grupo:string){
      this.nombre = nombre;
      this.CIF = CIF;
      this.direccion = direccion;
      this.grupo = grupo;
  }

}
