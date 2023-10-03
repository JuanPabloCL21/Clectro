import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Clectro';
  
  contenedor_login_register: any = {
    clroriginal: true,
    clrchange:false
  };

  formulario_login: any ={
    floriginal: true,
    flchange:false
  }

  formulario_register: any ={
    froriginal:true,
    frchange:false
  }

  caja_trasera_register: any ={
    ctroriginal:true,
    ctrchange:false
  }

  caja_trasera_login: any ={
    ctloriginal:true,
    ctlchange:false
  }



  cambiarEstilos(){
    this.contenedor_login_register.clroriginal =false;
    this.contenedor_login_register.clrchange =true;
    this.formulario_login.floriginal=false;
    this.formulario_login.flchange=true;
    this.formulario_register.froriginal=false;
    this.formulario_register.frchange=true;
    this.caja_trasera_register.ctroriginal=false;
    this.caja_trasera_register.ctrchange=true;
    this.caja_trasera_login.ctloriginal=false;
    this.caja_trasera_login.ctlchange=true;
  }

  cambiarEstilos2(){
    this.contenedor_login_register.clroriginal =true;
    this.contenedor_login_register.clrchange =false;
    this.formulario_login.floriginal=true;
    this.formulario_login.flchange=false;
    this.formulario_register.froriginal=true;
    this.formulario_register.frchange=false;
    this.caja_trasera_register.ctroriginal=true;
    this.caja_trasera_register.ctrchange=false;
    this.caja_trasera_login.ctloriginal=true;
    this.caja_trasera_login.ctlchange=false;
  }


}
